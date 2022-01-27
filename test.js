const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xcalendar_db'
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Mysql connected");
    }
});

// function insert() {
//     let person = { name: 'Bhajari', id: 's3' };
//     let sql = 'INSERT INTO people SET ?';
//     let query = db.query(sql, person, (err, res) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Person added");
//         }
//     });
// }

// insert();

// let qp = new Promise((resolve, reject) => {
//     // let person = { name: 'Bhajari', id: 's38' };
//     let sql = 'SELECT count(*) FROM people';

//     let query = db.query(sql, (err, res) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(res);
//         }
//     });
// });





const addCalendar = async (calendar) => {
    // let { calendarName, userName, startDate, endDate } = calendar;
    let calendarName = "x";
    let id = "2";
    let userName = "admin1";
    let startDate = '2022/06/01';
    let endDate = '2023/06/01';


    let calendarData = { calendar_id: id, calendar_name: calendarName, username: userName, start_date: startDate, end_date: endDate };
    let sql = 'INSERT INTO calendar SET ?';

    let query = new Promise((resolve, reject) => {
        db.query(sql,calendarData,(err,res) => {
            if(err){
                reject(err);
            }
            resolve(res);
        });
    });

    let res = await query;
    console.log(res);

}



const getCalendarById = async (id) => {
    let calendarId = '1';

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

(async function(){
    // let res = await addCalendar("a");
    let res = await getCalendarById(1);
    console.log(res);
    // console.log(res[0]['count(*)']);
})();
