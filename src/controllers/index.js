const {getCalendar,addCalendar} = require('./calendar.controller.js');
const {getEvent,getAllEvents,addEvent}  = require('./event.controller.js');




module.exports.calendarController = {getCalendar,addCalendar};
module.exports.eventController = {getAllEvents,getEvent,addEvent};