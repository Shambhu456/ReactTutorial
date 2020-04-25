import React, { Component } from "react";
import ImageClick from './ImageClick'
var image1 = require("../src/Asset/bioshock3.jpg");
var image1 = require("../src/Asset/bioshock3.jpg");
var image2 = require("../src/Asset/Deadpool.png");

export default class Image extends Component {
  handleImage = (e)=>{
    //<ImageClick Image={e}/>
    this.props.selectedImageProps(e);
  }
  render() {
   
    const newImage = this.props.image.map((image,i) => {
      console.log(image,i);
      const photo = image.src
      const Ids= image.Id
      return (
        <div>
          <img
            key={image.Id}
            src={photo}
            title={image.title}
            alt={image.description}
            width="300px"
            style={{ alignSelf: "center" }}
            onClick={this.handleImage.bind(this,photo)}
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
