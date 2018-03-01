import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HeaderLayout} from '../../components'

export class AboutContainer extends Component {
    render() {
        return (
            <HeaderLayout>
                <h3>О нас</h3>
                <Link to="/">главная</Link>
            </HeaderLayout>
        )
    }
}