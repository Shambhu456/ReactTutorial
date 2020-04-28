

import React, { Component } from 'react'

export default class ImageClick extends Component {

    render() {
        console.log(this.props.Image)
        return (
            <div>
                <img src={this.props.Image} alt="Description"/>
            </div>
        )
    }
}
