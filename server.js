const express = require("express");
const server = express();

const moment = require("moment");

const userRouter = require("./users/userRouter");
const cors = require("cors");

server.use(cors());

server.use("/api/users", logger, userRouter);

server.get("/", logger, (req, res) => {
  res.send("Server is running!");
});

//custom middleware

function logger(req, res, next) {
  console.log(`-> ${req.method} ${req.originalUrl} ${moment().format()}`);
  next();
}

module.exports = server;
