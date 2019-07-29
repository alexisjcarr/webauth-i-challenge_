const express = require("express");

const authRouter = require("../routers/authRouter");
const userRouter = require("../routers/userRouter");

const server = express();

require("./setup-middleware")(server);

server.get("/", (req, res) => {
  res.send("<h1>The server is up. Be happy, I can crash at any minute.</h1>");
});

server.use("/api/auth/", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
