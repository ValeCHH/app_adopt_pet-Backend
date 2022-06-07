const express = require("express");
const fs = require("fs");
const cors = require("cors");
const petsRoute = require("./routes/pets");
const usersRoute = require("./routes/users");
const statusRoute = require("./routes/status");
let mysql = require('mysql2');

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());

app.use("/pets", petsRoute);
app.use('/users', usersRoute);
app.use('/status', statusRoute);

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'appet',
  password: 'root',
  });


connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

app.listen(PORT, () => {
  console.log(`our server is running on port: ${PORT}`);
})