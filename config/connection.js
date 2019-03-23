require('dotenv').config()
var keys = require("./keys.js");
var mysql = require("mysql");

var connection = mysql.createConnection(keys.AccessMysql);
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
