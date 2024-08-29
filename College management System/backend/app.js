const express = require("express");
const mongoose = require("mongoose");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Using midddlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importing routes
const user = require("./routes/user");

//using routes
app.use("/api/v1", user);

module.exports = app;
