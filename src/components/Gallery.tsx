import { useEffect, useRef, useState } from 'react'
import SectionHeader from './SectionHeader'

type Slide = {
  src: string
  alt: string
  caption: string
  sub: string
}

const SLIDES: Slide[] = [
  {
    src: '/gallery/behind-the-scenes.jpg',
    alt: 'AV crew setting up and calibrating equipment behind the scenes',
    caption: 'Behind the Scenes',
    sub: 'Crew & engineering at work',
  },
  {
    src: '/gallery/lor-cutout.jpg',
    alt: 'LOR cutout lighting production detail',
    caption: 'LOR Cutout',
    sub: 'Production detail',
  },
  {
    src: '/gallery/stage.jpg',
    alt: 'Full stage setup with sound and lighting rig',
    caption: 'Stage Setup',
    sub: 'Full production rig',
  },
]

const AUTOPLAY_MS = 4000
const STEP_DEG = 360 / SLIDES.length

type Layout = {
  cardW: number
  radius: number
  perspective: number
}

function computeLayout(width: number): Layout {
  if (width < 640) return { cardW: 190, radius: 210, perspective: 900 }
  return { cardW: 280, radius: 340, perspective: 1400 }
}

export default function Gallery() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState<Layout>({ cardW: 280, radius: 340, perspective: 1400 })

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const update = () => setLayout(computeLayout(stage.clientWidth))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % SLIDES.length), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused])

  const step = (dir: 1 | -1) => setActive((a) => (a + dir + SLIDES.length) % SLIDES.length)

  const cardH = Math.round((layout.cardW * 4) / 3)
  const stageH = Math.round((cardH * layout.perspective) / (layout.perspective - layout.radius)) + 8

  return (
    <section className="mx-auto max-w-[900px] overflow-x-clip px-6 py-10" aria-label="Event photo gallery">
      <SectionHeader eyebrow="Production Gallery" title="Straight From Our Shows" />
      <div
        ref={stageRef}
        className="relative w-full"
        style={{ height: stageH, perspective: layout.perspective }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          style={{ transform: `rotateY(${-active * STEP_DEG}deg)`, transformStyle: 'preserve-3d' }}
        >
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`View ${slide.caption}`}
              onClick={() => setActive(i)}
              className="absolute left-1/2 top-1/2 cursor-pointer overflow-hidden rounded-xl border border-white/[0.12] bg-panel [backface-visibility:hidden]"
              style={{
                width: layout.cardW,
                height: cardH,
                marginLeft: -layout.cardW / 2,
                marginTop: -cardH / 2,
                transform: `rotateY(${i * STEP_DEG}deg) translateZ(${layout.radius}px)`,
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full select-none object-cover"
                draggable={false}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent p-3.5 pt-10 text-left">
                <div className="font-display text-sm font-bold tracking-[0.5px] text-white">{slide.caption}</div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[1.5px] text-slate-300">
                  {slide.sub}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => step(-1)}
          className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] text-lg font-semibold text-slate-200 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          ‹
        </button>
        <div className="flex items-center gap-2.5">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to ${slide.caption}`}
              onClick={() => setActive(i)}
              className={
                i === active
                  ? 'h-2 w-6 cursor-pointer rounded-full bg-white transition-all duration-300'
                  : 'h-2 w-2 cursor-pointer rounded-full bg-white/30 transition-all duration-300 hover:bg-white/60'
              }
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => step(1)}
          className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] text-lg font-semibold text-slate-200 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          ›
        </button>
      </div>
    </section>
  )
}
