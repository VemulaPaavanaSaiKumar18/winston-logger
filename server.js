const express = require("express");
const { exceptions } = require("winston");
const server = express();
const logger = require("./logger/logger");
server.use(function (req, res, next) {
  logger.info("Request details");
  logger.debug("Request data ");
  next();
});
server.get("/details", function (req, res) {
  res.json({ Details: "coming soon to details" });
});
try {
  throw "I'm Md Abdur Rakib";
  // console.log("You'll never reach to me", 123465);
} catch (e) {
  logger.exceptions(e); // I'm Md Abdur Rakib
}

server.get("/data", function (req, res) {
  res.json({ data: "coming soon with id data" });
});

server.listen(3000, function () {
  logger.debug("Server is listening at port 3000");
});
