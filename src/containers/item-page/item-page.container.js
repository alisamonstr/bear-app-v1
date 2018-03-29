import React, {Component} from 'react'
import {HeaderLayout} from '../../components'
import './item-page-styles.css'
import { connect } from 'react-redux'
import {ItemGallery} from "../../components/item-gallery/item-gallery.component";

const mapStateToProps = (state) => {
    return {items: state.catalogItems }
}

 class ItemPage extends Component {

    render() {
        const item = this.props.items.find(item => String(item.id) === this.props.match.params.itemUrl)
        return (
            <HeaderLayout>
                { item.title }
                <ItemGallery images={item.images}/>
            </HeaderLayout>
        )
    }
}

export const ItemPageContainer = connect(mapStateToProps)(ItemPage)