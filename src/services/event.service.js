const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xcalendar_db'
});


const getEventByIdFromDB = async (id) => {
    let sql = 'SELECT * FROM events WHERE event_id = ?'

    let query = new Promise((resolve, reject) => {
        db.query(sql, [id], (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });

    return await query;
}



const addEventToDB = async (event) => {
    let eventData = event;
    let sql = 'INSERT INTO events SET ?';

    let query = new Promise((resolve, reject) => {
        db.query(sql, eventData, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });

    return await query;
}

const getAllEventsFromDB = async () => {
    let sql = 'SELECT event_id, date FROM events';

    let query = new Promise((resolve, reject) => {
        db.query(sql, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });

    return await query;
}


module.exports = { addEventToDB, getAllEventsFromDB , getEventByIdFromDB };