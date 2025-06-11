import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I'm a passionate software developer with 4 years of experience
          building modern web applications. Over the past few years, I've
          specialized in React, TypeScript, and Node.js, creating scalable
          solutions for both startups and established companies. I enjoy
          tackling complex problems, learning new technologies, and
          collaborating with teams to deliver high-quality software that makes a
          real impact.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
