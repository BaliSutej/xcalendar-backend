const { calendarService } = require('../services/index.js');

const getCalendar = async (req, res, next) => {
    try {
        let result = await calendarService.getCalendarById(req.params.calendarid);
        result = result[0];
        return res.send({
            "calendarId": result.calendar_id,
            "calendarName": result.calendar_name,
            "username": result.username,
            "startDate": result.start_date,
            "endDate": result.end_date
        });
    } catch (err) {
        res.status(503).send({
            "error": "Internal Error"
        })
    }

}


const addCalendar = async (req, res, next) => {
    let { calendarName, userName, startDate, endDate } = req.body;

    try {
        let id = await calendarService.generateCalendarId();
        let data = {
            calendar_id: id,
            calendar_name: calendarName,
            username: userName,
            start_date: startDate,
            end_date: endDate
        }
        let result = await calendarService.addCalendar(data);
        return res.send({"calendarId":id});
        // result.affectedRows
    } catch (error) {
        res.status(503).send({
            "error": "Internal Error"
        });
    }
}


module.exports = { getCalendar , addCalendar};