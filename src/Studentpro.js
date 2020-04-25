import React from "react";
import Prop from "prop-types";

//const Student = (props) => {
//return (
//  <div>
//  <h1>Hello , {props.name}</h1>
//<h2>Your Roll: {props.roll}</h2>
//</div>
//);
//};

class Student extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>Your Roll: {this.props.roll}</h2>
      </div>
    );
  }
}

Student.propTypes = {
  name: Prop.string,
};

Student.defaultProps={
    name: "Shambhu"
}
export default Student;
