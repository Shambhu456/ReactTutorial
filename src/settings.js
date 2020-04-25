import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class settings extends Component {
    render() {
        return (
            <div>
                <Link to="/settings">
                <h1>My Settings</h1>
                </Link>
            </div>
        )
    }
}
