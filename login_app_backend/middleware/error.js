const { logger } = require("../services/logger");

module.exports = function(err, req, res, next) {
  // logging error
  logger.log("error", err.message);

  // error handling
  res.status(500).send("Something failed");
};
