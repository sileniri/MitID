const db = require("./database.js");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(
    cors({
        origin: "https://mitid-login.onrender.com",
        methods: "*",
    })
);
// app.use(
//     cors({
//         origin: "http://localhost:5500",
//         methods: "*",
//     })
// );

let data = [];

app.get("/api", (req, res) => {
    console.log("GET request recieved");
    const sql = `SELECT * FROM data`;
    const user_data = db.prepare(sql).all();
    res.status(200).json(user_data);
});

app.post("/api/add", (req, res) => {
    console.log("POST request recieved");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "*");
    // res.setHeader("Access-Control-Allow-Headers", "*");
    // data.push(req.body.data);
    // console.log(data);
    console.log(req.body);
    const sql = db.prepare(`INSERT INTO data(user_id, pin_code) VALUES (?, ?)`);
    sql.run(req.body.user_id, req.body.pin_code);
    res.status(200).json("OK");
});

app.get("/api/database/reset", (req, res) => {
    let sql = db.prepare(`DELETE FROM data`);
    sql.run();

    sql = `SELECT * FROM data`;
    const items = db.prepare(sql).all();
    res.status(200).json({type: items.length > 0});
    console.log("Reset database");
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
