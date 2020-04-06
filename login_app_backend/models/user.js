const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

// schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// model
const User = mongoose.model("User", userSchema);

// Input Validator
function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  });

  return schema.validate(user);
}

module.exports.User = User;
module.exports.validateUser = validateUser;
