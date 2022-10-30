// const { createLogger, transports, format } = require("winston");

const winston = require("winston");
require("winston-daily-rotate-file");

var transport = new winston.transports.DailyRotateFile({
  filename: "application-%DATE%.log",
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxSize: "2k",
  maxFiles: "2",
  exceptionHandlers: true,
});
transport.on(
  "rotate",
  function (oldFilename = "details.log", newFilename = "dataDetails.log") {}
);

var logger = winston.createLogger({
  transports: [transport],
});

// logger.info("Hello World!");
// const logger = createLogger({
//   transports: [
//     new transports.File({
//       filename: "details.log",
//       level: "info",
//       format: format.combine(format.timestamp(), format.json()),
//     }),
//   ],
//   exceptionHandlers: [
//     new transports.File({
//       filename: "logdataexception.log",
//     }),
//   ],
// });

module.exports = logger;
