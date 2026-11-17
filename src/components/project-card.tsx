import { cn } from '@/lib/utils'

type Project = {
  name: string
  description: string
  previewImage: string
  repoUrl?: string
  liveLink: string
}

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-[20px] bg-[#f1e3ca] md:rounded-[26px]',
          featured ? 'aspect-[16/9]' : 'aspect-[16/10]',
        )}
      >
        <img
          src={project.previewImage}
          alt={`${project.name} interface preview`}
          loading={featured ? 'eager' : 'lazy'}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="bg-ink/0 group-hover:bg-ink/10 absolute inset-0 transition-colors duration-500" />
        <span className="bg-ink text-bone pointer-events-none absolute top-4 right-4 translate-y-1 rounded-full px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Visit
          <span className="ml-1" aria-hidden>
            &#8599;
          </span>
        </span>
      </div>

      <div
        className={cn(
          'mt-5 flex items-start justify-between gap-6',
          featured && 'max-w-2xl',
        )}
      >
        <div>
          <h3
            className={cn(
              'font-display font-semibold tracking-[-0.025em]',
              featured ? 'text-xl sm:text-3xl' : 'text-lg sm:text-xl',
            )}
          >
            {project.name}
          </h3>
          <p
            className={cn(
              'text-ink/65 mt-2 leading-relaxed',
              featured ? 'max-w-xl text-sm sm:text-base' : 'max-w-md text-sm',
            )}
          >
            {project.description}
          </p>
        </div>

        <span
          aria-hidden
          className="text-ink/35 group-hover:text-accent mt-1 shrink-0 text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          &#8599;
        </span>
      </div>
    </a>
  )
}
