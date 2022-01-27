const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");


// enable cors 
app.use(cors());
// parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use((req, res, next) => {
    res.statusCode = 404;
    res.send({ "error": "Endpoint Not Found" });
});

module.exports = app;
