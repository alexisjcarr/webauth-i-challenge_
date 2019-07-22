const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("<h1>The server is up. Be happy, I can crash any minute.</h1>");
});

server.use("/api/auth/", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
