const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

//DB connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'removed add env var later',
    password: 'removed add env var later',
    database: 'configuryeator'
});

//API

app.get('/', (req, res) => {
    return res.json('Server listening on port: 8081');
});

app.listen(8081, () => {
    console.log('Response from backend server: OK');
});