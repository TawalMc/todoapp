const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Configuration
const port = process.env.PORT || 5000;
const app = express();

// Middleware using by express
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// API calls
app.get("/api/hello", (req, res) => {
    res.send({express: "Hello from express"});
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})