//Conditional Rendering
import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.name}</h1>
        <button onClick={this.props.clickData}>Logout</button>
      </>
    );
  }
}
