const mongoose = require("mongoose");
const config = require("config");
const { logger } = require("../services/logger");

module.exports = function() {
  mongoose
    .connect(config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => logger.info("Connected to DB..."));
};
