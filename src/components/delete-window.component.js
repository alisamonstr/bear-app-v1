import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'

export class DeleteWindow extends React.Component {
  static propTypes = {
    delete: PropTypes.bool,
    onClose: PropTypes.func,
    onRemove: PropTypes.func,
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.props.delete}
          onClose={this.props.onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete this cute toy?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onRemove} color="primary">
              Delete
            </Button>
            <Button onClick={this.props.onClose} color="primary" autoFocus>
              No, I changed my mind
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

