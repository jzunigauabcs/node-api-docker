const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

const users = ["Ana", "Luis", "Pedro"];

app.get("/", (req, res) => {
  res.json({ users });
});

app.get("/reverse", (req, res) => {
  res.json({ users: [...users].reverse() });
});

app.listen(PORT, () => {
  console.log(`Running port ${PORT}`);
});
