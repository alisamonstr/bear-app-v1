import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './layout-styles.css'
import {NavigationButton} from '../button'

export const HeaderLayout = ({ children, ...props }) => (
    <div {...props}>
        <div className='toolbar-parents' position="static">
            <Toolbar className="hat-header toolbar">
                <Typography variant="title" color="inherit" >
                    Bear for love
                </Typography>
            </Toolbar>
            <Toolbar className="menu-header toolbar" >
                <NavigationButton to='/'> Главная </NavigationButton>
                <NavigationButton to='/catalogue/bears'> Мишки </NavigationButton>
                <NavigationButton to='/catalogue/toys'> Другие звери</NavigationButton>
                <NavigationButton to='/catalogue/others'> Не игрушки </NavigationButton>
                <NavigationButton to='/how-to-buy'> Как заказать </NavigationButton>
            </Toolbar>
        </div>
        {children}
    </div>
)