import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };
  doSubmit = () => {
    // register api
    console.log("registered");
  };
  render() {
    return (
      <>
        {this.renderInput("username", "Username", true)}
        {this.renderInput("password", "Password", false, "password")}
        {this.renderInput("name", "Name", false)}
        {this.renderButton("Register")}
      </>
    );
  }
}

export default RegisterForm;
