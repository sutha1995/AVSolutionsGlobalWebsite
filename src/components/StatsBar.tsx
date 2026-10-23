const STATS = [
  { value: '100%', label: 'Showtime Reliability' },
  { value: 'End-to-End', label: 'Dedicated On-Site Crew' },
]

export default function StatsBar() {
  return (
    <div className="mx-auto mb-10 grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 rounded-[10px] border border-white/[0.07] bg-white/[0.02] px-7 py-[22px] text-center">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <div className="mb-1 font-display text-2xl font-bold tracking-[0.5px] text-white">{stat.value}</div>
          <div className="text-[11px] font-semibold uppercase tracking-[1px] text-slate-500">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
