const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
var mysql = require('mysql2')
const port = 3000

const connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : 3306,
    user     : 'its_users',
    password : 'its@123456789',
    database : 'its_register'
});

connection.connect(function (err) {
  // Check if there is a connection error
  if (err) {
      console.log("connection error", err.stack);
      return;
  }

  console.log(`connected to database`);
});

connection.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});

var jsonParser = bodyParser.json()

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// Enable CORS for all routes
app.use(cors(corsOptions));


app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.post('/Register', jsonParser, (req, res) => {
    console.log(req.body);
    res.statusCode = 200;
    res.send('Register')
})


app.listen(port, () => {
    console.log(`IT Register app listening on port ${port}`)
  })