import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import './navigation-button.styles.css'

const getClasses = (to, router) => {
  if (router && router.location && to === router.location.pathname) {
    return { label: 'active' }
  }
  return {}
}

const mapStateToProps = state => ({ router: state.router })
const NavButton = ({ children, to, router }) => (
  <Button component={Link} to={to} className="button-header" classes={getClasses(to, router)}> {children} </Button>
)
NavButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  to: PropTypes.string,
  router: PropTypes.object,
}

export const NavigationButton = connect(mapStateToProps)(NavButton)
