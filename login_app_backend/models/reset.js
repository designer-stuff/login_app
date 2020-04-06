const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

// schema
const resetSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  }
});

// model
const Reset = mongoose.model("Reset", resetSchema);

// Input Validator
function validateInput(user) {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
  });

  return schema.validate(user);
}

module.exports.Reset = Reset;
module.exports.validateInput = validateInput;
