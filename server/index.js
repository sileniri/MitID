// const db = require("database.js");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5500",
        methods: "*",
    })
);

const data = [];

app.get("/api", (req, res) => {
    res.json(data);
});

app.post("/api/add", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    data.push(req.body.data);
    console.log(data);
    res.sendStatus(200);
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
