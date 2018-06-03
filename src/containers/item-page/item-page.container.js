import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { HeaderLayout } from '../../components'
import './item-page-styles.css'
import { ItemGallery } from '../../components/item-gallery/item-gallery.component'
import { fetchCatalogItems } from '../../actions/catalog-items.action'

const mapStateToProps = state => ({ items: state.catalogItems.items })

class ItemPage extends Component {
  static propTypes = {
    items: PropTypes.array,
    match: PropTypes.object,
    dispatch: PropTypes.func,
  }
  componentDidMount() {
    this.props.dispatch(fetchCatalogItems())
  }
  render() {
    const item = this.props.items.find(i => String(i.id) === this.props.match.params.itemUrl)
    if (!item) {
      return <div>Загрузка...</div>
    }
    return (
      <HeaderLayout>
        <div className="item-box">
          <ItemGallery images={item.images} />
          <div className="item-info-box">
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
