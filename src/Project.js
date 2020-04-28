import React, { Component } from "react";
import Photo from "./ProjectPhoto";
import ProjectHeader from "./ProjectHeader";
import Friend from "./friend";
import settings from "./settings";
import ImageClick from './ImageClick'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

export default class Project extends Component {
  render() {
    const Image = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    };
    return (
      <Router>
        <div>
          <ProjectHeader />
          <br />
          <br />
          <br />
          <Switch>
            <Route path="/" exact component={Photo} />
            <Route path="/friend" component={Friend} />
            <Route path="/image" component={ImageClick} />
            <Route path="/setting" component={settings} />
          </Switch>
          
          
        </div>
      </Router>
    );
  }
}
