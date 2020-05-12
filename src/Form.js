import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserName:'',
             comments: '',
             topic: 'react'
        }
    }
    
    handleUserName = (event) => {
        this.setState({
            UserName: event.target.value
        })
    }

    handleCommentsChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>UserName:</label>
                        <input type='text' value={this.state.UserName} onChange={this.handleUserName}/>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.handleCommentsChange}/>
                    </div>

                    <div>
                    <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <opttion value='react'>React</opttion>
                            <opttion value='angular'>Angular</opttion>
                            <opttion value='vue'>Vue</opttion>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
