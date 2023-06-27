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

app.get("/", (req, res) => {     
    const command = "SELECT * FROM customers";     
    db.query(command, (err, result) => {         
        try{             
            res.send(result.rows);         
        }         
        catch(error){             
            console.error("ERROR: ", err);         
        }     
    }) 
});