import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import { saveUser } from "../services/userService";

class Register extends Form {
  state = {
    data: { username: "", email: "", password: "" },
    errors: {},
    response: false
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    // const users = [...this.props.users];
    const { username, email, password } = this.state.data;

    const newUser = {
      username,
      email,
      password
    };

    try {
      await saveUser(newUser);
      this.props.history.replace("/api/auth");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  render() {
    return (
      <div className="container text-center">
        <h1 className="h3 m-3">Register</h1>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "text")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
        </form>
      </div>
    );
  }
}

export default Register;
