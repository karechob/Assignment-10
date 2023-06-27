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
// pool.query("CREATE TABLE customers(customer_id BIGSERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(150) NOT NULL, phone_number VARCHAR(50) NOT NULL)", (error, result) => {
//     console.log(error, result)
//     //pool.end()
// })
// //create 'books' table
// pool.query("CREATE TABLE books(product_id BIGSERIAL PRIMARY KEY, book_name VARCHAR(50) NOT NULL, description VARCHAR(150) NOT NULL, price DEC(4,2) NOT NULL, quatity INT NOT NULL)", (error, result) => {
//     console.log(error, result)
//     //pool.end()
// })
//create 'orders' table
// pool.query("CREATE TABLE orders(order_id BIGSERIAL PRIMARY KEY, customer_id BIGSERIAL REFERENCES customers(customer_id), order_date TIMESTAMP NOT NULL, total_amount DECIMAL(4,2) NOT NULL)", (error, result) => {
//     console.log(error, result);
//     pool.end();
//   });  
//create 'order_items' table
pool.query("CREATE TABLE order_items(ordered_books_id BIGSERIAL PRIMARY KEY, order_id BIGINT NOT NULL, book_id BIGINT NOT NULL, quantity INT NOT NULL, price DECIMAL(4,2) NOT NULL, FOREIGN KEY (order_id) REFERENCES orders(order_id), FOREIGN KEY (book_id) REFERENCES books(product_id))", (error, result) => {
    console.log(error, result);
    pool.end();
  });
  










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