const express = require("express");
const cors = require("cors");
const users = require("../routes/users");
const auth = require("../routes/auth");
const reset = require("../routes/reset");
const genres = require("../routes/genres");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());
  app.use("/api/register", users);
  app.use("/api/auth", auth);
  app.use("/api/reset", reset);
  app.use("/api/genres", genres);
  app.use(error);
};
