import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, CardContent, CardMedia } from '@material-ui/core'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import './catalog-item-styles.css'

const ItemImage = styled(CardMedia)`
    background-size: contain ;
    width: 350px;
    height: 400px;
     @media  (max-width: 1000px) {
     max-width: calc(100vw - 30px);
    height: 370px;
     }
`
const ItemWrapper = styled(Link)`
  margin: 30px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s all;
  text-decoration: none;
   @media  (max-width: 1000px) {
   margin: 15px;
   margin-top:20px;
   }
   &:hover{
     background-color: beige;
   }
  `
const TextTitle = styled.div`
font-weight: bold;
@media  (max-width: 1000px) {
font-size: 25px;
}
`
const ContentCard = styled(CardContent)`
margin: -10px 0
`
export class CatalogItem extends React.Component {
  static propTypes = {
    item: PropTypes.object,
  }
  render() {
    const itemUrl = this.props.item.id
    const url = this.props.item.category
    return (
      <ItemWrapper to={`${url}/${itemUrl}`}>
        <Card>
          <ContentCard>
            <Typography variant="headline" component="h2">
              <TextTitle>{this.props.item.title}</TextTitle>
            </Typography>
            <Typography color="textSecondary" variant="subheading" component="h2" >
                          Размер:   {this.props.item.sizeDetail} см
            </Typography>
          </ContentCard>
          <ItemImage
            image={this.props.item.images[0]}
            title={this.props.item.title}
          />
          <ContentCard>
            <Typography variant="headline" align="right" component="h3">
              <div className="text-price"> Цена: ₽{this.props.item.price} </div>
            </Typography>
          </ContentCard>
        </Card>
      </ItemWrapper>
    )
  }
}
