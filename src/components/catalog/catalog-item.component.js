import React from 'react'
import './catalog-styles.css'

export class CatalogItem extends React.Component {
    render() {
        return (
           <div>
               <div>
                {this.props.item.title}
            </div>

           <div> {this.props.item.images.map(ig => <div className="img" style={{ background: `url('${ig}') no-repeat 100%` }} /> )} </div>
           </div>
        )
    }
}