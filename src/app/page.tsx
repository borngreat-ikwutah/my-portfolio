import { existsSync } from 'node:fs'
import path from 'node:path'
import Hero from '@/components/sections/hero'
import SelectedWork from '@/components/sections/selected-work'
import Contact from '@/components/sections/contact'

export default function Home() {
  const hasPortrait = existsSync(
    path.join(process.cwd(), 'public', 'portrait.png'),
  )

  return (
    <main>
      <Hero
        portraitSrc={
          hasPortrait ? '/portrait.png' : '/portrait-placeholder.png'
        }
      />
      <SelectedWork />
      <Contact />
    </main>
  )
}
