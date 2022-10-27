const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "details.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      filename: "logdataexception.log",
    }),
  ],
});

module.exports = logger;
