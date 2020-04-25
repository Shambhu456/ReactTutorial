import React, { Component } from "react";
class App extends Component {
  // render method has to return something be it react element or component
  componentDidMount(){
    console.log("App Mounted")
  }
  componentWillUnmount(){
    console.log("App Unmounted")
  }
  render() {
    let name = "World";
    return (
      <React.Fragment>
        <h1>Welcome to my page</h1>
        
      </React.Fragment>
    );
  }
}

export default App;
