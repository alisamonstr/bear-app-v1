import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const StyledIconButton = styled(IconButton)`
  padding: theme.spacing.unit / 2,
  
`
const StuledSnackbar = styled(Snackbar)`
.snackbar-root { background: green !important;}
`

export class SimpleSnackbar extends React.Component {
  static propTypes = {
    error: PropTypes.bool,
    handleError: PropTypes.func,
  }

  render() {
    return (
      <div>
        <StuledSnackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          classes={{ root: 'snackbar-root' }}
          open={this.props.error}
          autoHideDuration={60000}
          onClose={this.props.handleError}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Что-то не работает</span>}
          action={[
            <StyledIconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.props.handleError}
            >
              <CloseIcon />
            </StyledIconButton>,
          ]}
        />
      </div>
    )
  }
}

