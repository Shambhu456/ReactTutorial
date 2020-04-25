import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived From Props");
    console.log(props, state);
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.mroll < 107) {
      console.log("shouldComponentUpdate");
      console.log(nextProps, nextState);
      return true;
    }
    console.log(nextProps, nextState);
    console.log("shouldnotComponentUpdate");
    return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get Snapshot before update");
    console.log(prevProps, prevState);
    return 45;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Marks-Component Did Update");
    console.log(prevState, prevState, snapshot);
  }

  render() {
    console.log("Marks Rendered");
    return <h1>Hello {this.props.roll}</h1>;
  }
}
