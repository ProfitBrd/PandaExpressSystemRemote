var express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv').config();

var router = express.Router();

// Create pool
const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: {rejectUnauthorized: false}
});

router.get('/sales', (req, res) => {
    let id = req.query.id;
    const query = `SELECT type_of_dish, count(*), SUM(price) FROM order_history GROUP BY type_of_dish ORDER BY count(*) DESC LIMIT 10`;
    console.log(`Performing query: ${query}`);
    pool
        .query(query)
        .then(query_res => {
            const data = query_res.rows[0];
            res.send(data);
        });
});

// function getServingsUsed(startDate, endDate) {

// }

// function getInventoryRestock() {

// }

router.get('/excess', (req, res) => {
    let id = req.query.id;
    const query = `SELECT type_of_dish, count(*), SUM(price) FROM order_history GROUP BY type_of_dish ORDER BY count(*) DESC LIMIT 10`;
    console.log(`Performing query: ${query}`);
    pool
        .query(query)
        .then(query_res => {
            const data = query_res.rows[0];
            res.send(data);
        });
});

module.exports = router;