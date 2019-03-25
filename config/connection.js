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

//var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
  console.log(process.env.JAWSDB_URL)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'd13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'rsuwcyvur3w4fbx4',
    password: 'j61v2ywlu70y27b4!',
    database: 'w703gxk6knqyzlt7'
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