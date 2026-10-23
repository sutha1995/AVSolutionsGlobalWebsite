import SectionHeader from './SectionHeader'

const ROWS = [
  {
    aspect: 'Engineering',
    rental: 'Drops off speakers, plugs in cables, leaves',
    avs: 'Calibrates room acoustics, maps delay towers, stays on console',
  },
  {
    aspect: 'Crew Quality',
    rental: 'Freelance crew unfamiliar with event running sheet',
    avs: 'Dedicated in-house sound and lighting directors',
  },
  {
    aspect: 'Aesthetic Standard',
    rental: 'Visible loose cables and scuffed road cases',
    avs: 'Concealed cable dressing, discreet black hardware rigs',
  },
  {
    aspect: 'Contingency',
    rental: 'Delays when venue power or layout shifts',
    avs: 'Redundant mics, backup routing, rapid on-site adaptation',
  },
]

export default function ComparisonTable() {
  return (
    <section className="mx-auto max-w-[900px] px-6 py-[30px]">
      <SectionHeader eyebrow="The Difference" title="Gear Rental vs. Technical Execution" />
      <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-panel-deep">
        <div className="-my-px overflow-x-auto rounded-xl">
          <table className="w-full min-w-[540px] border-collapse text-left text-[12.5px]">
          <thead>
            <tr>
              <th className="w-[28%] border-b border-white/10 bg-table-head px-[18px] py-3.5 font-display text-xs uppercase tracking-[1px] text-white">
                Standard
              </th>
              <th className="w-[36%] border-b border-white/10 bg-table-head px-[18px] py-3.5 font-display text-xs uppercase tracking-[1px] text-white">
                Typical Rental Houses
              </th>
              <th className="w-[36%] border-b border-white/10 bg-table-head bg-white/[0.02] px-[18px] py-3.5 font-display text-xs uppercase tracking-[1px] text-white">
                AV Solutions Global
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {ROWS.map((row) => (
              <tr key={row.aspect}>
                <td className="px-[18px] py-3.5 align-top leading-[1.5] text-slate-400">
                  <strong className="font-semibold text-slate-100">{row.aspect}</strong>
                </td>
                <td className="px-[18px] py-3.5 align-top leading-[1.5] text-slate-400">{row.rental}</td>
                <td className="bg-white/[0.02] px-[18px] py-3.5 align-top leading-[1.5] text-slate-200">
                  {row.avs}
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
