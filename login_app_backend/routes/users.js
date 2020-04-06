const { User, validateUser } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// routes
router.post("/", async (req, res) => {
  const { username, email } = req.body;

  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email });
  // register
  if (user) return res.status(400).send("Email already registered");

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    username,
    email,
    password
  });

  await newUser.save();

  res.send(newUser);
});

module.exports = router;
