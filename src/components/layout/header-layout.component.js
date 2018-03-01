import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import './layout-styles.css'


export const HeaderLayout = ({ children, ...props }) => (
    <div {...props}>
        <div className='toolbar-parents' position="static">
            <Toolbar className="hat-header toolbar">
                <Typography variant="title" color="inherit" >
                    Bear for love
                </Typography>
            </Toolbar>
            <Toolbar className="menu-header toolbar" >
                <Button className='button-header'> Главная </Button>
                <Button className='button-header'> Мишки </Button>
                <Button className='button-header'> Другие звери</Button>
                <Button className='button-header'> Не игрушки </Button>
                <Button className='button-header'> Как заказать </Button>
            </Toolbar>
        </div>
        {children}
    </div>
)