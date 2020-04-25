import React from "react";
import Header from "./Header";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header headerText="Second Page" />
        <Content />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content is here!!!</p>
      </div>
    );
  }
}

export default App;
