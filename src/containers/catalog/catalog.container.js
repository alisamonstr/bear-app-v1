import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HeaderLayout} from '../../components'
import {CatalogItem} from "../../components/catalog/catalog-item.component";
import './catalog-styles.css'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {items: state.catalogItems }
}

 class Catalog extends Component {
    render() {

        return (
            <HeaderLayout>
                {this.props.match.params.url}
                <h3>Каталог</h3>
                <div className='catalog-wrapper'>
                    { this.props.items.map(item => <CatalogItem item={item}/> )}
                </div>
                <Link to="/">главная</Link>
            </HeaderLayout>

        )
    }
}

export const CatalogContainer = connect(mapStateToProps)(Catalog)