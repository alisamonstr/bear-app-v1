import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HeaderLayout} from '../../components'
import {CatalogItem} from "../../components/catalog/catalog-item.component";
import './catalog-styles.css'
import { connect } from 'react-redux'
import {fetchCatalogItems} from "../../actions/catalog-items.action";
import {PropertiesColumn} from "../../components/properties-column";


const mapStateToProps = (state) => {
    return {items: state.catalogItems }
}

 class Catalog extends Component {
   componentDidMount () {
     this.props.dispatch(fetchCatalogItems())
   }
    render() {

        return (
            <HeaderLayout>
              <div className='properties-column'>
              <PropertiesColumn  items={this.props.items}/>
                <div className='catalog-wrapper'>
                    { this.props.items.map(item => <CatalogItem item={item} key={item.id}/> )}
                </div>
              </div>
            </HeaderLayout>

        )
    }
}

export const CatalogContainer = connect(mapStateToProps)(Catalog)