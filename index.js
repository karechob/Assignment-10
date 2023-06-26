const {Pool} = require("pg")
const { password } = require("pg/lib/defaults")

const pool = new Pool ({
    host: "localhost",
    port: 5432,
    database: "",
    user: "",
    password: "",
})