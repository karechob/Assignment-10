const {Pool} = require("pg")
const express = require('express')
const app = express()
const PORT = 8080
const bodyParser = require("body-parser")

const pool = new Pool ({
    host: "localhost",
    port: 5432,
    database: "assignment10",
    user: "mirandakarecho",
    password: "",
})


// Creating Tables
// each table was created on a separe node index.js run

// create 'customers' table

pool.query("CREATE TABLE customers(customer_id BIGSERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(150) NOT NULL, phone_number VARCHAR(50) NOT NULL)", (error, result) => {
    console.log(error, result)
})

// create 'books' table

pool.query("CREATE TABLE books(product_id BIGSERIAL PRIMARY KEY, book_name VARCHAR(50) NOT NULL, description VARCHAR(150) NOT NULL, price DEC(4,2) NOT NULL, quatity INT NOT NULL)", (error, result) => {
    console.log(error, result)
})

// create 'orders' table

pool.query("CREATE TABLE orders(order_id BIGSERIAL PRIMARY KEY, customer_id BIGSERIAL REFERENCES customers(customer_id), order_date TIMESTAMP NOT NULL, total_amount DECIMAL(4,2) NOT NULL)", (error, result) => {
    console.log(error, result);
  });  

// create 'order_items' table

// Inserting values into table
  
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
    }
  );

  pool.query(
    // "INSERT INTO books (book_name, description, price, quatity) VALUES ('The Idiot', 'Novel by the 19th-century Russian author Fyodor Dostoevsky', 15.39, 20)",
    "INSERT INTO books (book_name, description, price, quatity) VALUES ('Bubblegum', 'A rare masterwork of provocative social (and self-) awareness and intimate emotional power', 18.00, 30)",
    (error, result) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Data inserted successfully:", result);
      }
    }
  );

  pool.query(
    // "INSERT INTO books (book_name, description, price, quatity) VALUES ('The Idiot', 'Novel by the 19th-century Russian author Fyodor Dostoevsky', 15.39, 20)",
    "INSERT INTO books (book_name, description, price, quatity) VALUES ('Bubblegum', 'A rare masterwork of provocative social (and self-) awareness and intimate emotional power', 18.00, 30)",
    (error, result) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Data inserted successfully:", result);
      }
    }
  );

  pool.query(
    // "INSERT INTO order_items (order_id, book_id, quantity, price) VALUES (1, 1, 1, 15.39)",
    // "INSERT INTO order_items (order_id, book_id, quantity, price) VALUES (1, 2, 1, 15.39)",
    "INSERT INTO order_items (order_id, book_id, quantity, price) VALUES (4, 4, 1, 18.00)",
    (error, result) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Data inserted successfully:", result);
      }
    }
  );


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
    }
  );

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
    }
  );


// create inner joins
// joined customers and orders tables

pool.query(
    "SELECT * FROM customers INNER JOIN orders ON customers.customer_id = orders.customer_id",
    (error, result) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Data inserted successfully:", result);
      }
    }
  );

// joined books and orders tables
pool.query(
    "SELECT * FROM books INNER JOIN orders ON books.product_id = orders.customer_id",
    (error, result) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Data inserted successfully:", result);
      }
    }
  );

//joined orders and order_id tables
pool.query(
    "SELECT * FROM orders INNER JOIN order_items ON orders.order_id = order_items.order_id",
    (error, result) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Data retrieved successfully:", result.rows);
      }
      pool.end();
    }
  );
  

// joined orders tables and order_items tables

pool.query("SELECT * FROM customers", (error, result) => {
    try {
        console.log("Querry results ===> ", result.rows)
    } catch (error) {
        console.error("Error executing query:", error)
    }
})

pool.query("SELECT * FROM customers", (error, result) => {
    try {
        console.log("Querry results ===> ", result.rows)
    } catch (error) {
        console.error("Error executing query:", error)
    }
})


pool.query("SELECT * FROM customers", (error, result) => {
    try {
        console.log("Querry results ===> ", result.rows)
    } catch (error) {
        console.error("Error executing query:", error)
    }
})

pool.end()