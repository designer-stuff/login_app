import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import Form from "./common/form";
import { resetPassword } from "../services/userService";

class ResetPassword extends Form {
  state = {
    data: { email: "", password: "", confirmPassword: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password"),
    confirmPassword: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      await resetPassword(this.state.data);
      this.props.history.replace("/api/auth");
    } catch (ex) {
      toast.error(ex.response.data);
    }
  };

  render() {
    return (
      <div className="container text-center">
        <h1 className="h3 m-3">Forgot Password</h1>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("confirmPassword", "Confirm Password", "password")}
          {this.renderButton("Reset")}
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
