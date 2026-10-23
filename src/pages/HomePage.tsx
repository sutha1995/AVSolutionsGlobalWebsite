import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import SectionHeader from '../components/SectionHeader'
import BriefBuilder from '../components/BriefBuilder'
import Gallery from '../components/Gallery'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Gallery />

      <section className="mx-auto max-w-[900px] px-6 py-9">
        <SectionHeader eyebrow="Interactive Planning" title="Design Your Event Setup" />
        <BriefBuilder />
      </section>
    </main>
  )
}
