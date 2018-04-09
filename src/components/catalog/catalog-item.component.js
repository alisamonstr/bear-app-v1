import React from 'react'
import './catalog-item-styles.css'
import { Link } from 'react-router-dom'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

export class CatalogItem extends React.Component {
    render() {
        const itemUrl = this.props.item.id
        const url = this.props.item.category
        return (
           <Link className='item-wrapper' to={`${url}/${itemUrl}`}>
               <Card>
                   <CardContent>
                       <Typography   variant="headline" component="h2">
                           <div className="text-title">{this.props.item.title}</div>
                       </Typography>
                       <Typography color="textSecondary" variant="subheading" component="h2" >
                          Размер:   {this.props.item.sizeDetail} см
                       </Typography>
                   </CardContent>
                   <CardMedia
                       className="catalog-item-image"
                       image={this.props.item.images[0]}
                       title={this.props.item.title}
                   />
                   <CardContent>
                       <Typography variant="headline"  align="right" component="h3">
                           <div className="text-price"> Цена: ₽{this.props.item.price} </div>
                       </Typography>
                   </CardContent>
               </Card>
           </Link>
        )
    }
}