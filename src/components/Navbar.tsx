import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-1.5 text-xs font-bold tracking-[0.5px] transition-all duration-150 ${
    isActive
      ? 'border border-white/15 bg-white/10 text-white'
      : 'border border-transparent text-slate-400 hover:text-white'
  }`

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-white/[0.08] bg-void/95 px-4 py-3 sm:px-7 sm:py-4">
      <div className="flex items-center gap-3 sm:gap-3.5">
        <img
          src="/logo.png"
          alt="AV Solutions Global logo"
          className="size-[42px] shrink-0 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.18),0_4px_15px_rgba(0,0,0,0.6)] sm:size-[50px]"
        />
        <div className="flex flex-col justify-center">
          <span className="font-display text-[13px] font-bold leading-[1.2] tracking-[2px] text-white sm:text-[15px]">
            AV SOLUTIONS GLOBAL
          </span>
          <span className="mt-0.5 hidden text-[9px] font-semibold uppercase tracking-[2.2px] text-slate-400 sm:block">
            Event Organizers & AV Production
          </span>
        </div>
      </div>
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex items-center gap-1">
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services & Work' },
            { to: '/contact', label: 'Contact' },
          ].map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <a
          href="https://wa.me/60126172342"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-md border border-white/20 bg-white px-[18px] py-[9px] text-xs font-bold tracking-[0.5px] text-ink transition-all duration-200 hover:-translate-y-px hover:bg-slate-200 md:inline-flex"
        >
          WhatsApp Desk · 012-617 2342
        </a>
      </div>
    </nav>
  )
}
