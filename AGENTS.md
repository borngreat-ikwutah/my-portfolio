# Borngreat Ikwutah Portfolio

Personal portfolio site: home intro, about (skills, experience), and work (project cards).
Static content, no backend, database, auth, or API routes.

## Stack

- **Language / Runtime**: TypeScript (strict), Node 20+, React 19.1
- **Framework**: Next.js 15.2 App Router (`src/app`), server components by default
- **Key dependencies**: Tailwind CSS v4, next-themes, next-view-transitions, Radix UI,
  `@icons-pack/react-simple-icons`, lucide-react
- **Package manager**: pnpm 9.15 (locked; do not switch to npm or yarn)

## Build approach

<TBD, set by /scope>

## Commands

```bash
# Install
pnpm install

# Dev server
pnpm dev

# Build
pnpm build

# Lint and typecheck (the build ignores both, so run these yourself)
pnpm lint
pnpm exec tsc --noEmit
```

There is no test runner configured yet.

## Specs

Stored in `docs/specs/`. Format: `docs/specs/NNNN-title.md`.

## Rules

- `next.config.mjs` sets `ignoreBuildErrors` and `ignoreDuringBuilds`, so `pnpm build`
  never fails on type or lint errors. Verify with `pnpm exec tsc --noEmit` and `pnpm lint`.
- Content is data driven. Edit `src/data/projects.ts`, `skills.ts`, and `experience.ts`;
  pages and sections only render those arrays. Add fields to the type alongside the data.
- Tailwind v4 is CSS first: there is no `tailwind.config.ts`. Theme tokens live in
  `src/app/globals.css` under `:root`, `.dark`, and `@theme inline`.
- Two visual languages coexist. The home page (`hero`, `selected-work`, `contact`) and
  `/work` use the editorial tokens: `bg-paper`, `text-ink`, `bg-ink`, `text-bone`,
  `text-accent`, `font-display`, `font-serif`, `font-mono`. `/about` still uses the old
  neobrutalist tokens (`bg-main`, `shadow-shadow`, `rounded-base`, `font-heading`).
  Match the language of the page you are editing; do not mix them in one section.
- Editorial pages use two interaction patterns only: cards zoom their image
  (`group-hover:scale-[1.04]` inside an `overflow-hidden` frame) and reveal a chip, and
  links shift their arrow (`group-hover:translate-x-1 group-hover:-translate-y-1`) while
  the arrow turns `text-accent`. The neobrutalist press (`hover:translate-x-boxShadowX`
  plus `hover:shadow-none`) belongs to `/about` only.
- Server components by default. Add `'use client'` only for hooks or Radix primitives
  (see `nav.tsx`, `theme-switcher.tsx`, `ui/tooltip.tsx`).
- Images live in `public/` and are referenced with a leading slash (`/zentry.png`).
  The hero portrait is `public/portrait.png` (transparent PNG, figure cut at the chest);
  `src/app/page.tsx` swaps in `public/portrait-placeholder.png` when it is missing.
- Format with Prettier: no semicolons, single quotes, trailing commas, 2 space indent,
  Tailwind class sorting. Run `pnpm exec prettier --write <file>` after edits.
- Animation uses GSAP through `useGSAP` inside a `'use client'` component, with a
  `gsap.matchMedia` branch that respects `prefers-reduced-motion`. Register plugins once
  at module scope. Animate only `transform` and `opacity`.
- Page composition: `src/app/page.tsx` renders `Hero` then `SelectedWork` then
  `Contact` (which owns the footer via `src/components/site-footer.tsx`). `/work`
  reuses `SelectedWork` with different heading props and ends in `SiteFooter`. Shared
  project cards live in `src/components/project-card.tsx`.
- The nav links Contact to `/#contact`, not `mailto:`. `globals.css` enables smooth
  scrolling only when `prefers-reduced-motion` is not set, with `scroll-padding-top` so
  anchors clear the fixed header.
- `DESIGN.md` is the visual source of truth; `globals.css` holds the tokens that back it.

## Context files

<!-- Nested AGENTS.md files are listed here as they are created -->

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
