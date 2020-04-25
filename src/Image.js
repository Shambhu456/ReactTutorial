import React, { Component } from "react";
var image1 = require("../src/Asset/bioshock3.jpg");
var image1 = require("../src/Asset/bioshock3.jpg");
var image2 = require("../src/Asset/Deadpool.png");

export default class Image extends Component {
  render() {
    const newImage = this.props.image.map((image) => {
      console.log(image);
      return (
        <div>
          <img
            key={image.Id}
            src={image.src}
            title={image.title}
            alt={image.description}
            width="300px"
            style={{ alignSelf: "center" }}
          />
          <br />
          <br />
          <label>Title:</label>
          <input type="text" />
          <br />
          <br />
          <label>Description:</label>
          <textarea>Please provide description</textarea>
          <br />
          <br />
        </div>
      );
    });

    //<img src={process.env.PUBLIC_URL + 'bioshock 3.jpg'} width="600px"/>
    return <div>{newImage}</div>;
  }
}
