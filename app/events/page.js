import CalendarSection from "@/components/CalendarSection";

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen bg-sea-blue">
      <header className="bg-light-brown p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center text-white">Events Calendar</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center">Upcoming Events</h2>
          <CalendarSection />
        </section>
      </main>

      <footer className="bg-light-brown p-4 shadow-md mt-auto">
        <p className="text-center text-white">© 2024 Events Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
