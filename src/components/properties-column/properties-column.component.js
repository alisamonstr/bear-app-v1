import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './properties-column-styles.css'
import { properties } from '../../reducers/catalog-items.reducer'



const Column = styled.div`
    background-color: white;
    border: 3px solid #F309F6;
    width: 125px;
    height: 190px;
    margin: 30px;
    padding: 10px;
    @media  (max-width: 1000px) { 
    display: none;
    border: 0;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    }
`
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
      <Column>
        {propertiesWithQuantity.map(prop => (
          <Link
            to={prop.to ? `?from=${prop.from}` : '#'}
            key={prop.from}
            className={`column-item ${from === prop.from ? 'active-column-item' : ''}`}
          >
            {!prop.to ? prop.from : `${prop.from} - ${prop.to}`}({prop.quantity})
          </Link>
        ))}
      </Column>
    )
  }
}
