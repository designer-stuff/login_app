const _ = require("lodash");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");
const { validateLogin, authToken } = require("../models/auth");

// route
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) return res.status(400).send("Invalid email or password");

  const token = authToken(user);

  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
