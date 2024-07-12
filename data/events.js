// data/events.js
import { parseISO } from 'date-fns';

const events = [
  {
    id: 1,
    title: 'Live Music Night',
    start: parseISO('2024-07-14T19:00:00'), // Use ISO format
    end: parseISO('2024-07-14T22:00:00'),   // Use ISO format
    description: 'Enjoy live music with local bands.',
  },
  {
    id: 2,
    title: 'Coffee Tasting',
    start: parseISO('2024-07-15T14:00:00'), // Use ISO format
    end: parseISO('2024-07-15T16:00:00'),   // Use ISO format
    description: 'Taste our new coffee blends.',
  },
  {
    id: 3,
    title: 'Coffee Tasting',
    start: parseISO('2024-07-13T14:00:00'), // Use ISO format
    end: parseISO('2024-07-13T16:00:00'),   // Use ISO format
    description: 'Taste our new coffee blends.',
  },
  // Add more events as needed
];

export default events;
