const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const Joi = require("@hapi/joi");

// schema
const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// model
const Login = mongoose.model("Login", loginSchema);

// Input validator
function validateLogin(user) {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  });

  return schema.validate(user);
}

// genreate auth token
function generateAuthToken(user) {
  return jwt.sign({ _id: user._id }, config.get("privateKey"));
}

module.exports.Login = Login;
module.exports.validateLogin = validateLogin;
module.exports.authToken = generateAuthToken;
