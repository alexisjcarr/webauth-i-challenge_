const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>The server is up. Be happy, I can crash any minute.</h1>");
});

module.exports = server;
