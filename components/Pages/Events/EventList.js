import React from 'react';
import { format } from 'date-fns';

const EventList = ({ events, title }) => {
  return (
    <div style={{ maxHeight: '300px', overflowY: 'scroll', border: '1px solid #ddd', padding: '10px', margin: '10px 0', maxWidth: '30em' }}>
      <h3>{title}</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h4>{event.title}</h4>
            <p>{format(event.start, 'PPPpp')} - {format(event.end, 'PPPpp')}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;

