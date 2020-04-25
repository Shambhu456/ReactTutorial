import React, { Component } from "react";

export default class Mount2 extends Component {
  render() {
    console.log("Mont2 Rendered");
    return <h1>Hello {this.props.name}</h1>;
  }
}
