import SectionHeader from './SectionHeader'

const FEATURES = [
  {
    icon: '🔊',
    title: 'Acoustic Precision',
    description:
      'No muddy echoes, no piercing feedback. We map speaker dispersion to your specific room footprint and ceiling height.',
  },
  {
    icon: '💡',
    title: 'Atmospheric Lighting',
    description:
      'From warm ballroom washes to dramatic stage reveals that make your photography and VIP entrances stand out.',
  },
  {
    icon: '🛡️',
    title: 'Safety & Adaptability',
    description:
      'Rigid safety briefings, contingency equipment, and rapid on-site problem solving when venue schedules or room layouts shift.',
  },
]

export default function Capabilities() {
  return (
    <section className="mx-auto max-w-[900px] px-6 py-10">
      <SectionHeader eyebrow="Production Standards" title="Engineered for your Satisfaction" />
      <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-[10px] border border-white/[0.08] bg-panel p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-white/[0.22]"
          >
            <div className="mb-3.5 inline-block text-2xl">{feature.icon}</div>
            <div className="mb-2 font-display text-base font-bold tracking-[0.5px] text-white">{feature.title}</div>
            <p className="text-[13px] leading-[1.6] text-mist">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
