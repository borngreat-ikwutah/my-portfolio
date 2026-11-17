'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sun } from 'lucide-react'
import Links from '@/components/links'
import SiteFooter from '@/components/site-footer'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Contact() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {})

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({
            defaults: { ease: 'expo.out' },
            scrollTrigger: { trigger: root.current, start: 'top 72%' },
          })
          .from('.contact-line > span', {
            yPercent: 112,
            duration: 1.1,
            stagger: 0.08,
          })
          .from(
            '.contact-fade',
            { y: 22, opacity: 0, duration: 0.8, stagger: 0.08 },
            '-=0.7',
          )
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <>
      <section
        id="contact"
        ref={root}
        className="bg-paper text-ink relative overflow-hidden"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_108%,#f6d5a5_0%,#f9e7c9_38%,rgba(250,246,238,0)_74%)]" />
          <div className="absolute inset-0 bg-[url('/grain.png')] bg-[length:180px_180px] opacity-[0.05] mix-blend-multiply" />
        </div>

        <div className="relative mx-auto w-full max-w-[1320px] px-5 pt-16 pb-16 sm:px-8 md:pt-24">
          <div className="border-ink/15 flex flex-col gap-12 border-t pt-10 md:flex-row md:items-end md:justify-between md:gap-20">
            <div>
              <p className="text-ink/55 font-mono text-[10px] tracking-[0.22em] uppercase">
                Contact
              </p>

              <h2 className="mt-6">
                <span className="contact-line block overflow-hidden">
                  <span className="block font-serif text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.02] tracking-[-0.02em] italic">
                    Have a project
                  </span>
                </span>
                <span className="contact-line block overflow-hidden">
                  <span className="block font-serif text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.02] tracking-[-0.02em] italic">
                    in mind?
                  </span>
                </span>

                <span className="contact-line font-display mt-4 block overflow-hidden">
                  <span className="font-display block text-[clamp(2.9rem,8.6vw,7.8rem)] leading-[0.86] font-extrabold tracking-[-0.045em] uppercase">
                    Let&apos;s talk.
                  </span>
                </span>
              </h2>
            </div>

            <div className="contact-fade md:pb-4">
              <a
                href="mailto:iagocech2056@gmail.com"
                className="group border-ink/30 hover:border-ink inline-flex items-end gap-3 border-b pb-2 text-base font-medium transition-colors duration-300 sm:text-xl"
              >
                iagocech2056@gmail.com
                <span
                  className="group-hover:text-accent mb-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden
                >
                  &#8599;
                </span>
              </a>

              <p className="text-ink/55 mt-4 font-mono text-[10px] tracking-[0.2em] uppercase">
                Tell me what you&apos;re building
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 md:mt-20">
            <div className="contact-fade">
              <p className="text-ink/45 font-mono text-[10px] tracking-[0.22em] uppercase">
                Elsewhere
              </p>
              <div className="mt-4">
                <Links />
              </div>
            </div>

            <div className="contact-fade">
              <p className="text-ink/45 font-mono text-[10px] tracking-[0.22em] uppercase">
                Based in
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                Nigeria
                <br />
                <span className="text-ink/60">WAT, GMT+1</span>
              </p>
            </div>

            <div className="contact-fade">
              <p className="text-ink/45 font-mono text-[10px] tracking-[0.22em] uppercase">
                Currently
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm">
                <Sun className="text-accent size-3.5" strokeWidth={2.5} />
                Available for new work
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
