//External Styling
import React, { Component } from 'react'
import './Apps.css'
import User from './esUser'
export default class App extends Component {
    render() {
        let style = false
        return (
            <>
              <h1 className="txtb">Hello Shambhu</h1>
              <User stl = {style ? "txtb": "txtg"}/>  
            </>
        )
    }
}
