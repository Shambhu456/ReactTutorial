//Conditional Rendering

import React, { Component } from "react";
import Guest from "./CoGuest";
import User from "./CoUser";

export default class Apps extends Component {
  state = {
    isLoggedIn: false,
  };

  clickLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  clickLogout = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let consumer;
    if (isLoggedIn) {
      consumer = <User name="Shambhu" clickData={this.clickLogout} />;
    } else {
      consumer = <Guest clickData={this.clickLogin} />;
    }
    return <div>{consumer}</div>;
  }
}
