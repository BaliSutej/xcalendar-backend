const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'test2'
});

db.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Mysql connected");
    }
});

function insert(){
    let person = {name : 'Bhajari', id :'s3'};
    let sql = 'INSERT INTO people SET ?';
    let query = db.query(sql,person, (err,res) => {
        if(err){
            console.log(err);
        }else{
            console.log("Person added");
        }
    });
}

insert();
