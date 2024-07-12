'use client';
// import React, { useState } from 'react';
// import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
// import moment from 'moment';
// import events from '../data/events';
// import EventDetails from './EventDetails';
// import EventDetailModal from './EventDetailModal';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const EventCalendar = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleSelectEvent = (event) => {
//     setSelectedEvent(event);
//     // setIsModalOpen(true);
//   };

// //   const handleModalClose = () => {
// //     setIsModalOpen(false);
// //   };

//   return (
//     <div class="relative">
//       {/* <EventDetailModal isOpen={isModalOpen} onClose={handleModalClose} event={selectedEvent} />   */}
//       <Calendar class="absolute left-0"
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 350, margin: '5px', width: 350 }}
//         onSelectEvent={handleSelectEvent}
//         views={['month']} // Only allow the month view
//       />
//       <EventDetails class="absolute right-0" event={selectedEvent} />

//     </div>
//   );
// };

// export default EventCalendar;

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from '../data/events';
import EventDetails from './EventDetails';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomToolbar from './CustomToolbar';
// import EventDetailModal from './EventDetailModal';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    // setIsModalOpen(true);
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);


  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };



  return (
    <div>
      {/* <EventDetailModal isOpen={isModalOpen} onClose={handleModalClose} event={selectedEvent} />   */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 350, margin: '5px', width: 350, color:'black' }}
        onSelectEvent={handleSelectEvent}
        views={['month']} // Only allow the month view
        components={{
          toolbar: CustomToolbar,
        }}
      />

      <EventDetails event={selectedEvent} style={{ height: 350, margin: '5px', width: 35 }} />
    </div>
  );
};

export default EventCalendar;

