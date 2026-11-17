# Design System: Borngreat Ikwutah Portfolio

Derived from the "Madison" editorial designer portfolio reference. Warm ivory canvas,
high contrast type pairing, oversized all caps statements, and soft warm media panels.

Density 3 / Variance 8 / Motion 5. Gallery airy, intentionally asymmetric, calm motion.

## 1. Visual Theme & Atmosphere

A warm editorial portfolio that reads like a printed studio monograph. The page sits on
an ivory paper canvas and lets one warm amber gradient glow behind the portrait, so the
screen feels sunlit rather than clinical. Structure comes from rigid hairline rules,
ghosted section numbers, and generous empty space, never from boxes or drop shadows.

Type does the heavy lifting. A high contrast serif italic carries the soft, human voice
(the wordmark, the "Hey, there" greeting). A tight, heavy grotesque carries the loud
voice (the name, section titles, "RECENT PROJECTS"). Nothing in between competes. Body
copy stays small and quiet so the loud lines land hard.

Color is a single warm family: ivory, off black ink, muted taupe gray, and one amber
accent. No second accent, no cool gray, no neon. Media panels are the only saturated
areas on the page, so project screenshots become the color events.

The feeling is confident and unhurried, like a designer who does not need to shout, but
does need one very large typographic moment per section.

## 2. Color Palette & Roles

| Name         | Hex                      | Role                                                                   |
| ------------ | ------------------------ | ---------------------------------------------------------------------- |
| Paper Ivory  | `#FAF6EE`                | Primary canvas, every section background                               |
| Warm Veil    | `#F3E7D3`                | Second surface for alternating bands, ghost numbers, inset wells       |
| Sun Wash     | `#F9E3BA` → `#F7E8CD`    | Single warm radial gradient, hero glow and media card backdrops only   |
| Ink          | `#14120F`                | Primary text, rules, pill buttons. Off black, never `#000000`          |
| Graphite     | `#3A352E`                | Display type on media, strong secondary headings                       |
| Taupe        | `#6F6A61`                | Body copy, captions, metadata, year ranges                             |
| Hairline     | `rgba(20, 18, 15, 0.14)` | 1px rules, column separators, chip borders                             |
| Amber Accent | `#FF7A1A`                | Single accent: availability dot, link arrow, nav underline, focus ring |
| Porcelain    | `#FFFFFF`                | Availability pill, floating chips over media                           |

Rules: one accent only, amber. Saturation stays under 80 percent. The warm gradient is
reserved for one hero glow and media backdrops, never for text, headers, or buttons.
No purple, no blue, no neon, no glow shadows anywhere.

## 3. Typography Rules

Two families, used with firm separation.

- **Voice serif** — `Instrument Serif`, italic only for the wordmark, greetings, and
  pull quotes. Large sizes, weight 400, tracking `-0.02em`, leading `0.9`. Never used
  for body copy, labels, or UI. Loaded through `next/font` as `--font-instrument-serif`.
- **Loud grotesque** — `Geist` at 800 for statements and 500 for UI. Section titles and
  the hero name are ALL CAPS, tracking `-0.045em`, leading `0.82`. This is the identity
  font. Never pair it with a third family.
- **Quiet body** — Geist at 14 to 16px, weight 400, leading `1.5`, Ink, max width 60ch.
- **Metadata** — `Geist Mono` at 10 to 12px, weight 400, uppercase, tracking `0.2em`,
  Ink at 65 percent. Tech strips, location, captions, social links.

Scale (fluid, mobile first):
`display 1` clamp(56px, 11vw, 132px) · `display 2` clamp(40px, 6vw, 72px) ·
`section` clamp(32px, 4.5vw, 56px) · `lead` clamp(16px, 1.6vw, 20px) ·
`body` 16px · `meta` 12px.

Banned: Inter, Roboto, Arial as display, generic serifs (Times, Georgia, Garamond,
Palatino), more than two families, all caps body copy, gradient text.

## 4. Component Stylings

