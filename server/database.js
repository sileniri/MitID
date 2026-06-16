const Database = require("better-sqlite3");

const db = new Database("database.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

// Create table
sql = `CREATE TABLE IF NOT EXISTS data(id INTEGER PRIMARY KEY, user_id, pin_code)`;
db.run(sql);

// Insert Data
const INSERT = (table, data) => {
    sql = `INSERT INTO ${table || "data(user_id, pin_code)"} VALUES (?, ?)`;
    db.run(sql, data, (err) => {
        if (err) return console.error(err.message);
    });
};

module.exports = db;
