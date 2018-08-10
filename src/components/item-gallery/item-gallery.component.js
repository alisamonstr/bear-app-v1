import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './item-gallery.styles.css'

const ItemGalleryBigImage = styled.div`
  background-size: contain !important;
  width: 400px;
  height: 500px;
  margin: 20px 0;
  @media (max-width: 1000px){
  width: 280px;
  height: 380px;
  margin-top: 10px;
  }
  `
const ItemGalleryImage = styled.div`
  background-size: cover !important;
  width: 125px;
  height: 125px;
  margin: 10px;
  padding: 10px;
   @media (max-width: 1000px){
   padding: 0;
   margin: 7px;
   width: 80px;
   height: 80px;
   }
  `
export class ItemGallery extends Component {
  static propTypes = {
    images: PropTypes.array,
  }
    state ={
      selected: 0,
    };
    render() {
      return (
        <div className="item-gallery">
          <ItemGalleryBigImage style={{ background: `url('${this.props.images[String(this.state.selected)]}')  no-repeat 100%` }} />
          <div className="item-gallery-images">
            {this.props.images.map((url, i) =>
                (<ItemGalleryImage
                  style={{ background: `url('${url}')  no-repeat 100%`, border: this.state.selected === i ? '1px solid red' : '' }}
                  onClick={() => this.setState({ selected: i })}
                />))
                }
          </div>
        </div>
      )
    }
}
