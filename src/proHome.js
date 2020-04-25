import React, { Component } from "react";
import "./projectC.css";
import Friend from "./friend";
import Setting from "./settings";
import ImageComponent from './Image';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
var image1 = require("../src/Asset/bioshock3.jpg");
var image2 = require("../src/Asset/Deadpool.png");
var image3 = require("../src/Asset/Doge.jpg");
var image4 = require("../src/Asset/Rise.jpg");

export default class proHome extends Component {
 
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

    return (
      <div>
        <div className="st">
          <Router>
            <div className="st1">
              <Link to="/">
                <h2>Home</h2>
              </Link>
            </div>
            <div className="st4">
              <Link to="/friend">
                <h2>Friend</h2>
              </Link>
              
              <switch>
                <Route path="/" exact />
                <Route path="/friend" exact component={Friend} />
                <Route path="/settings" exact component={Setting} />
              </switch>
              
            </div>

            <div className="st3">
              <h1>Webpage</h1>
            </div>
            <div className="st2">
              <Link to="/settings">
                <h2>Setting</h2>
              </Link>
              
            </div>
          </Router>
          
        </div>
        
        <ImageComponent image={I}/>
        <footer className="btm">
            <h1>hdk</h1>
        </footer>
      </div>
    );
  }
}
