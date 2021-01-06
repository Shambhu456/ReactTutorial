import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {
  
    render() {
        const {count,incrementCount} = this.props
        return (
        <h2 onMouseOver = {incrementCount}> Hovered {count} Times</h2>
        )
    }
}

export default UpdatedComponent(HoverCounter,2)