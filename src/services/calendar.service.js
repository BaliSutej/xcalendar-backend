const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xcalendar_db'
});

// var userId = 1;
// var columns = ['username', 'email'];
// var query = connection.query('SELECT ?? FROM ?? WHERE id = ?', [columns, 'users', userId], function (error, results, fields) {
//   if (error) throw error;
//   // ...
// });


const generateCalendarId = async () => {
    let id = "xc98";
    let query = new Promise((resolve, reject) => {
        let sql = 'SELECT count(*) FROM calendar';

        db.query(sql, (err, res) => {
            if (err) {
                reject("Already Present");
            }
            resolve(res);
        });
    });

    let count = await query;
    count = count[0]['count(*)'];

    return id + (parseInt(count) + 1);

}

const getCalendarById = async (id) => {
    let calendarId = id;
 
    let query = new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM calendar WHERE calendar_id = ?';

        db.query(sql, [calendarId], (err, res) => {
            if (err) {
                reject("Already Present");
            }
            resolve(res);
        });
    });

    return await query;
}



const addCalendar = async (calendar) => {
    // let { calendarName, userName, startDate, endDate } = calendar;
    let calendarName = "x";
    let id = generateCalendarId();
    let userName = "abc";
    let startDate = '2022/06/01';
    let endDate = '2023/06/01';


    let calendarData = calendar;
    let sql = 'INSERT INTO calendar SET ?';

    let query = new Promise((resolve, reject) => {
        db.query(sql, calendarData, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });

    return await query;

}


module.exports = {addCalendar,getCalendarById,generateCalendarId};