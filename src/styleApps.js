import React, { Component } from "react";

export default class Apps extends Component {
  state = {
    change: false,
  };

  clickHandle = () => {
    this.setState({ change: true });
  };
  render() {
    const btnStyle = {
      color: "blue",
      backgroundColor: "orange",
    };
    const txtc = {
      color: "blue",
    };
    const txts = {
      fontSize: "50px",
    };

    if (this.state.change) {
      btnStyle.backgroundColor = "green";
    }
    return (
      <div>
        <button onClick={this.clickHandle} style={btnStyle}>
          Button
        </button>
        <h1 style={{ ...txtc, ...txts }}>Hello Shambhu</h1>
      </div>
    );
  }
}
