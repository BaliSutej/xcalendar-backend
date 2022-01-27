const { eventService } = require('../services/index.js');


const getEvent = async (req, res, next) => {
    try {
        let result = await eventService.getEventByIdFromDB(req.query.eventid);
        result = result[0];
        result = {
            eventId: result.event_id,
            eventName: result.event_name,
            username: result.username,
            calendarId: result.calendar_id,
            date: result.date,
            description: result.description
        }
        return res.send(result);
    } catch (error) {
        res.status(503).send({
            "error": "Internal Error"
        });
    }
}

const getAllEvents = async (req, res, next) => {
    try {
        let result = await eventService.getAllEventsFromDB();
        let newResult = result.map((ele) => {
            return {
                eventId: ele.event_id,
                date: ele.date
            }
        });
        return res.send(newResult);
    } catch (error) {
        console.log(error);
        res.status(503).send({
            "error": "Internal Error"
        });
    }
}

const addEvent = async (req, res, next) => {
    let { eventName, username, calendarId, date, description } = req.body;
    let data = {
        'event_name': eventName,
        'calendar_id': calendarId,
        'username': username,
        'date': date,
        'description': description
    };

    try {
        let result = await eventService.addEventToDB(data);
        return res.send({ "message": "Event Added" });
    } catch (error) {
        res.status(503).send({
            "error": "Internal Error"
        })
    }
}

module.exports = { addEvent, getAllEvents, getEvent };