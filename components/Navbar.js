"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="flex justify-between items-center p-6 bg-sea-blue dark:bg-dark-brown">
      <div className="text-2xl font-bold text-eggshell">
        Sip & Play Cafe
      </div>
      <div className="space-x-4">
        <a href="/" className="text-eggshell hover:text-light-green">
          Home
        </a>
        <a href="/menu" className="text-eggshell hover:text-light-green">
          Menu
        </a>
        <a href="/events" className="text-eggshell hover:text-light-green">
          Events
        </a>
      </div>
      <button
        className="bg-light-green dark:bg-olive-green p-2 rounded-full"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  )
}
