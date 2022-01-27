const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");

const { calendarController, eventController } = require('./controllers/index.js');

// enable cors 
app.use(cors());
// parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/xcalendar/calendar/:calendarid", calendarController.getCalendar);

app.post("/xcalendar/calendar/addcalendar", calendarController.addCalendar);

app.get("/xcalendar/events/", eventController.getAllEvents);

app.get("/xcalendar/events/getevent", eventController.getEvent);

app.post("/xcalendar/events/add", eventController.addEvent);


app.post("/xcalendar/user/login", (req, res, next) => {
    console.log("Login");
    console.log(JSON.stringify(req.body));
    res.send("ok");
});

app.use((req, res, next) => {
    res.statusCode = 404;
    res.send({ "error": "Endpoint Not Found" });
});

module.exports = app;
