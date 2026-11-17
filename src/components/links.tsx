export const LINKS = [
  { label: 'GitHub', href: 'https://github.com/borngreat-ikwutah' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/borngreat-ikwutah/' },
  { label: 'X', href: 'https://x.com/borngreatik23' },
  { label: 'Email', href: 'mailto:iagocech2056@gmail.com' },
]

export default function Links() {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.2em] uppercase sm:text-[11px]">
      {LINKS.map((link) => {
        const external = link.href.startsWith('http')

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="text-ink/70 hover:text-ink group inline-flex items-center gap-1.5 py-1.5 transition-colors duration-300"
            >
              {link.label}
              <span
                className="text-ink/40 group-hover:text-accent transition-colors duration-300"
                aria-hidden
              >
                &#8599;
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
