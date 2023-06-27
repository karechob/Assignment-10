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

//Create Tables
//

pool.query("SELECT * FROM customers", (error, result) => {
    try {
        console.log("Querry results ===> ", result.rows)
    } catch (error) {
        console.error("Error executing query:", error)
    }
})







// app.get('/', (req, res) => {
//     res.send('hello world')
//   })