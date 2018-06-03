import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import './layout-styles.css'
import { NavigationButton } from '../button'

export const HeaderLayout = ({ children, className, ...props }) => (
  <div className={className}>
    <div className="toolbar-parents" position="static">
      <Toolbar className="hat-header toolbar">
        <Typography className="bearforlove" variant="title" color="inherit" >
                    Bear for love
        </Typography>
      </Toolbar>
      <Toolbar className={`menu-header toolbar ${props.navbarClassName}`} >
        <NavigationButton to="/"> Главная </NavigationButton>
        <NavigationButton to="/catalog/bears"> Мишки </NavigationButton>
        <NavigationButton to="/catalog/toys"> Другие звери</NavigationButton>
        <NavigationButton to="/catalog/others"> Не игрушки </NavigationButton>
        <NavigationButton to="/how-to-buy"> Как заказать </NavigationButton>
      </Toolbar>
    </div>
    <div className="layout-wrapper">
      {children}
    </div>

  </div>
)

HeaderLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  navbarClassName: PropTypes.string,
  className: PropTypes.string,
}

