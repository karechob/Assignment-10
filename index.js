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
//each table was created on a separe node index.js run

// create 'customers' table

// pool.query("CREATE TABLE customers(customer_id BIGSERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(150) NOT NULL, phone_number VARCHAR(50) NOT NULL)", (error, result) => {
//     console.log(error, result)
//     pool.end()
// })

// create 'books' table

// pool.query("CREATE TABLE books(product_id BIGSERIAL PRIMARY KEY, book_name VARCHAR(50) NOT NULL, description VARCHAR(150) NOT NULL, price DEC(4,2) NOT NULL, quatity INT NOT NULL)", (error, result) => {
//     console.log(error, result)
//     pool.end()
// })

// create 'orders' table

// pool.query("CREATE TABLE orders(order_id BIGSERIAL PRIMARY KEY, customer_id BIGSERIAL REFERENCES customers(customer_id), order_date TIMESTAMP NOT NULL, total_amount DECIMAL(4,2) NOT NULL)", (error, result) => {
//     console.log(error, result);
//     pool.end();
//   });  

// create 'order_items' table

pool.query(
    // "INSERT INTO customers (name, email, phone_number) VALUES ('Canelo Alvares', 'alvares@gmail.com', '305-627-4334')",
    // "INSERT INTO customers (name, email, phone_number) VALUES ('Ivan Mathis', 'mathis@gmail.com', '505-987-1235')",
    "INSERT INTO customers (name, email, phone_number) VALUES ('Sahlah Nadwa', 'nadwa@gmail.com', '917-831-6682')",
    (error, result) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Data inserted successfully:", result);
      }
      pool.end();
    }
  );

//Inserting values into table
  

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