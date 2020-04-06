require("express-async-errors");
const winston = require("winston");
const { logger, transport } = require("../services/logger");

// transports
module.exports = function() {
  // handling uncaught exceptions
  logger.exceptions.handle(transport(), transport("uncaughtExceptions"));

  // unhandled rejections
  process.on("unhandledRejection", ex => {
    throw ex;
  });

  // log errors to logfile.log
  logger.add(transport()).add(transport("logfile"));
};
