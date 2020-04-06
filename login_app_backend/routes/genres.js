const express = require("express");
const router = express.Router();

const { Genre } = require("../models/genre");
const auth = require("../middleware/auth");

// routes
router.get("/", auth, async (req, res) => {
  const genre = await Genre.find().sort("name");
  res.send(genre);
});

module.exports = router;
