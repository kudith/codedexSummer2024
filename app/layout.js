import "@fontsource/inknut-antiqua"
import "@fontsource/hind"
import Footer from '../components/Section/Footer'
import Navbar from '../components/Header/Navbar'
import "./globals.css"
import Header from "@/components/Header/Header";


export const metadata = {
  title: 'Sip & Play Cafe',
  description: 'Forget and savor that sip.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
          <Header/>
          {children}
          <Footer />
      </body>
    </html>
  )
}
