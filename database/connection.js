
//make a connection.js
var mysql = require("mysql");

var connection;

//This will set up the database to connect locally or heroku JAWSDB when deployed
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password", // add your local password here.
    database: "notetaker_db" // add your db name here
  });
}

// This code will turn BOOLEAN 0's and 1's returned from db into true or false
connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

connection.connect(function(err){
  if(err) throw err;

  console.log("Connected as id: " + connection.threadId)
})

//This will export the connection to additional parts of app
module.exports = connection;