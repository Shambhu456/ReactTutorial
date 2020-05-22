import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: "",
      comments: "",
      topic: 'react',
    }
  }

  handleUserName = (event) => {
    this.setState({
      UserName: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    });
  };

  handleSubmit = (event)=>{
      alert(`${this.state.UserName} ${this.state.comments} ${this.state.topic}`)
      event.preventDefault()// Keeps the value and prevents from refreshing 
  }
  render() {
    return (
      
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName:</label>
            <input
              type="text"
              value={this.state.UserName}
              onChange={this.handleUserName}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommentsChange}
            />
          </div>

          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value='react'>React</option>
              <option value='angular'>Angular</option>
              <option value='vue'>Vue</option>
            </select>

            
          </div>
          <button type='submit'>Submit</button>
        </form>
      
    );
  }
}
