import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/[0.08] bg-abyss px-5 pb-10 pt-[50px] text-center text-xs tracking-[0.5px] text-slate-500">
      <div className="mb-3.5 inline-flex size-11 flex-col items-center justify-center rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
        <span className="font-display text-base font-extrabold leading-none text-ink">AV</span>
      </div>
      <div className="mb-2 font-display text-[15px] font-bold tracking-[2px] text-white">AV SOLUTIONS GLOBAL</div>
      <p className="mb-1.5 text-[13px] text-slate-400">Event Organizers & Audio-Visual Production</p>
      <p className="text-xs text-slate-500">Serving Kuala Lumpur, Selangor & Peninsular Malaysia</p>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <Link to="/" className="text-[11px] font-semibold uppercase tracking-[1px] text-slate-400 transition-colors duration-150 hover:text-white">
          Home
        </Link>
        <Link to="/services" className="text-[11px] font-semibold uppercase tracking-[1px] text-slate-400 transition-colors duration-150 hover:text-white">
          Services & Work
        </Link>
        <Link to="/contact" className="text-[11px] font-semibold uppercase tracking-[1px] text-slate-400 transition-colors duration-150 hover:text-white">
          Contact
        </Link>
      </div>

      <div className="mt-3.5 flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/60126172342"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
        >
          <span>💬</span> WhatsApp: 012-617 2342
        </a>
        <a
          href="https://www.tiktok.com/@avsolutionsglobal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
        >
          <span>🎬</span> TikTok: @avsolutionsglobal
        </a>
      </div>

      <div className="mt-6 text-[11px] uppercase tracking-[1px] text-slate-600">
        © 2026 AV Solutions Global. All rights reserved.
      </div>
    </footer>
  )
}
