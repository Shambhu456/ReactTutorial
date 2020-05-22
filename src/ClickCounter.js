import React, { Component } from 'react'
import UpdateCounter from './WithCounter'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {

    render() {
        const {count} = this.props
        return (
            
        <button onClick={this.props.incrementCount}>{this.props.name} Clicked {this.props.count} Times</button>
            
        )
    }
}

export default UpdatedComponent(ClickCounter,1)