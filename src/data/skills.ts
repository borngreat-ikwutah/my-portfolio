import {
  type IconType,
  SiAstro,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss
} from '@icons-pack/react-simple-icons';

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'react', icon: SiReact },
        { skill: 'sass', icon: SiSass },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'astro', icon: SiAstro },
        {
          skill: 'bootstrap',
          icon: SiBootstrap,
        },
        {
          skill: "Nextjs",
          icon: SiNextdotjs,
        }
      ],
    },
  ]

export default SKILLS
