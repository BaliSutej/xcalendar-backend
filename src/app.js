const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");


// enable cors 
app.use(cors());
// parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/xcalendar/calendar/:calendarid",(req,res,next) => {
    console.log(req.params.calendarid);
    res.send("ok");
});

app.post("/xcalendar/calendar/addcalendar",(req,res,next) => {
    console.log("Add calendar");
    console.log(JSON.stringify(req.body));
    res.send("ok");
});

app.get("/xcalendar/events/",(req,res,next) => {
    console.log("All events");
    res.send("ok");
});


app.post("/xcalendar/events/add",(req,res,next) => {
    console.log("Add event");
    console.log(JSON.stringify(req.body));
    res.send("ok");
});


app.post("/xcalendar/user/login",(req,res,next) => {
    console.log("Login");
    console.log(JSON.stringify(req.body));
    res.send("ok");
});

app.use((req, res, next) => {
    res.statusCode = 404;
    res.send({ "error": "Endpoint Not Found" });
});

module.exports = app;
