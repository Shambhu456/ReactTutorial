import React, { Component } from 'react'

export default class ClassRefs extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    
    focusInput(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" refs={this.inputRefs}/>
            </div>
        )
    }
}


