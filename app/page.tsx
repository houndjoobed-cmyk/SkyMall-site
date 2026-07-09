import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { HowItWorks } from '@/components/how-it-works'
import { ForWhom } from '@/components/for-whom'
import { Markets } from '@/components/markets'
import { Waitlist } from '@/components/waitlist'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <ForWhom />
      <Markets />
      <Waitlist />
      <Footer />
    </main>
  )
}
