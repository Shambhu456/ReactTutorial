import React, { Component } from "react";
import Mo from "./Mount2";
class Mount extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor Called");

    console.log(props);
    this.state = {
      roll: "101",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Derived State From Props");
    console.log(props, state);
    return null;
  }
  componentDidMount(){
    //Get data from server and set data in state
    console.log("After Mounted ")
  }
  render() {
    console.log("Rendered Method Called");
    return (
      <div>
        <Mo name="Shambhu" />
      </div>
    );
  }
}

export default Mount;
