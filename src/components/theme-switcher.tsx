'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="hover:text-accent inline-flex transition-colors duration-300"
    >
      <Sun className="hidden size-4 stroke-current sm:size-5 dark:inline" />
      <Moon className="inline size-4 stroke-current sm:size-5 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
