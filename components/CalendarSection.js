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
        height: '430px',
        gap: '0px',
        background: "#F4EAD7",
        width: "25em",
        radius: "8px",
    };

    return (
        <div class="relative">
            {/* <h1>Cafe Events Calendar</h1> */}
            
            <div class="flex flex-wrap mb-2 ml-auto mr-auto">
                <div class="w-1/3 mb-4 bg-gray-500 h-12"></div>
                <div class="w-1/3 mb-4 bg-gray-500 h-12"></div>
                <div class="w-1/3 mb-4 bg-gray-400 h-12">
                
                    <button onClick={() => setView('upcoming')} class="button">Upcoming Events</button>
                    <button onClick={() => setView('week')} class="button">Events This Week</button>
                
                </div>
                <div class="w-1/3 mb-4 bg-gray-500 h-15">

                    <div className="p-6 bg-blue-900 text-white h-screen" style={calStyle}>
                        <EventCalendar />
                    </div>

                </div>
                <div class="w-1/3 mb-4 h-12"></div>
                <div class="w-1/3 mb-4 h-15">

                    <div class="md:container md:mx-auto">
                        <div style={{ marginTop: '20px' }}>
                            {view === 'upcoming' && <EventList events={upcomingEvents} title="Upcoming Events" />}
                            {view === 'week' && <EventList events={eventsThisWeek} title="Events This Week" />}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CalendarSection;
