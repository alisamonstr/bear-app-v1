import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import './my-button.styles.css'

export const MyButton = ({ children, ...props }) => (
  <Button className="button-header" {...props}> {children} </Button>
)
MyButton.propTypes = {
  children: PropTypes.element,
}
