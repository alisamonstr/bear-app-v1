import React from 'react'
import './catalog-styles.css'
import { Link } from 'react-router-dom'

export class CatalogItem extends React.Component {
    render() {
        const itemUrl = this.props.item.id
        const url = this.props.item.category
        return (
           <Link className='item-wrapper' to={`${url}/${itemUrl}`}>
               <div>
                {this.props.item.title}
            </div>

           <div className='image-wrapper'>
               <div className="catalog-item-image" style={{ background: `url('${this.props.item.images[0]}') center center no-repeat` }} />  </div>
               <div>
                   {this.props.item.price}
               </div>
           </Link>
        )
    }
}