import React, { Component } from "react";
import RefApp from "./ClassRefs";

export default class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput()
  };
  render() {
    return (
      <div>
        <RefApp ref={this.componentRef} />
  
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}


