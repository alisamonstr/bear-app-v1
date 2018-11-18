import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CatalogItem } from '../../components/catalog/catalog-item.component'
import './catalog-styles.css'
import { fetchCatalogItems } from '../../actions/catalog-items.action'
import { PropertiesColumn } from '../../components/properties-column'


const mapStateToProps = state => ({
  items: state.catalogItems.items,
  filteredItems: state.catalogItems.filteredItems,
})

class Catalog extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.array,
    filteredItems: PropTypes.array,
    match: PropTypes.any,
  }

  componentDidMount() {
    this.props.dispatch(fetchCatalogItems())
  }
  render() {
    return (
      <div className="properties-column">
        <PropertiesColumn items={this.props.items} />
        <div className="catalog-wrapper">
          {this.props.filteredItems.filter(i => i.category === this.props.match.params.url)
            .map(item => <CatalogItem item={item} key={item.id} />)}
        </div>
      </div>

    )
  }
}

export const CatalogContainer = connect(mapStateToProps)(Catalog)
