import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shambhu",
      roll: this.props.roll
    };
  }
  handleClick = () => {
    this.setState({name: "Manish", roll: 420})
    //this.setState(function(state,props){
      //  console.log(state)
        //console.log(props)
        //this.state.name="Manish"
    //})
  };// set state not in render function as it will create an infinite loop
  render() {
    return (
      <div>
        <h1>Welcome to my page</h1>
        <h2>Hello, {this.state.name} </h2>
        <h3>Your Roll Number is {this.state.roll}</h3>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Student;
