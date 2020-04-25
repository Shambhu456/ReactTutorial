//argument cant be directly passed to handler as react think handler as function component
import React, { Component } from "react";
// onClick can be used in button,text,div etc
class Event extends Component {
  state = {
    id: 1,
    name: "Shambhu",
  };
  handleClick = (id, e) => {
    console.log("Button Click", this);
    console.log(id);
    console.log(e);
  };
  //handleClickArg=(e)=>{
  //  this.handleClick(this.state.id,e)
  //}
  //<button onClick={e=>{this.handleClick(this.state.id,e)}}> Click Me </button>}
  render() {
    return (
      <div>
        <h1>Hello Event</h1>

        <button onClick={this.handleClick.bind(this, this.state.id)}>
          {" "}
          Click Me{" "}
        </button>
      </div>
    );
  }
}
export default Event;
