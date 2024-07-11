import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative h-screen">
      <div className="relative h-full w-full">
        <Image
          src="/assets/header-bg.jpg"
          alt="Cafe background"
          fill
          quality={100}
          className="absolute inset-0 z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-eggshell">
          <div>
            <h1 className="text-5xl font-bold">Welcome to Sip & Play Cafe</h1>
          </div>
        </div>
      </div>
    </header>
  )
}
