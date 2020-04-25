//Lists Map and Arrays
import React, { Component } from "react";

export default class Apps extends Component {
  render() {
    const arr = this.props.numbers;
    //const newArr = arr.map((num) => {
    //return <li>{num}</li>;

    //return (
    //<div>
    //<ul>
    //  {arr.map(num=>{
    //   return <li>{num}</li>
    //})}

    //</ul>
    // </div>
    //);
    return (
        <ul>
            {arr.map(num=><li>{num}</li>)}
        </ul>
            )
  }
}
