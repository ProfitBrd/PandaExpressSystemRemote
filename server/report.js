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

// function getServingsUsed(startDate, endDate) {

// }

// function getInventoryRestock() {

// }

router.get('/restock', (req, res) => {
    const query = `SELECT item_name, minimum_amount, servings, restock_quantity FROM inventory`;
    console.log(`Performing query: ${query}`);
    let items = []
    pool
        .query(query)
        .then(query_res => {
            for (let i = 0; i < query_res.rowCount; i++){
                let item = query_res.rows[i];
                if(item.servings < item.minimum_amount)
                    items.push(item);
            }
            res.send(items);
        });
});


router.get('/sales', (req, res) => {
    const query = `SELECT type_of_dish, count(*), SUM(price) FROM order_history GROUP BY type_of_dish ORDER BY count(*) DESC LIMIT 10`;
    console.log(`Performing query: ${query}`);
    pool
        .query(query)
        .then(query_res => {
            res.send(query_res.rows);
        });
});

module.exports = router;