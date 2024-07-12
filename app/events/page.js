import CalendarSection from "@/components/CalendarSection"
export default function Events() {
    return (
      <div className="min-h-screen bg-eggshell dark:bg-dark-brown">

        <div style={{height:'50em'}} className="bg-sea-blue min-h-screen text-eggshell">
          This is events page.
        </div>

        <div style={{height:'500px'}} className="bg-sea-blue min-h-screen text-eggshell">
            <CalendarSection/>
        </div>

      </div>

    )
  }