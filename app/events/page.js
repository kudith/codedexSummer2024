import CalendarSection from "@/components/CalendarSection"
export default function Events() {
    return (
      <div>

      <div style={{height:'50em'}} className="bg-sea-blue min-h-screen text-eggshell">
        This is events page.
      </div>

      <div style={{height:'500px'}} className="bg-sea-blue min-h-screen text-eggshell">
        Calendar should roughly be here.
        <CalendarSection/>
      </div>

      <div style={{height:'5em'}} className="footer_bg min-h-screen text-eggshell">
        Dummy footer to be replaced by component.
      </div>

      </div>

    )
  }