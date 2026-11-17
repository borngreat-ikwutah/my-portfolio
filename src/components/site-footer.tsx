'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { LINKS } from '@/components/links'

export default function SiteFooter() {
  const path = usePathname()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto w-full max-w-[1320px] px-5 pt-14 pb-7 sm:px-8">
        <div className="border-bone/15 flex flex-col gap-10 border-b pb-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-[28px] leading-none tracking-[-0.01em] italic">
              Borngreat
              <span className="text-accent not-italic">.</span>
            </p>
            <p className="text-bone/50 mt-4 max-w-[26ch] text-sm leading-relaxed">
              Software engineer building interfaces people actually enjoy using.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.2em] uppercase sm:text-[11px]">
            {LINKS.map((link) => {
              const external = link.href.startsWith('http')

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    className="text-bone/60 hover:text-bone group inline-flex items-center gap-1.5 py-1.5 transition-colors duration-300"
                  >
                    {link.label}
                    <span
                      className="text-bone/30 group-hover:text-accent transition-colors duration-300"
                      aria-hidden
                    >
                      &#8599;
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="text-bone/45 flex flex-col gap-3 pt-6 font-mono text-[10px] tracking-[0.2em] uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Borngreat Ikwutah</p>

          <Link
            href={`${path}#top`}
            className="hover:text-accent w-fit transition-colors duration-300"
          >
            Back to top
            <span className="ml-1" aria-hidden>
              &#8593;
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
