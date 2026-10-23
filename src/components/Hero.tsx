import { useEffect, useState } from 'react'

function HeroBackdrop() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setEnabled(false)
  }, [])

  if (!enabled) return null

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <video
        src="/hero-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-void/85 via-void/65 to-void" />
    </div>
  )
}

export default function Hero() {
  const scrollToBuilder = () => {
    document.getElementById('brief-builder')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-[900px] px-6 pb-[38px] pt-16 text-center">
        <div className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-300 backdrop-blur-sm">
          Curated Audio-Visual & Technical Direction
        </div>
        <h1 className="mb-[18px] font-display text-4xl font-bold leading-[1.25] tracking-[0.5px] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Sound, Lighting & Technical Execution <br />
          <span className="bg-linear-to-b from-white from-20% to-slate-400 to-100% bg-clip-text text-transparent">
            Where Every Detail Matters.
          </span>
        </h1>
        <p className="mx-auto mb-[30px] max-w-[680px] text-[15px] leading-[1.7] text-slate-300 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
          From high-profile corporate galas and luxury ballrooms to prestigious cultural showcases. We deliver
          calibrated acoustics, atmospheric lighting, and experienced on-site engineers so your event runs
          flawlessly.
        </p>
        <div className="mb-[34px] flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={scrollToBuilder}
            className="inline-flex cursor-pointer items-center gap-2 rounded-md border-none bg-white px-[26px] py-[13px] text-[13px] font-bold tracking-[0.5px] text-ink shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-200 hover:-translate-y-px hover:bg-slate-200"
          >
            Start Your Event Brief
          </button>
          <a
            href="https://wa.me/60126172342"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-white/[0.14] bg-white/[0.04] px-6 py-[13px] text-[13px] font-semibold text-slate-100 backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/[0.09]"
          >
            Direct WhatsApp Desk
          </a>
        </div>
      </div>
    </section>
  )
}
