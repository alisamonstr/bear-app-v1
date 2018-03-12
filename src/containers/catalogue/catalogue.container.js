import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HeaderLayout} from '../../components'

export class CatalogueContainer extends Component {
    render() {

        return (
            <HeaderLayout>
                {this.props.match.params.url}
                <h3>Каталог</h3>
                <Link to="/">главная</Link>
            </HeaderLayout>

        )
    }
}