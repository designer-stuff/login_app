import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "./common/form";
import Joi from "joi-browser";
import { login } from "../services/authService";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      window.location = "/api/genres";
    } catch (ex) {
      if (ex.response) toast.error(ex.response.data, { autoClose: 1200 });
    }
  };

  render() {
    return (
      <div className="container text-center">
        <h1 className="h3 m-3">Sign In</h1>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          <div className="mt-3">
            <Link to="/api/register">Need an account? Register Here</Link>
          </div>
          <div className="mt-3">
            <Link to="/api/reset-password">Forgot Password</Link>
          </div>
          {this.renderButton("Sign in")}
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
        </form>
      </div>
    );
  }
}

export default Login;
