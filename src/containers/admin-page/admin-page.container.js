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
import { MyButton } from '../../components/button'
import { logOut } from '../../actions'
import { fetchCatalogItems } from '../../actions/catalog-items.action'

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

  componentDidMount() {
    this.props.dispatch(fetchCatalogItems())
    if (!this.props.user.token) {
      this.props.dispatch(push('/login'))
    }
  }

  loginOut = () => {
    this.props.dispatch(logOut())
  }

  render() {
    return (
      <CardWrapper>
        <h1>hello</h1>

        <StyledPaper>
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell>Bear Name</TableCell>
                <TableCell numeric>Size</TableCell>
                <TableCell numeric>Price</TableCell>
                <TableCell numeric>Description</TableCell>
                <TableCell numeric>Image</TableCell>
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
                      <div style={{
                        background: `url('${item.images[0]}') no-repeat 100%`,
                        width: '125px',
                        height: '125px',
                        backgroundSize: 'contain',
                      }}
                      />
                    </StyledLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledPaper>

        <OrderButton onClick={this.loginOut}>
          <div>goodbye</div>
        </OrderButton>
      </CardWrapper>
    )
  }
}

export const AdminContainer = connect(mapStateToProps)(Admin)
