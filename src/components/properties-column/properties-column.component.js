import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import './properties-column-styles.css'
import { properties } from '../../reducers/catalog-items.reducer'


const Column = styled(Paper)`
    width: 145px;
    height: 210px;
    margin: 20px;
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
const Item = styled(MenuItem)`
height: 10px !important;
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
          <Item className={`column-item ${from === prop.from ? 'active-column-item' : ''}`}>
            <Link
              to={prop.to ? `?from=${prop.from}` : '#'}
              key={prop.from}
              className="link-color"
            >
              {!prop.to ? prop.from : `${prop.from} - ${prop.to}`}   ({prop.quantity})
            </Link>
          </Item>
        ))}
      </Column>
    )
  }
}
