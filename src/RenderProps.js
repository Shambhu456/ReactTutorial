import React, { Component } from 'react'

export default class RenderProps extends Component {
    render() {
        return (
            <div>
                {this.props.name}    
            </div>
        )
    }
}
