const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const cors = require("cors");
const port = 7000; 

app.use(cors());

const db = new sqlite3.Database("dua_main.sqlite");


app.get("/api/data", (req, res) => {
  const sql = "SELECT * FROM category"; 
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json({ data: rows });
  });
});

app.get("/api/data/dua", (req, res) => {
  const sql = "SELECT * FROM dua"; 
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json({ data: rows });
  });
});

app.get("/api/data/sub", (req, res) => {
  const sql = "SELECT * FROM sub_category"; 
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json({ data: rows });
  });
});


app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
