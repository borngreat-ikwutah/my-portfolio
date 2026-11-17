'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Sun } from 'lucide-react'
import Links from '@/components/links'

gsap.registerPlugin(useGSAP)

export default function Hero({ portraitSrc }: { portraitSrc: string }) {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.hero-word, .hero-portrait, .hero-fade', {
          clearProps: 'all',
        })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.hero-word', {
            yPercent: 35,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
          })
          .from(
            '.hero-portrait',
            { yPercent: 6, opacity: 0, duration: 1.3, ease: 'power2.out' },
            '-=1',
          )
          .from(
            '.hero-line > span',
            {
              yPercent: 115,
              duration: 1.1,
              stagger: 0.08,
              ease: 'expo.out',
            },
            '-=1',
          )
          .from(
            '.hero-fade',
            { y: 16, opacity: 0, duration: 0.7, stagger: 0.07 },
            '-=0.8',
          )
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      id="top"
      ref={root}
      className="bg-paper text-ink relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-paper absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(62%_54%_at_50%_42%,#f9e3ba_0%,#f7e8cd_46%,rgba(250,246,238,0)_74%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(48%_42%_at_86%_8%,rgba(246,215,166,0.5)_0%,rgba(250,246,238,0)_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_44%_at_4%_94%,rgba(246,215,166,0.42)_0%,rgba(250,246,238,0)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_42%)]" />
        <div className="absolute inset-0 bg-[url('/grain.png')] bg-[length:180px_180px] opacity-[0.05] mix-blend-multiply" />
        <div className="from-paper/0 to-paper absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-b" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col px-5 pt-24 pb-5 sm:px-8 md:pt-[19vh]">
        <div className="flex items-center justify-center gap-[clamp(0.75rem,5vw,5rem)]">
          <span className="hero-word inline-block font-serif text-[clamp(3.6rem,9.4vw,8.4rem)] leading-[0.9] tracking-[-0.02em] italic">
            Hey,
          </span>
          <span className="hero-word inline-block font-serif text-[clamp(3.6rem,9.4vw,8.4rem)] leading-[0.9] tracking-[-0.02em] italic">
            there
          </span>
        </div>

        <div className="hero-fade absolute top-[42%] left-0 z-20 flex rounded-full bg-white px-4 py-2 shadow-[0_2px_12px_rgba(20,18,15,0.1)] md:top-[50%]">
          <span className="flex items-center gap-2 text-[11px] leading-none font-medium whitespace-nowrap sm:text-[12px]">
            <Sun className="text-accent size-3.5 shrink-0" strokeWidth={2.5} />
            Available for new opportunities
          </span>
        </div>

        <p className="hero-fade absolute top-[50%] right-0 hidden w-[210px] text-[12px] leading-[1.5] md:block">
          Specialized in frontend engineering, design systems, and cross
          platform mobile products.
        </p>

        <img
          src={portraitSrc}
          alt=""
          aria-hidden
          className="hero-portrait pointer-events-none absolute bottom-0 left-1/2 block h-[88svh] w-auto max-w-none -translate-x-1/2 object-contain object-bottom md:h-[86svh]"
        />

        <div className="relative z-20 mt-auto flex items-end justify-between gap-6">
          <h1
            aria-label="Borngreat Ikwutah, software engineer"
            className="font-display text-[clamp(2.9rem,8vw,7.2rem)] leading-[0.82] font-extrabold tracking-[-0.045em] uppercase"
          >
            <span className="hero-line block overflow-hidden">
              <span className="block">I am</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="block">Borngreat</span>
            </span>
          </h1>

          <p className="font-display hidden shrink-0 text-right text-[clamp(1.1rem,2.2vw,2.25rem)] leading-[0.95] font-extrabold tracking-[-0.03em] uppercase md:block">
            Software
            <br />
            Engineer
          </p>
        </div>

        <p className="text-ink/65 relative z-20 mt-4 font-mono text-[10px] tracking-[0.2em] uppercase md:hidden">
          Software Engineer
        </p>

        <div className="hero-fade mt-8 flex items-center justify-between gap-6 md:mt-9">
          <Links />

          <p className="text-ink/65 hidden font-mono text-[10px] tracking-[0.2em] uppercase sm:block">
            Nigeria
            <span className="text-ink/25 mx-2" aria-hidden>
              /
            </span>
            WAT
          </p>
        </div>
      </div>
    </section>
  )
}
