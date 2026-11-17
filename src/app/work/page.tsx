import type { Metadata } from 'next'
import SelectedWork from '@/components/sections/selected-work'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Projects by Borngreat Ikwutah: healthcare platforms, web3 hubs, and fintech interfaces, designed and shipped end to end.',
}

export default function Work() {
  return (
    <main id="top" className="bg-paper text-ink">
      <SelectedWork
        eyebrow="Archive"
        heading="All"
        accent="work"
        description="Every project here shipped to real users. Healthcare platforms, web3 hubs, and fintech interfaces, designed and built end to end."
      />
      <SiteFooter />
    </main>
  )
}
