import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MainContainer extends Component {
    render() {
        return (
            <div>
                <h3>Главная</h3>
                <Link to="/about">о нас</Link>
            </div>
        )
    }
}