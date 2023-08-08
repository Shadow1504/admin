const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");

mongoose.connect('mongodb+srv://N:N@cluster0.6cqarim.mongodb.net/university')

const db = mongoose.connection;

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", require("./server/routes/route"));

app.listen(10000, console.log("published"));