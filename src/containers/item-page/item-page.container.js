import React, {Component} from 'react'
import {HeaderLayout} from '../../components'
import './item-page-styles.css'
import { connect } from 'react-redux'
import {ItemGallery} from "../../components/item-gallery/item-gallery.component";
import {fetchCatalogItems} from "../../actions/catalog-items.action";

const mapStateToProps = (state) => {
    return {items: state.catalogItems }
}

 class ItemPage extends Component {
   componentDidMount () {
     this.props.dispatch(fetchCatalogItems())
   }
    render() {
        const item = this.props.items.find(item => String(item.id) === this.props.match.params.itemUrl)
      if (!item) {
        return <div>Загрузка...</div>
      }
        return (
            <HeaderLayout>
              <div className='item-box'>
                <ItemGallery images={item.images}/>
                <div className='item-info-box'>
                  <h1>{ item.title }</h1>
                  <h3> { item.description } </h3>
                  <div> Размер: {item.size} см.</div>
                  <div>Цена: ₽{item.price} </div>
                </div>

              </div>
            </HeaderLayout>
        )
    }
}

export const ItemPageContainer = connect(mapStateToProps)(ItemPage)