require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./db");
let port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
const AuthController = require("./controller/authController");
app.use("/api/auth", AuthController);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log("running on port " + port);
});


