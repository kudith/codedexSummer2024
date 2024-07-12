// import moment from 'moment';

// export const getUpcomingEvents = (events) => {
//   return events.filter(event => moment(event.start).isAfter(moment()));
// };

// export const getEventsThisWeek = (events) => {
//   const startOfWeek = moment().startOf('week');
//   const endOfWeek = moment().endOf('week');
//   return events.filter(event => moment(event.start).isBetween(startOfWeek, endOfWeek));
// };

// utils/eventFilters.js
import { isAfter, isWithinInterval, startOfWeek, endOfWeek } from 'date-fns';

export const getUpcomingEvents = (events) => {
  return events.filter(event => isAfter(event.start, new Date()));
};

export const getEventsThisWeek = (events) => {
  const start = startOfWeek(new Date());
  const end = endOfWeek(new Date());
  return events.filter(event => isWithinInterval(event.start, { start, end }));
};
