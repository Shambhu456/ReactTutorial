import React, { Component } from 'react'
import User from './User'
import Guest from './Guest'
export default class ConRender extends Component {
    render() {
        const isRegistered = this.props.consumer 
        if (isRegistered){
            return <User />
        }
        return <Guest />
    }
}
