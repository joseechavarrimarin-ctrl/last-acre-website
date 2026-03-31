import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Mission from '@/components/Mission'
import Roadmap from '@/components/Roadmap'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Mission />
      <Roadmap />
      <SocialLinks />
    </main>
  )
}
