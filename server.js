const express = require("express");
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
// try {
//   throw "I'm sai";
// } catch (e) {
//   logger.exceptions(e);
// }

server.get("/data", function (req, res) {
  res.json({ data: "coming soon with id data" });
});

server.listen(3000, function () {
  logger.debug("Server is listening at port 3000");
});
