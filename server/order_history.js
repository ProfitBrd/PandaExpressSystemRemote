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

router.get('/', (req, res) => {
    let id = req.query.id;
    const query = `SELECT * FROM dish_list where dish_id = ${id}`;
    console.log(`Performing query: ${query}`);
    pool
        .query(query)
        .then(query_res => {
            const data = query_res.rows[0];
            res.send(data);
            //res.render('user', data);
        });
});

router.get('/add', (req, res) => {
    let transaction_id = req.query.transaction_id;
    let employee_id = req.query.employee_id;
    let date = req.query.date;
    let type_of_dish = req.query.type_of_dish;
    let entree_dish = req.query.entree_dish;
    let entree_amt_servings = req.query.entree_amt_servings;
    let side_ingredients = req.query.side_ingredients;
    let side_amt_servings = req.query.side_amt_servings;
    let appetizer_ingredients = req.query.appetizer_ingredients;
    let appetizer_amt_servings = req.query.appetizer_amt_servings;
    let price = req.query.price;
    const query = `INSERT INTO order_history(transaction_id,employee_id,date,type_of_dish,entree_dish,entree_amt_servings,side_ingredients,side_amt_servings,appetizer_ingredients,appetizer_amt_servings,price) VALUES (${transaction_id},${employee_id},'${date}','${type_of_dish}','${entree_dish}','${entree_amt_servings}','${side_ingredients}','${side_amt_servings}','${appetizer_ingredients}','${appetizer_amt_servings}',${price})`;
    console.log(`Performing query: ${query}`);
    pool
        .query(query)
        .then(query_res => {
            res.status(200).end();
            //res.render('user');
        });
});

router.get('/nextID', (req, res) => {
    const query = `SELECT max(transaction_id) FROM order_history`;
    console.log(`Performing query: ${query}`);
    pool
        .query(query)
        .then(query_res => {
            const data = query_res.rows[0];
            res.send(data);
            //res.render('user', data);
        });
});
module.exports = router;