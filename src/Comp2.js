// Statefull Component Didnt Understand needs to be looked at
import React from "react";
import Header from "./Header"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          Id: 1,
          name: "Foo",
          age: "20",
        },
        {
          Id: 2,
          name: "Bar",
          age: "30",
        },
        {
          Id: 3,
          name: "Baz",
          age: "40",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header headerText="Test Page"/>
        <table>
          <tbody>
            {this.state.data.map((person, i) => (
              <TableRow keyValue={i} datavalue={person} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


class TableRow extends React.Component {
  render() {
    let dataValue = this.props.datavalue;
    return (
      <tr>
        <td>{dataValue.Id}</td>
        <td>{this.props.datavalue.name}</td>
        <td>{this.props.datavalue.age}</td>
        <td>The row id is: {this.props.keyValue}</td>
      </tr>
    );
  }
}

export default App;
