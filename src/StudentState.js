import React, { Component } from "react";
class Student extends Component {
  state = {
    name: "Shambhu",
    roll: "101",
    lastName: this.props.lname,
  };
  render() {
    return (
      <div>
        <h1>Welcome, {this.state.name}</h1>;
        <h2>Your Last Name is {this.state.lastName}</h2>
        <h3>Your Roll Number is : {this.state.roll}</h3>
      </div>
    );
  }
}

export default Student;
