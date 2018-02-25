import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AboutContainer extends Component {
    render() {
        return (
            <div>
                <h3>О нас</h3>
                <Link to="/">главная</Link>
            </div>
        )
    }
}