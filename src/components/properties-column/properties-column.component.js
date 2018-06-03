import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './properties-column-styles.css'
import { properties } from '../../reducers/catalog-items.reducer'


export class PropertiesColumn extends React.Component {
  static propTypes = {
    items: PropTypes.array,
  }
  render() {
    const itemsSizes = this.props.items.map(x => Number(x.size))
    const propertiesWithQuantity = properties.map(x => ({
      ...x,
      quantity: x.to ? itemsSizes.filter(item => x.from <= item && item <= x.to).length : this.props.items.length,
    }))
    const from = Number(window.location.search.split('=')[1])

    return (
      <div className="column">
        {propertiesWithQuantity.map(prop => (
          <Link
            to={prop.to ? `?from=${prop.from}` : '#'}
            key={prop.from}
            className={`column-item ${from === prop.from ? 'active-column-item' : ''}`}
          >2
            {!prop.to ? prop.from : `${prop.from} - ${prop.to}`}({prop.quantity})
          </Link>
        ))}
      </div>
    )
  }
}
