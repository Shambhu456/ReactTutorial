

import React, { Component } from 'react'

export default class ImageClick extends Component {

    render() {
        console.log(this.props.src)
        const title = this.props.image
        return (
            <div>
                <h1>{this.props.src}</h1>
                <img src={this.props.src} alt="Description" width="600px"/>
            </div>
        )
    }
}
