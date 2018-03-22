import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {HeaderLayout} from '../../components'
import './item-page-styles.css'

export class ItemPageContainer extends Component {
    render() {
        return (
            <HeaderLayout>
                {this.props.match.params.url}
                {this.props.match.params.itemUrl}
            </HeaderLayout>
        )
    }
}