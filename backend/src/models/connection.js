const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "CasaDoPet",
});

module.exports = connection;