**Navigation.** One thin bar on the paper canvas, no border, no fill, no blur. Wordmark
left in voice serif italic with a period ("Borngreat."). Center links in quiet 13px
grotesque, weight 500, Ink, with a 2px Amber underline that grows from 0 to 100 percent
width on hover. Right: a single solid Ink pill, Porcelain text, radius 999px,
`padding 12px 24px`, label "Contact". On click it compresses 1px, no glow.

**Availability pill.** Porcelain fill, no visible border but a soft drop shadow, radius
999px, `8px 16px`, 11 to 12px medium text with a 14px amber sun icon. Sentence case.
Anchored at 50 percent height on the left edge. Used once, in the hero only.

**Hero.** One full height composition, anchored to the bottom edge. Layers, back to
front: the warm radial wash, the serif greeting, the cut out portrait, the availability
pill and side note, then the name, role stack, and meta row. The greeting reads
"Hey, there" with the portrait's head rising between the two words, so the head covers
the inner edges of both. The name block is "I am" over "Borngreat" in all caps, pinned
bottom left at 82 percent leading, deliberately overlapping the portrait's torso. The
role stack (Frontend / Mobile / Engineer) is right aligned on the same baseline. The
portrait is a transparent PNG filling 86 percent of the viewport height on desktop and
88 percent on mobile, so the figure is cropped by the frame like a magazine cover. On
mobile the same stack holds: greeting, pill at 42 percent, portrait, then the name over
the torso. No scroll cue, no bouncing arrow, no "scroll to explore".

**Section header.** Uppercase grotesque title, optionally preceded by a ghosted number
(`01`, `02`) at 15 percent Ink opacity. A single Hairline rule spans the section, offset
above the content, never boxed.

**Service columns.** Four columns separated by 1px Hairline verticals, each with a ghost
number, a 16px semibold title, and a 13px Taupe description. Collapses to a single column
with horizontal rules below 768px. Never equal height cards, never icons in circles.

**Stat block.** Number at `display 2` with a trailing `+`, caption below in 12px uppercase
Taupe. Separated by hairline rules, aligned to a left rail. Numbers must look real
(`89+`, `18+`), never `99.99%` or `50%`.

**Experience row.** Three columns: year range (12px uppercase Taupe), role title (18px
grotesque, Ink), skill chips (Porcelain fill, 1px Hairline border, radius 999px,
`6px 12px`, 12px label, 14px icon, separated by a thin `+`). Rows divided by Hairline
rules, no card, no shadow, generous 28px vertical padding.

**Project card.** Media first. Image in a 20 to 26px radius panel, `aspect-ratio: 16/10`
(`16/9` when featured), `object-fit: cover`, sitting on a `#F1E3CA` wash. The first card
is featured and spans both grid columns; the rest sit in a 2x2 grid. Title in 20 to 30px
grotesque below the image, one line of Taupe copy, and a small arrow pinned right that
turns Amber on hover. The whole card is the link. Hover: image scales to 1.04 over 900ms
inside a clipped container, a solid Ink "Visit" pill fades in top right. No lift, no
shadow, no border.

**Workstation strip.** Five equal media tiles in a horizontal row, 12px gap, 16px radius,
`aspect-ratio: 4/5`, scroll snapping on mobile. No captions, no labels, no overlay text.

**Links and footer.** Social and contact links are bare uppercase mono labels with a
small arrow that turns Amber on hover, in a wrapping row of four. The footer is a solid
Ink slab: serif wordmark, one line of quiet copy, the same link row, then a hairline and a
bottom row with the copyright and "Back to top". The footer ships once, at the end of the
page.

