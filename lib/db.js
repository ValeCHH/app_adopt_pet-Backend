const mysql = require("mysql2");
const path = require("path");
require("dotenv").config();


// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'appet',
  password: 'root',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


function query(sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}


exports.pool = pool;
exports.query = query;
