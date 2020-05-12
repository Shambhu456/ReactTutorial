import React, { Component } from "react";
import Photo from "./ProjectPhoto";
import ProjectHeader from "./ProjectHeader";
import Footer from './Footer'
import Friend from "./friend";
import settings from "./settings";
import ImageClick from './ImageClick'
import Countries from './Countries'
import Menu from './Menu'
import './Project.css'
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

    return (
      <Router>
        <div className="ctn">
        <div className="head">
          <ProjectHeader />
          </div>
          <div className="Image">           
          <br />
          <br />
          <br />
          <Switch>
            <Route path="/" exact component={(props)=><Photo {...props} ImageProps={this.ClickImage}/>} />
            <Route path="/friend" component={Friend} />
            <Route path="/image" component={(props)=><ImageClick {...props} src={this.state.SelectedTitle}/>} />
            <Route path="/setting" component={settings} />
            <Route path="/countries" component={Countries} />
          </Switch>
          </div>
          <div className="menu">
          <Menu />
          </div>
          <div className="footer">
          <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}
