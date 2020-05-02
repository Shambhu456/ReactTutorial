import React, { Component } from "react";
import Photo from "./ProjectPhoto";
import ProjectHeader from "./ProjectHeader";
import Friend from "./friend";
import settings from "./settings";
import ImageClick from './ImageClick'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

export default class Project extends Component {

  state ={
    SelectedTitle:"",
    src:"Mani"
  }
  
  ClickImage=(iSource)=>{
    this.setState({SelectedTitle:iSource})
    
  }
  render() {
    const name = "Shambhu"
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
            <Route path="/" exact component={(props)=><Photo {...props} ImageProps={this.ClickImage}/>} />
            <Route path="/friend" component={Friend} />
            <Route path="/image" component={(props)=><ImageClick {...props} src={this.state.SelectedTitle}/>} />
            <Route path="/setting" component={settings} />
          </Switch>
          
          
        </div>
      </Router>
    );
  }
}
