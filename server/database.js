const Database = require("better-sqlite3");

const db = new Database("database.db");

// Create table
db.exec(`CREATE TABLE IF NOT EXISTS data(user_id, pin_code)`);

// Insert Data

module.exports = db;
