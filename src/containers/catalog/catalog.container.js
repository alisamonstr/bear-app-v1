import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HeaderLayout} from '../../components'
import {CatalogItem} from "../../components/catalog/catalog-item.component";

export class CatalogContainer extends Component {
    render() {
        const items = [
            {
                title: 'Чарли',
                description: 'очень длинное описание',
                images: [
                    'https://sun9-7.userapi.com/c840538/v840538188/335bb/CEeTQvLrVs4.jpg',
                    'https://sun1-1.userapi.com/c840538/v840538188/335c5/O48qTUz_glU.jpg',
                    'https://sun1-1.userapi.com/c840538/v840538188/335cf/GVyiWMNCTB4.jpg'
                ],
                price: 1111,
                size: 'M',
                category: ['bear'],
                tag: ['bear']

            },
            {

                title: 'Лис',
                description: 'очень длинное описание',
                images: ['https://sun9-7.userapi.com/c840538/v840538188/33601/Az8fwVVCKBk.jpg',
                'https://sun1-1.userapi.com/c840538/v840538188/33695/U8DnnMcuF5E.jpg',
                'https://sun1-1.userapi.com/c840538/v840538188/33629/y-BgSGrP0fs.jpg'],
                price: 43433,
                category: ['toys'],
                tag: ['rabbit']

            },
            {

                title: 'Еще медведь',
                description: 'очень длинное описание',
                images: ['https://pp.userapi.com/c639630/v639630653/9216/LDvJW0E3g24.jpg',
                'https://pp.userapi.com/c639630/v639630653/9220/rEyhqIPnxmU.jpg',
                'https://pp.userapi.com/c639630/v639630653/922a/UKjsVQanpA0.jpg'],
                price: 77777,
                size: 'S',
                category: ['bears'],
                tag: ['bear']

            }
        ]
        return (
            <HeaderLayout>
                {this.props.match.params.url}
                <h3>Каталог</h3>
                <div>
                    { items.map(item => <CatalogItem item={item}/>)}
                </div>
                <Link to="/">главная</Link>
            </HeaderLayout>

        )
    }
}