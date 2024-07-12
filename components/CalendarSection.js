'use client';
import React, { useState } from 'react';
import EventCalendar from './EventCalendar';
import EventList from './EventList';
import events from '../data/events';
import { getUpcomingEvents, getEventsThisWeek } from '../utils/eventFilters';

const CalendarSection = () => {
  const [view, setView] = useState('upcoming');
  const upcomingEvents = getUpcomingEvents(events);
  const eventsThisWeek = getEventsThisWeek(events);

  const calStyle = {
        height: '406px',
        gap: '0px',
        background: "#F4EAD7",
        width: "25em",
        radius: "8px",
    };

  return (
    <div class="relative">
      <h1>Cafe Events Calendar</h1>
      <div class="md:container md:mx-auto">
        <button onClick={() => setView('upcoming')} class="button">Upcoming Events</button>
        <button onClick={() => setView('week')} class="button">Events This Week</button>
        <div style={{ marginTop: '20px' }}>
            {view === 'upcoming' && <EventList events={upcomingEvents} title="Upcoming Events" />}
            {view === 'week' && <EventList events={eventsThisWeek} title="Events This Week" />}
        </div>
      </div>
      <div className="p-6 bg-blue-900 text-white h-screen" style={ calStyle }>
        <EventCalendar/>
      </div>
    </div>
  );
};

export default CalendarSection;
