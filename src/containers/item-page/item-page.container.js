import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HeaderLayout } from '../../components'
import './item-page-styles.css'
import { ItemGallery } from '../../components/item-gallery/item-gallery.component'
import { fetchCatalogItems } from '../../actions/catalog-items.action'

const ItemBox = styled.div`
  width: 80%;
  background-color: white;
  margin-left: 150px;
  margin-top: 30px;
  box-shadow: 2px 3px 20px rgba(0,0,0,0.5);
  display: flex;
  padding: 50px;
  @media (max-width: 1000px){
  width: 90vw;
  margin-left: 10px;
  margin-top: 30px;
  padding: 10px;
  flex-direction: column;
  }
`
const ItemInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 300px;
  flex-direction: column;
   @media (max-width: 1000px){
   margin-left: 10px;
   padding-bottom: 15px;
   }
`
const Title = styled.h1`
 @media (max-width: 1000px){
 font-size: 25px;
 padding-bottom: 5px;
 }
`
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
        <ItemBox>
          <ItemGallery images={item.images} />
          <ItemInfoBox >
            <Title>{ item.title }</Title>
            <h3> { item.description } </h3>
            <div> Размер: {item.size} см.</div>
            <div>Цена: ₽{item.price} </div>
          </ItemInfoBox >

        </ItemBox>
      </HeaderLayout>
    )
  }
}

export const ItemPageContainer = connect(mapStateToProps)(ItemPage)
