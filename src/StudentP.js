import React, { Component } from "react";
//import React from "react"
//const StudentP = props=>{
//  return <h1>Hello {props.name}</h1>;
//}

//export default StudentP;

class StudentP extends Component {
  // render method has to return something be it react element or component
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

export default StudentP;
