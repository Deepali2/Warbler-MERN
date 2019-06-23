//this component is used to login or sign up users
import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    }
  }
  render() {
    const { email, username, password, profileImageUrl } = this.state;
    return(
      <div />
    );
  }
}