**Contact.** The last section before the footer. A serif italic question ("Have a project
in mind?") stacked over a giant all caps answer ("Let's talk."), with the email address
right aligned on the same baseline as the answer, underlined, plus one mono line inviting
the message. Below, three mono labelled columns: Elsewhere, Based in, Currently. A warm
radial bloom rises from the bottom edge into the copy.

## 5. Layout Principles

- Canvas max width 1320px, centered, with `clamp(20px, 5vw, 72px)` side padding.
- Vertical rhythm: section padding `clamp(96px, 12vw, 168px)`, heading to content 48px,
  card gap 24 to 32px. Emptiness is part of the design, do not compress it.
- Hero is one bottom anchored composition, not a grid: greeting, portrait, name, role
  stack, and meta row stack in that order and share the bottom edge. Deliberate overlap
  is allowed there and nowhere else.
- Section padding runs 96 to 160px on desktop and 96px on mobile. The work section and
  the contact section do not double up their padding where they meet.
- Media and text never share a centered axis. Alternate left and right alignment between
  sections to keep the eye moving.
- Ghost numbers, hairlines, and whitespace do the structural work. Cards exist only for
  media panels and floating chips.
- Below 768px everything collapses to one column, the name block drops below the
  portrait, and section padding halves. No horizontal scroll, ever.
- Use CSS Grid for layout. No percentage `calc()` hacks, no absolute positioned stacks
  beyond the hero portrait, no `h-screen` (use `min-h-[100dvh]`).

## 6. Motion & Interaction

- Feel: calm and weighty, 400 to 600ms, `cubic-bezier(0.22, 1, 0.36, 1)`. No bounce, no
  spring overshoot, no parallax on scroll.
- Entrance: opacity 0 to 1 with a 16 to 44px rise, staggered 60 to 90ms per item, on
  first view only. Headlines use a masked line reveal (text rises out of an
  `overflow-hidden` parent) instead of a plain fade.
- Hover: image scale 1.03, link underline 0 to 100 percent, chip border moves from Hairline
  to Ink. Active: 1px translate down, no glow.
- Perpetual motion: only the 6px availability dot breathes (opacity 1 to 0.55, 2.6s ease
  in out). Nothing else loops.
- Animate `transform` and `opacity` only. Respect `prefers-reduced-motion` by removing
  transforms and keeping opacity fades at 0.01ms.

## 7. Anti-Patterns (Banned)

- No emojis, no icon fonts used as decoration.
- No pure black (`#000000`); Ink is `#14120F`.
- No Inter, Roboto, Arial, or generic serif fonts; no third type family.
- No purple, blue, or neon accents; no outer glows; no colored drop shadows.
- No gradient text on headlines; the warm gradient stays behind media only.
- No three equal cards in a row; no icon in a rounded square above a heading.
- No glassmorphism, no backdrop blur, no soft shadow cards, no heavy border boxes.
- No centered hero, no scroll cue, no bouncing chevrons, no auto playing carousel.
- No filler copy ("Elevate", "Seamless", "Unleash", "Next-Gen", "Crafting digital
  experiences") and no placeholder names ("John Doe", "Acme").
- No fake precision numbers; use real counts.
- No text overlapping imagery outside the one sanctioned hero composition.
- No image without a defined aspect ratio; no stretched or letterboxed screenshots.

## 8. Adoption Notes For This Repo

The home page and the work page are built in this language. `hero.tsx`,
`selected-work.tsx`, `contact.tsx`, `project-card.tsx`, and `site-footer.tsx` implement
sections 1 to 4 with `Instrument Serif`, `Geist`, `Geist Mono`, and GSAP reveals; tokens
live in `src/app/globals.css`. The portrait is `public/portrait.png`; when that file is
absent a blurred silhouette placeholder renders so the composition still reads.

About still ships the old neobrutalist theme with hard offset shadows inside a narrow
column. Rebuilding it means swapping the oklch palette for the table in section 2,
replacing `shadow-shadow` / `rounded-base` with hairline rules and 20 to 26px media
radii, and widening the shell to 1320px.

Content stays data driven: `src/data/projects.ts`, `src/data/skills.ts`, and
`src/data/experience.ts` feed the work and about sections, so a redesign should keep
those shapes intact.

_Drafted from the supplied reference image. Edit freely: it is meant to be the single
source of truth for this site's visual language._
