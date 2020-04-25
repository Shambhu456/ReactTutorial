import React, { Component } from 'react'
import About from './about'
import Shop from './shop'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'

export default class home extends Component {
    render() {
        return (
            <div>
                <h1>This is Home</h1>
            </div>
        )
    }
}
