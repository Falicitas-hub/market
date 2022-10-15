const mysql = require('mysql');

const client = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qazplm7979852",
    database: "ice_wine"
})

const sqlClient = (sql, arr, calllback) => {
    client.query(sql, arr, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        calllback(result);
    })
}

module.exports = sqlClient