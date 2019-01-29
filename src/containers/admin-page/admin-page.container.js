import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { MyButton, DeleteWindow } from '../../components'
import { logOut } from '../../actions'
import { deleteItem, fetchCatalogItems } from '../../actions/catalog-items.action'

const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 200px;
   margin-top: 100px;
   background-color: white;
   width: 1000px;
   padding: 50px;
   padding-left: 80px;
   border-radius: 20px;
   box-shadow: 2px 3px 20px rgba(0,0,0,0.5);
`


const OrderButton = styled(MyButton)`
   margin-top: 45px !important;
   width: 100px;
`
const AddButton = styled(MyButton)`
&.button {
   background: linear-gradient(45deg, #F4D718 30%, #2CD32F 90%) !important;
   width: 100px;
   margin-bottom: 15px;
   }
`

const DeleteButton = styled(MyButton)`
&.button {
   background: linear-gradient(45deg, #f12711 30%, #f5af19 90%) !important;
   width: 30px;
   }
`
const StyledPaper = styled(Paper)`
  width: 100%;
  margin-top: theme.spacing.unit * 3;
  overflow-x: auto;
`
const StyledTable = styled(Table)`
  min-width: 700px
`
const StyledLink = styled(Link)`
  color: black;
`
const mapStateToProps = state => ({
  user: state.user,
  items: state.catalogItems.items,
})

export class Admin extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.object,
    items: PropTypes.array,

  }
  state = {
    delete: false,
    itemId: 0,
  }

  componentDidMount() {
    this.props.dispatch(fetchCatalogItems())
    if (!this.props.user.token) {
      this.props.dispatch(push('/login'))
    }
  }

  onClose = () => {
    this.setState({ delete: false })
  }
  onRemove = () => {
    this.props.dispatch(deleteItem({ id: this.state.itemId })).catch(() => console.log('olala'))
    this.onClose()
  }
  loginOut = () => {
    this.props.dispatch(logOut())
  }

  render() {
    console.log(this.props.items)
    return (
      <CardWrapper>
        <h1>hello</h1>
        <AddButton>
          <StyledLink to="/add">
            add new
          </StyledLink>
        </AddButton>
        <StyledPaper>
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell>Bear Name</TableCell>
                <TableCell numeric>Size</TableCell>
                <TableCell numeric>Price</TableCell>
                <TableCell numeric>Description</TableCell>
                <TableCell numeric>Image</TableCell>
                <TableCell numeric>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.items.map(item => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    <StyledLink to={`/edit/${item.id}`}>
                      {item.title}
                    </StyledLink>
                  </TableCell>
                  <TableCell numeric><StyledLink to={`/edit/${item.id}`}> {item.size} </StyledLink></TableCell>
                  <TableCell numeric><StyledLink to={`/edit/${item.id}`}> {item.price}</StyledLink></TableCell>
                  <TableCell numeric><StyledLink to={`/edit/${item.id}`}> {item.description} </StyledLink></TableCell>
                  <TableCell numeric>
                    <StyledLink to={`/edit/${item.id}`}>
                      {item.images && item.images.length > 0 ?
                        <div style={{
                          background: `url('${item.images[0]}') no-repeat 100%`,
                          width: '125px',
                          height: '125px',
                          backgroundSize: 'contain',
                        }}
                        />
                        : 'no images'
                      }
                    </StyledLink>
                  </TableCell>
                  <TableCell numeric>
                    <DeleteButton onClick={() => this.setState({ delete: true, itemId: item.id })}>
                      <div> X</div>
                    </DeleteButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledPaper>

        <OrderButton onClick={this.loginOut}>
          <div>goodbye</div>
        </OrderButton>
        <DeleteWindow
          delete={this.state.delete}
          onClose={this.onClose}
          onRemove={this.onRemove}
        />
      </CardWrapper>
    )
  }
}

export const AdminContainer = connect(mapStateToProps)(Admin)
