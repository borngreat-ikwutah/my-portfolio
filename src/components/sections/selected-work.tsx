'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PROJECTS from '@/data/projects'
import ProjectCard from '@/components/project-card'
import { cn } from '@/lib/utils'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SelectedWork({
  eyebrow = 'Selected work',
  heading = 'Recent',
  accent = 'projects',
  description = 'Healthcare platforms, web3 hubs, and fintech interfaces. Each one designed and built end to end, then shipped to real users.',
}: {
  eyebrow?: string
  heading?: string
  accent?: string
  description?: string
}) {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {})

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.work-heading-line > span', {
          yPercent: 110,
          duration: 1,
          stagger: 0.09,
          ease: 'expo.out',
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
        })

        gsap.utils.toArray<HTMLElement>('.work-card').forEach((card) => {
          gsap.from(card, {
            y: 44,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 90%' },
          })
        })
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      id="work"
      ref={root}
      className="bg-paper text-ink relative py-24 md:pt-32 md:pb-24"
    >
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="border-ink/15 flex flex-col gap-8 border-t pt-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            <p className="text-ink/55 font-mono text-[10px] tracking-[0.22em] uppercase">
              {eyebrow}
            </p>

            <h2 className="font-display mt-5 text-[clamp(2.6rem,6.8vw,5.8rem)] leading-[0.84] font-extrabold tracking-[-0.045em] uppercase">
              <span className="work-heading-line block overflow-hidden">
                <span className="block">{heading}</span>
              </span>
              <span className="work-heading-line block overflow-hidden">
                <span className="text-ink/70 block pr-2 font-serif text-[0.92em] tracking-[-0.02em] normal-case italic">
                  {accent}
                </span>
              </span>
            </h2>
          </div>

          <div className="md:max-w-xs md:pb-3">
            <p className="text-ink/45 font-mono text-[10px] tracking-[0.22em] uppercase">
              {String(PROJECTS.length).padStart(2, '0')} projects
            </p>
            <p className="text-ink/65 mt-3 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              className={cn('work-card', index === 0 && 'md:col-span-2')}
              key={project.name}
            >
              <ProjectCard project={project} featured={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
