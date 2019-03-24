require('dotenv').config()
//var keys = require("./keys.js");
var mysql = require("mysql");

// var connection;
// if(process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {connection = mysql.createConnection(keys.AccessMysql)};
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;

let mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
  console.log(process.env.JAWSDB_URL)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection.env({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Qwer!234',
    database: 'burgers_db'
  });
}

  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  module.exports = connection;