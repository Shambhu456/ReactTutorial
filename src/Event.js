import React, { Component } from "react";
// onClick can be used in button,text,div etc
class Event extends Component {
  handleClick = () => {
    console.log("Button Click", this);
  };
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello Event</h1>
        <button onClick={this.handleClick}> Click Me </button>
      </div>
    );
  }
}
export default Event;
