const {Pool} = require("pg")
const express = require('express')
const app = express()

const pool = new Pool ({
    host: "localhost",
    port: 5432,
    database: "assignment10",
    user: "mirandakarecho",
    password: "",
})

//Creating Tables

//create 'customers' table
pool.query("CREATE TABLE customers(customer_id BIGSERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(150) NOT NULL, phone_number VARCHAR(50) NOT NULL)", (error, result) => {
    console.log(error, result)
    pool.end()
})


//create 'books' table
//create 'orders' table
//create 'order_items' table










// pool.query("SELECT * FROM customers", (error, result) => {
//     try {
//         console.log("Querry results ===> ", result.rows)
//     } catch (error) {
//         console.error("Error executing query:", error)
//     }
// })


// pool.query("SELECT * FROM customers", (error, result) => {
//     try {
//         console.log("Querry results ===> ", result.rows)
//     } catch (error) {
//         console.error("Error executing query:", error)
//     }
// })







// app.get('/', (req, res) => {
//     res.send('hello world')
//   })