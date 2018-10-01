import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import TextField from '@material-ui/core/TextField'
import './how-to-buy-styles.css'
import { MyButton } from '../../components/button'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    @media (max-width: 1000px){
    margin-left: 20px;
    }
`
const ImputField = styled(TextField)`
    display: block !important;
`

const OrderInfo = styled.div`
     display: flex;
     @media (max-width: 1000px){
     flex-direction: column;
     }
`

const OrderButton = styled(MyButton)`
     margin-top: 45px !important;
     @media (max-width: 1000px){
     width: 150px;
     margin-top: 20px !important;
     }
`
const fadeIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1;
  }
`

const FormBox = styled.div`
    animation: ${fadeIn} 0.4s ease-in;
    width: 50%;
    height: 800px;
    background-color: white;
    margin-left: 300px;
    margin-top: -200px; 
    box-shadow: 2px 3px 20px rgba(0,0,0,0.5);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 100px;
    position: relative;
    @media (max-width: 1000px){
     width: 90vw;
     margin-left: 10px;
     margin-top: 30px; 
     margin-bottom: 45px; 
     height: 1100px;
     padding: 10px;
    }
`
const HowToBuyDescription = styled.div`
    font-size: 18px;
    line-height: 1.2;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
`
const HowToBuy = styled.h1`
   @media (max-width: 1000px){
   margin-bottom: -10px;
}
`

export class HowToBuyContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    address: '',
    bearName: '',
    email: '',
    comments: '',

  };

  render() {
    return (
      <FormBox>
        <HowToBuy> HOW TO BUY</HowToBuy>
        <HowToBuyDescription>
          Детали истории со временем размылись,
          осталась главная — Тедди (прозвище Рузвельта) отказался стрелять в медвежонка.
          Одна из карикатур с уменьшенным до медвежонка масштабом попалась на глаза жене Морриса Мичтома,
          эмигранта из России (настоящее имя — Михаил Мишим[1]),
          владельца магазина игрушек. Она и сшила первого медвежонка,
          похожего на медведя из карикатуры.
          Он был установлен на витрине магазина и назван «Медвежонок Тедди», в честь президента Рузвельта.
        </HowToBuyDescription>
        <OrderInfo>
          <Column>
            <ImputField
              label="First Name"
              autoComplete="current-password"
              margin="normal"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <ImputField
              label="Last Name"
              autoComplete="current-password"
              margin="normal"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <ImputField
              label="Country"
              autoComplete="current-password"
              margin="normal"
              value={this.state.country}
              onChange={this.handleChange}
            />
            <ImputField
              label="City"
              autoComplete="current-password"
              margin="normal"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <ImputField
              label="Address"
              autoComplete="current-password"
              margin="normal"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Column>

          <Column>
            <ImputField
              label="Bear Name"
              autoComplete="current-password"
              margin="normal"
              value={this.state.bearName}
              onChange={this.handleChange}
            />
            <ImputField
              label="E-mail"
              autoComplete="current-password"
              margin="normal"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <ImputField
              id="multiline-static"
              label="Comments"
              multiline
              rows="4"
              value={this.state.comments}
              onChange={this.handleChange}
              className="textField"
              margin="normal"
            />
            <OrderButton> Заказать </OrderButton>
          </Column>
        </OrderInfo>
      </FormBox>
    )
  }
}
