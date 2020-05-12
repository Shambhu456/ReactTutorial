import React, { Component } from "react";
import axios from "axios";
export default class PersonList extends Component {
  state = {
    persons: [],
  };
  sty={
      display:"flex",
      listStyle:"none",
      marginLeft: "10px",
      space: "10px"
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  }
  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
            <div style={this.sty}>
            <li>{person.name} {'      '} </li>
            
            <li>{person.id} </li>
            </div>
          ))}
      </ul>
    );
  }
}
