// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3003;

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'USER',
  password: 'PWD',
  database: 'medicine_database',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// API Routes
app.get('/api/medicines', (req, res) => {
  const { query, sortBy } = req.query;

  let sql = 'SELECT * FROM medicines WHERE Medicine_Name LIKE ? ORDER BY ?';
  const params = [`%${query}%`, sortBy || 'Medicine_Name'];

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ results });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
