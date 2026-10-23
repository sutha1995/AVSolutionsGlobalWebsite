import { useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'
import { SHOWS, type ShowMedia } from '../data/shows'

function Slide({ src, type, caption, description }: ShowMedia) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (type !== 'video') return
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [type])

  return (
    <figure className="relative h-[62vh] max-h-[560px] w-[78vw] max-w-[420px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.12] bg-panel sm:w-[44vw] lg:w-[30vw]">
      {type === 'video' ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full select-none object-cover"
        />
      ) : (
        <img src={src} alt={caption} loading="lazy" decoding="async" className="h-full w-full select-none object-cover" draggable={false} />
      )}
      <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent p-4 pt-12 text-left">
        <div className="font-display text-sm font-bold tracking-[0.5px] text-white">{caption}</div>
        {description && <p className="mt-1 text-[11px] leading-[1.6] text-slate-300">{description}</p>}
      </figcaption>
    </figure>
  )
}

type ReelRowProps = {
  items: ShowMedia[]
  loopSeconds: number
}

function ReelRow({ items, loopSeconds }: ReelRowProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const paint = (p: number, frac: number) => {
    const thumb = thumbRef.current
    if (thumb) {
      thumb.style.width = `${frac * 100}%`
      thumb.style.left = `${p * (1 - frac) * 100}%`
    }
  }

  useEffect(() => {
    let raf = 0
    const readTrack = () => {
      const track = trackRef.current
      if (!track) return
      const half = track.scrollWidth / 2
      if (half <= 0) return
      const t = getComputedStyle(track).transform
      let tx = 0
      if (t && t !== 'none') {
        const v = (t.match(/matrix.*\((.+)\)/)?.[1] ?? '').split(',').map(parseFloat)
        if (v.length === 16) tx = v[12]
        else if (v.length === 6) tx = v[4]
      }
      const p = Math.min(1, Math.max(0, 1 + tx / half))
      const frac = Math.min(1, Math.max(0.04, window.innerWidth / track.scrollWidth))
      paint(p, frac)
    }
    const tick = () => {
      if (!draggingRef.current) readTrack()
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const scrubTo = (clientX: number) => {
    const bar = barRef.current
    const track = trackRef.current
    if (!bar || !track) return
    const rect = bar.getBoundingClientRect()
    const p = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    const half = track.scrollWidth / 2
    track.style.animation = 'none'
    track.style.transform = `translate3d(${(p - 1) * half}px, 0, 0)`
    const frac = Math.min(1, Math.max(0.04, window.innerWidth / track.scrollWidth))
    paint(p, frac)
  }

  const release = () => {
    const bar = barRef.current
    const track = trackRef.current
    if (!bar || !track) return
    const thumb = thumbRef.current
    const frac = Math.min(1, Math.max(0.04, window.innerWidth / track.scrollWidth))
    const p = thumb ? parseFloat(thumb.style.left || '0') / (100 * (1 - frac) || 1) : 0
    draggingRef.current = false
    track.style.animation = ''
    track.style.transform = ''
    track.style.animationDelay = `${-p * loopSeconds}s`
  }

  const trackItems = [...items, ...items]

  return (
    <div>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-void to-transparent" />
        <div className="motion-reduce:overflow-x-auto">
          <div
            ref={trackRef}
            className="marquee-track flex w-max items-center gap-5 px-3 will-change-transform sm:gap-6"
            style={{ animationDuration: `${loopSeconds}s` }}
          >
            {trackItems.map((item, i) => (
              <Slide key={`${item.src}-${i}`} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div
        ref={barRef}
        role="scrollbar"
        aria-label="Show reel position"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        className="relative mx-auto mt-8 h-5 w-full max-w-[640px] cursor-pointer touch-none select-none px-6"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          draggingRef.current = true
          scrubTo(e.clientX)
        }}
        onPointerMove={(e) => {
          if (draggingRef.current) scrubTo(e.clientX)
        }}
        onPointerUp={release}
        onLostPointerCapture={release}
      >
        <div className="absolute inset-x-6 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/15">
          <div ref={thumbRef} className="absolute top-0 h-full rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  )
}

export default function ShowReel() {
  const launches = SHOWS.filter((item) => item.category === 'Product Launch')
  const miniConcerts = SHOWS.filter((item) => item.category === 'Mini Concert')
  const culturalEvents = SHOWS.filter((item) => item.category === 'Cultural Event')
  const govermentMeetings = SHOWS.filter((item) => item.category === 'Goverment Meeting Setup')
  const installations = SHOWS.filter((item) => item.category === 'Installation')
  const eventPlanning = SHOWS.filter((item) => item.category === 'Event Planning')
  const featured = SHOWS.filter((item) => !item.category)

  return (
    <>
      <section className="overflow-x-clip py-10" aria-label="Show reel">
        <div className="mx-auto mb-8 w-full max-w-[900px] px-6">
          <SectionHeader eyebrow="Production Gallery" title="Straight From Our Shows" />
        </div>
        <ReelRow items={featured} loopSeconds={150} />
        <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[2px] text-slate-500">
          Hover to pause · Drag the bar to browse · {SHOWS.length} shows &amp; counting
        </p>
      </section>
      <section className="overflow-x-clip pb-10" aria-label="Product Launch show reel">
        <div className="mx-auto mb-8 w-full max-w-[900px] px-6">
          <SectionHeader eyebrow="Category" title="Product Launch" />
        </div>
        <ReelRow items={launches} loopSeconds={45} />
      </section>
      <section className="overflow-x-clip pb-10" aria-label="Mini Concert show reel">
        <div className="mx-auto mb-8 w-full max-w-[900px] px-6">
          <SectionHeader eyebrow="Category" title="Mini Concert" />
        </div>
        <ReelRow items={miniConcerts} loopSeconds={30} />
      </section>
      <section className="overflow-x-clip pb-10" aria-label="Cultural Event show reel">
        <div className="mx-auto mb-8 w-full max-w-[900px] px-6">
          <SectionHeader eyebrow="Category" title="Cultural Event" />
        </div>
        <ReelRow items={culturalEvents} loopSeconds={30} />
      </section>
      <section className="overflow-x-clip pb-10" aria-label="Goverment Meeting Setup show reel">
        <div className="mx-auto mb-8 w-full max-w-[900px] px-6">
          <SectionHeader eyebrow="Category" title="Goverment Meeting Setup" />
        </div>
        <ReelRow items={govermentMeetings} loopSeconds={30} />
      </section>
      <section className="overflow-x-clip pb-10" aria-label="Installation show reel">
        <div className="mx-auto mb-8 w-full max-w-[900px] px-6">
          <SectionHeader eyebrow="Category" title="Installation" />
        </div>
        <ReelRow items={installations} loopSeconds={30} />
      </section>
      <section className="overflow-x-clip pb-10" aria-label="Event Planning show reel">
        <div className="mx-auto mb-8 w-full max-w-[900px] px-6">
          <SectionHeader eyebrow="Category" title="Event Planning" />
        </div>
        <ReelRow items={eventPlanning} loopSeconds={30} />
      </section>
    </>
  )
}
