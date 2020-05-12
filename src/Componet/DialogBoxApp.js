import React, { Component } from 'react'
import Modal from 'react-modal'
import Dialog from './Dialog'
export default class DialogBoxApp extends Component {
    state={
        modalIsOpen: false
        
    }

    setModalIsOpen =()=>{
        this.setState({
            modalIsOpen: true
        })
    }
    render() {
        
        return (
            <div>
                <button onClick = {this.setModalIsOpen} >Open Modal</button>
                <Modal isOpen={this.state.modalIsOpen}>
                    <h1>Modal Tilte</h1>
                    <p>The body</p>
                    <div>
                        <button onClick={()=>this.setState({modalIsOpen:false})}>close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}
