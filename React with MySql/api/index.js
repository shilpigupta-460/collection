import express from "express"
import mysql from "mysql"
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Manu@2009",
    database: "test"
})
app.get("/", (req, res) => {
    res.send("<h1>hello shilpi</h1>")
})
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.post("/book", (req, res) => {
    console.log(req.body);

    const q = "INSERT INTO books (`title`,`des`,`cover`) VALUES(?)"
    const values = [`${req.body.title}`, `${req.body.des}`, `${req.body.cover}`]
    console.log(req.body);

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err.message)
        return res.send("  submit ")
    })

})

app.listen(4000, () => {
    console.log('server is start');

})
