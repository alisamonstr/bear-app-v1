import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './item-gallery.styles.css'


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
          <div className="item-gallery-big-image" style={{ background: `url('${this.props.images[String(this.state.selected)]}')  no-repeat 100%` }} />
          <div className="item-gallery-images">
            {this.props.images.map((url, i) =>
                (<div
                  className="item-gallery-image"
                  style={{ background: `url('${url}')  no-repeat 100%`, border: this.state.selected === i ? '1px solid red' : '' }}
                  onClick={() => this.setState({ selected: i })}
                />))
                }
          </div>
        </div>
      )
    }
}
