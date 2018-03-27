import React, {Component} from 'react'
import {HeaderLayout} from '../../components'
import './item-page-styles.css'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {items: state.catalogItems }
}

 class ItemPage extends Component {

    render() {
        const item = this.props.items.find(item => String(item.id) === this.props.match.params.itemUrl)
        return (
            <HeaderLayout>
                { item.title }
                <div className='item-page-images'>
                    {item.images.map(i => <div className="item-page-image" style={{ background: `url('${i}')  no-repeat 100%` }} />)}
                </div>
            </HeaderLayout>
        )
    }
}

export const ItemPageContainer = connect(mapStateToProps)(ItemPage)