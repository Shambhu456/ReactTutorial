//State with Constructor

import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    //It is required to call the parent class
    //This is done by keyword super and is mandatory
    //In constructor component class the constructor method is called first
    super(props);
    this.state = {
      name: "Shambhu",
      roll: this.props.roll,
    };
  }
  render() {
    return (
      <div>
        <h1>Welcome, {this.state.name}</h1>
        <h2>Your Roll No : {this.state.roll}</h2>
      </div>
    );
  }
}

export default Student;
