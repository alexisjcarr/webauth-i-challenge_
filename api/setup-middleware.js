require("dotenv");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

module.exports = server => {
  const sessionConfig = {
    name: "session",
    secret:
      process.env.SESSION_SECRET || "Harry Potter and the Chamber of Secrets",
    cookie: {
      maxAge: 10 * 60 * 1000,
      secure: false,
      httpOnly: true
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
      knex: require("../data/dbConfig"),
      tablename: "sessions",
      createtable: true,
      sidfieldname: "sid",
      clearInterval: 60 * 60 * 1000
    })
  };

  server.use(helmet());
  server.use(bodyParser.json());
  server.use(cors());
  server.use(session(sessionConfig));
};
