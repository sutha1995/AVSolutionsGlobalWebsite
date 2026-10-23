import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const CONTACT_CHANNELS = [
  {
    icon: '💬',
    label: 'WhatsApp Desk',
    detail: '012-617 2342',
    href: 'https://wa.me/60126172342',
    external: true,
  },
  {
    icon: '🎬',
    label: 'TikTok',
    detail: '@avsolutionsglobal',
    href: 'https://www.tiktok.com/@avsolutionsglobal',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[900px] px-6 py-10">
      <SectionHeader eyebrow="Get In Touch" title="Talk To Our Engineering Desk" />

      <div className="mx-auto mb-8 max-w-[680px] text-center text-[14px] leading-[1.7] text-slate-300">
        Ready to lock in your event production? Reach us directly on WhatsApp for same-day quotes, or follow
        our latest rigs and show setups on TikTok.
      </div>

      <div className="mx-auto grid max-w-[680px] gap-4 sm:grid-cols-2">
        {CONTACT_CHANNELS.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] border border-white/[0.08] bg-panel p-6 text-center transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-white/[0.22]"
          >
            <div className="mb-2.5 text-2xl">{channel.icon}</div>
            <div className="mb-1 font-display text-base font-bold tracking-[0.5px] text-white">
              {channel.label}
            </div>
            <div className="text-[13px] text-mist">{channel.detail}</div>
          </a>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-[680px] rounded-[10px] border border-white/[0.08] bg-white/[0.02] p-6 text-center">
        <div className="mb-1.5 font-display text-sm font-bold uppercase tracking-[1px] text-white">
          Service Area
        </div>
        <p className="text-[13px] leading-[1.6] text-mist">
          Serving Kuala Lumpur, Selangor &amp; Peninsular Malaysia
        </p>
      </div>

      <div className="mt-9 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md border-none bg-white px-[26px] py-[13px] text-[13px] font-bold tracking-[0.5px] text-ink shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-200 hover:-translate-y-px hover:bg-slate-200"
        >
          Start Your Event Brief
        </Link>
      </div>
    </main>
  )
}
