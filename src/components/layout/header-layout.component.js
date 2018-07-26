import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './layout-styles.css'
import { NavigationButton } from '../button'

const ToolbarParents = styled.div`
@media  (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center; 
}`

const BigTolbar = styled(Toolbar)`
    color: white;
    width: 100%;
    height: 145px;
    background: url("https://sun1-2.userapi.com/c840538/v840538188/335ed/gSZVDeMNKgs.jpg");
    background-position: 10% -55%;
    @media  (max-width: 1000px) {
    height: 80px;
    background: linear-gradient(45deg, #E023E4 30%, #11F5F5 90%);};
`
const OpenIcon = styled.span`
    display: none;
@media (max-width: 800px) {
   display: block;
    font-size:25px;
    cursor:pointer;
    margin-left: 20px;
    margin-right: 20px;
    }
`
const SlideNavigation = styled.div`
background: linear-gradient(45deg, #E023E4 30%, #11F5F5 90%);
    color: white;
    min-height: 80% !important;
    width: 100%;
    position: static !important;
    height: 50px ;
    padding-top: 15px;
    
     @media  (max-width: 1000px) { 
    height: 100%;
    width: ${props => props.isOpen ? '100%' : '0%'};
    position: fixed !important;
    z-index: 1;
    top: 0;
    left: 0;
    background: linear-gradient(#E023E4 30%, #11F5F5 90%);
    overflow-x: hidden;
    transition: 0.5s;
    text-align:center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    }
  
`
const CloseBtn = styled.a`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: white;
    display: block;
    transition: 0.3s;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    @media (max-height: 1024px) {
    font-size: 25px};
    &:hover{
    color: #f1f1f1;
    }
`
const NavBtn = styled(NavigationButton)`
 padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: #818181;
    display: block;
    transition: 0.3s;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    &:hover{
    color: #f1f1f1;
    }
`
const Children = styled.div`
    height: 100vh;
`
const BearForLove = styled(Typography)`
    color: inherit;
    font-weight: lighter;
    padding: 20px;
    font-size: 50px !important;
    @media (max-width: 1024px) {
    font-size: 25px !important;};
  
`
export class HeaderLayout extends React.Component {
  state = {
    open: false,
  };
  render() {
    const { children, className } = this.props
    return (
      <div className={className}>
        <ToolbarParents>
          <BigTolbar>
            <OpenIcon
              onClick={() => this.setState({ open: true })}
            >&#9776;
            </OpenIcon>
            <BearForLove className="bearforlove" variant="title" color="inherit" >
              Bear for love
            </BearForLove>
          </BigTolbar>
          <SlideNavigation isOpen={this.state.open}>
            <CloseBtn
              onClick={() => this.setState({ open: false })}
            >&times;
            </CloseBtn>
            <NavBtn to="/"> Главная </NavBtn>
            <NavBtn to="/catalog/bears"> Мишки </NavBtn>
            <NavBtn to="/catalog/toys"> Другие звери</NavBtn>
            <NavBtn to="/catalog/others"> Не игрушки </NavBtn>
            <NavBtn to="/how-to-buy"> Как заказать </NavBtn>
          </SlideNavigation>
        </ToolbarParents>
        <Children className="layout-wrapper">
          {children}
        </Children>

      </div>
    )
  }
}
HeaderLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
}

