import React from 'react'
import './catalog-styles.css'

export class CatalogItem extends React.Component {
    render() {
        return (
           <div className='item-wrapper'>
               <div>
                {this.props.item.title}
            </div>

           <div className='image-wrapper'> <div className="catalog-item-image" style={{ background: `url('${this.props.item.images[0]}') center center no-repeat` }} />  </div>
               <div>
                   {this.props.item.price}
               </div>
           </div>
        )
    }
}