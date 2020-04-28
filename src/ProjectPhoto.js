import React, { Component } from 'react'
import "./projectC.css";
import Friend from "./friend";
import Setting from "./settings";
import ImageClick from './ImageClick';
import {Link} from "react-router-dom";
import home from "./home";
var image1 = require("../src/Asset/bioshock3.jpg");
var image2 = require("../src/Asset/Deadpool.png");
var image3 = require("../src/Asset/Doge.jpg");
var image4 = require("../src/Asset/Rise.jpg");


export default class ProjectPhoto extends Component {
    handleImage = (e)=>{
        console.log(e)
        console.log('onclick')
        return <ImageClick Image={e}/>
             }
    render() {
        const  I= [
            {
              Id: 1,
              src: image1,
              title: "Title",
              description: "Description",
            },
            { Id: 2, src: image2, title: "Title", description: "Description" },
            { Id: 3, src: image3, title: "Title", description: "Description" },
            { Id: 4, src: image4, title: "Title", description: "Description" },
          ]
          const newImage = I.map((image,i) => {
            console.log(image,i);
            const photo = image.src
            const Ids= image.Id
            return (
              <div>
                  <Link to='./image'>
                <img
                  key={image.Id}
                  src={photo}
                  title={image.title}
                  alt={image.description}
                  width="300px"
                  onClick={this.handleImage.bind(this,photo)}
                  
                />
                </Link>
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
          
        return (
            <div>
               {newImage} 
            </div>
        )
    }
}
