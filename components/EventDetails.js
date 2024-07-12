import React from 'react';

const EventDetails = ({ event }) => {
  if (!event) return <div style={{ color: "black"}}>Select a date to view events.</div>;

  return (
    <div style={{ color: "black"}}>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>
        {event.start.toLocaleString()} - {event.end.toLocaleString()}
      </p>
    </div>
  );
};

export default EventDetails;


