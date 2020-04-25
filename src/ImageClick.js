

import React, { Component } from 'react'

export default class ImageClick extends Component {

    render() {
        return (
            <div>
                <img src={this.props.Image.photo} alt="Description"/>
            </div>
        )
    }
}
