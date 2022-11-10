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
            data.max += 1;
            res.send(data);
        });
});

async function getItem(id) {
    const query = `SELECT * FROM inventory where item_name = '${id}'`; // <--- NATHAN I CHANGED THIS from item_id to item_name <----
    console.log(`Performing query: ${query}`);
    let query_res = await pool.query(query);
    return query_res.rows[0];
}


async function getDish(id) {
    const query = `SELECT * FROM dish_list where dish_id = ${id}`; 
    console.log(`Performing query: ${query}`);
    let query_res = await pool.query(query);
    return query_res.rows[0];
}

// http://localhost:3000/dish_list/price?dish_id=1&item=1&item=2&item=14&item=15&item=20
// http://localhost:3000/dish_list/price?dish_id=1&item=honey_seasame_chicken&item=black_pepper_angus_steak&item=fried_rice
router.get('/price', async (req, res) => {
    let itemIDList = req.query.item;
    let itemList = [];
    for(let i = 0; i < itemIDList.length; i++) {
        itemList.push(await getItem(itemIDList[i]));
    }

    console.log(itemIDList);
    console.log(itemList);

    let dishId = req.query.dish_id;
    let dish = await getDish(dishId); 

    let finalPrice = Number(dish.price);

    let entrees = [];
    let sides = [];
    let appetizers = [];

    for(let i = 0; i < itemList.length; i++) {
        let item = itemList[i];
        if(item.food_type === 'entree') entrees.push(item);
        else if(item.food_type === 'side') sides.push(item);
        appetizers.push(item);
    }

    for(let i = 0; i < entrees.length - dish.number_entrees; i++)
        finalPrice += Number(entrees[i].item_price);
    for(let i = 0; i < sides.length - dish.number_sides; i++)
        finalPrice += Number(entrees[i].item_price);
    for(let i = 0; i < entrees.length; i++)
        finalPrice += Number(entrees[i].item_price);

    res.send({"price": finalPrice});
})

module.exports = router;