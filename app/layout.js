import "@fontsource/inknut-antiqua"
import "@fontsource/hind"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./globals.css"


export const metadata = {
  title: 'Sip & Play Cafe',
  description: 'Forget and savor that sip.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
          <Navbar/>
          {children}
          <Footer />
      </body>
    </html>
  )
}
