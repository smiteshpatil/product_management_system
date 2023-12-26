// const mysql = require("mysql");
const mysql = require("mysql2");
var mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  port: 3306,
  database: "test",
  //   multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log("Error occured :", err);
  } else {
    console.log("connected to mysql.");
  }
});

module.exports = mysqlConnection;
