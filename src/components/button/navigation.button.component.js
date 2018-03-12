import React from 'react'
import Button from 'material-ui/Button';
import './my-button.styles.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const getClasses = (to, router) => {
    console.log(router)
    if (router && router.location && to === router.location.pathname)  {
        return { label: 'active' }
    }
    return {}
}

const mapStateToProps = (state) => {
    return { router: state.router }
}
 const NavButton = ({children, to, router, ...props}) => (
    <Button component={Link} to={to} className='button-header' classes={getClasses(to, router)} {...props}> {children} </Button>
)

export const NavigationButton = connect(mapStateToProps)(NavButton)