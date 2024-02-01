const express = require("express");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json({ message: "This is Home Page" });
});

app.get("/users", (req, res) => {
  res.json({ message: "Get all the users" });
});

app.get("/users/:id", (req, res) => {
  res.json({ message: `Get user with ID ${req.params.id}` });
});

app.post("/users/", (req, res) => {
  res.json({ message: `Create new User` });
});

app.put("/users/:id", (req, res) => {
  res.json({ message: `Update User with ID ${req.params.id}` });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: `Delete User with ID ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`Example app is on port ${PORT}`);
});
