const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const helmet = require("helmet");

// Configuration
const port = process.env.PORT || 5000;
const app = express();

// Require our routes
const signRouter = require("./routes/sign");

// Middleware using by express
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());

// routes using

app.use("/sign", signRouter);

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello from express." });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
