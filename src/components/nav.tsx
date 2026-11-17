'use client'

import { useEffect, useState } from 'react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

const LINKS = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
  { path: '/work', text: 'Work' },
]

const WARM_ROUTES = new Set(['/', '/work'])

export default function Nav() {
  const path = usePathname()
  const warm = WARM_ROUTES.has(path)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        warm ? 'text-ink' : 'text-ink dark:text-bone',
        warm && scrolled && 'bg-paper border-ink/10 border-b',
      )}
    >
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-[22px] leading-none tracking-[-0.01em] italic"
        >
          Borngreat
          <span className="text-accent not-italic">.</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-7">
          <ul className="flex items-center gap-4 font-mono text-[10px] tracking-[0.2em] uppercase sm:gap-7 sm:text-[11px]">
            {LINKS.map((link) => {
              const active = path === link.path

              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    aria-current={active ? 'page' : undefined}
                    className={clsx(
                      'group relative inline-flex py-2 transition-opacity duration-300',
                      active ? 'opacity-100' : 'opacity-60 hover:opacity-100',
                    )}
                  >
                    {link.text}
                    <span
                      className={clsx(
                        'bg-accent absolute inset-x-0 bottom-0 h-px origin-left transition-transform duration-300',
                        active
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100',
                      )}
                      aria-hidden
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {!warm && <ThemeSwitcher />}

          <Link
            href="/#contact"
            className={clsx(
              'hover:bg-accent hover:text-ink hidden rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors duration-300 sm:inline-flex',
              warm
                ? 'bg-ink text-bone'
                : 'bg-ink text-bone dark:bg-bone dark:text-ink',
            )}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
