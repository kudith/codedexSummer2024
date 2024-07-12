import { ThemeProvider } from 'next-themes'
import './globals.css'
import Header from '../components/Header'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Sip & Play Cafe',
  description: 'Forget and savor that sip.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider attribute="class">
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
