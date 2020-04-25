//External styling
import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <h2 className = {this.props.stl}>Hello User</h2>
        )
    }
}
