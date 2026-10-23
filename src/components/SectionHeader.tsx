type SectionHeaderProps = {
  eyebrow: string
  title: string
}

export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-7 text-center">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-[2.5px] text-slate-300">{eyebrow}</div>
      <h2 className="font-display text-[26px] font-bold tracking-[0.5px] text-white">{title}</h2>
    </div>
  )
}
