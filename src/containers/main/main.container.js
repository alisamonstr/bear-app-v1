import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HeaderLayout} from '../../components'
import './main-styles.css'


export class MainContainer extends Component {
    render() {
        return (
            <HeaderLayout>
                <div className="block-about">

                <h1>Главная</h1>
                    <h3>текст</h3>
                <Link to="/about">о нас</Link>

                </div>
            </HeaderLayout>
        )
    }
}