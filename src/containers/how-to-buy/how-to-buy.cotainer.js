import React, {Component} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { HeaderLayout } from '../../components'
import './how-to-buy-styles.css'
import { MyButton } from '../../components/button'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
`
const ImputField = styled(TextField)`
    display: block !important;
`

const OrderInfo = styled.div`
     display: flex;
`

const OrderButton = styled(MyButton)`
margin-top: 50px;
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

  handleChange = (event) => {
    this.setState({firstName: event.target.value})
  };

  render() {
    return (
      <HeaderLayout navbarClassName="bigHeader">
        <div className="formBox">
          <h1> HOW TO BUY</h1>
          <div className="htbText">
            В 1902 году президент США Теодор Рузвельт пощадил на охоте американского чёрного медведя,
            загнанного охотничьей командой с собаками, полузабитого и привязанного к дереву (иве).
            Рузвельта пригласили отстрелить добычу. Он отказался сделать это сам, мотивируя тем,
            что это «неспортивно», но распорядился медведя пристрелить, дабы прекратить его мучения.
            История попала в газетные карикатуры,
            но со временем была адаптирована по конъюнктурным соображениям,
            и медведь превратился в маленького симпатичного медвежонка
            (в карикатуре в «Вашингтон пост» от 16 ноября 1902 г.). Детали истории со временем размылись,
            осталась главная — Тедди (прозвище Рузвельта) отказался стрелять в медвежонка.
            Одна из карикатур с уменьшенным до медвежонка масштабом попалась на глаза жене Морриса Мичтома,
            эмигранта из России (настоящее имя — Михаил Мишим[1]),
            владельца магазина игрушек. Она и сшила первого медвежонка,
            похожего на медведя из карикатуры.
            Он был установлен на витрине магазина и назван «Медвежонок Тедди», в честь президента Рузвельта.
          </div>
          <OrderInfo>
            <Column className="firstColumn">
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
        </div>
      </HeaderLayout>
    )
  }
}
