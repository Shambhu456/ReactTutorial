import './Project.css'
import { Link } from 'react-router-dom'

import React, { Component } from 'react'

export default class ProjectHeader extends Component {
    render() {
        const P ={
            color:'white',
        
    
        }
        return (
            <div className="head">
                <Link style={P} to='/'>
                <h3>Home</h3>
                </Link>
                <h2>Webpage</h2>
                <ul className="head-links">
                <Link style={P} to='/friend'>
                    <li>Friends</li>
                    </Link>
                    <Link style={P} to='/setting'>
                    <li>Settings</li>
                    </Link>
                </ul>
            </div>
        )
    }
}
