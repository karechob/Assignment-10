const { Pool } = require("pg")
const express = require('express')
const PORT = 8080

const app = express()

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "assignment10",
    user: "mirandakarecho",
    password: "",
})


app.use(express.json());

//getting first line of dummy data

app.get('/customers-w-id2', async (req, res) => {
    try {
        const query = 'SELECT * FROM customers WHERE customer_id = 2';
        const results = await pool.query(query);

        res.status(200).json(results.rows);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

//getting different second line of dummy data

app.get('/books-w-id1', async (req, res) => {
    try {
        const query = 'SELECT * FROM books WHERE product_id=1';
        const results = await pool.query(query);

        res.status(200).json(results.rows);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

//posting a line of data

app.post('/post-book', async (req, res) => {
    try {
        const {book_name, description, price, quantity} = req.body;
        console.log('Request: ', req.body)
        const query = 'INSERT INTO books (book_name, description, price, quantity) VALUES ($1, $2, $3, $4)';
        const results = await pool.query(query, [book_name, description, price, quantity])
        console.log(results)
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

//getting all books
app.get('/get-books', async (req, res) => {
    try {
        const query = 'SELECT * FROM books';
        const results = await pool.query(query);

        res.status(200).json(results.rows);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

//checking the connection/port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
