import React from 'react'
import './properties-column-styles.css'




export class PropertiesColumn extends React.Component {
  render(){
    const properties = [{from: 'Показать все', quantity: this.props.items.length},{from: 0, to: 15},{from: 16, to: 25},{from: 26, to: 35},{from: 36, to: 50},{from: 51, to:80}]
    const itemsSizes = this.props.items.map(x => Number(x.size))
    console.log(itemsSizes)
    const propertiesWitsQuantity= properties.slice(1).map(x => x.quantity = itemsSizes.filter(item => x.from <= item  && item <= x.to ).length )
    const sucsessfullProperties = [properties[0], ...propertiesWitsQuantity]


    return(
      <div className='column'>{
        properties.map(prop => <div className='column-item'>{!prop.to ? prop.from : `${prop.from} - ${prop.to}`}({prop.quantity})</div>)
      }</div>
    )
  }

}