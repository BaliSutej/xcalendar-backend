const { addCalendar, getCalendarById, generateCalendarId } = require('./calendar.service.js');
const { addEventToDB, getAllEventsFromDB , getEventByIdFromDB } = require('./event.service.js');



module.exports.calendarService = { addCalendar, getCalendarById, generateCalendarId };
module.exports.eventService = { addEventToDB, getAllEventsFromDB , getEventByIdFromDB};