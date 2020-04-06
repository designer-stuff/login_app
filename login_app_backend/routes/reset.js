const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");
const { validateInput } = require("../models/reset");

// routes
router.put("/", async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  const { error } = validateInput(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email });

  if (!user) return res.status(400).send("Invalid user");

  if (password === confirmPassword) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;
    await user.save();

    res.send(user);
  
  } else return res.status(400).send("Passwords didn't match");
});

module.exports = router;
