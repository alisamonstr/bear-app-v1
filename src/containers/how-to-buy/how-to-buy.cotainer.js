import React, { Component } from 'react'
import { InputLabel, FormControl } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import { HeaderLayout } from '../../components'
import './how-to-buy-styles.css'

export class HowToBuyContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    address: '',


  };

  handleChange = (event) => {
    this.setState({ firstName: event.target.value })
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
          <div className="formLine" />
          <div className="formInputs">
            <FormControl className="formControl">
              <InputLabel htmlFor="name-simple">Your first name</InputLabel>
              <TextField id="name-simple" value={this.state.firstName} onChange={this.handleChange} />
            </FormControl>
          </div>
          <div className="formInputs">
            <FormControl className="formControl">
              <InputLabel htmlFor="name-simple">Your last name</InputLabel>
              <TextField id="name-simple" value={this.state.lastName} onChange={this.handleChange} />
            </FormControl>
          </div>
          <div className="formInputs">
            <FormControl className="formControl">
              <InputLabel htmlFor="name-simple">Country</InputLabel>
              <TextField id="name-simple" value={this.state.country} onChange={this.handleChange} />
            </FormControl>
          </div>
          <div className="formInputs">
            <FormControl className="formControl">
              <InputLabel htmlFor="name-simple">City</InputLabel>
              <TextField id="name-simple" value={this.state.city} onChange={this.handleChange} />
            </FormControl>
          </div>
          <div className="formInputs">
            <FormControl className="formControl">
              <InputLabel htmlFor="name-simple">Address</InputLabel>
              <TextField id="name-simple" value={this.state.address} onChange={this.handleChange} />
            </FormControl>
          </div>
          <div className="formInputs">
            <FormControl className="formControl">
              <InputLabel htmlFor="name-simple">Bear Name</InputLabel>
              <TextField id="name-simple" value={this.state.name} onChange={this.handleChange} />
            </FormControl>
          </div>
          <div className="formInputs">
            <FormControl className="formControl">
              <InputLabel htmlFor="name-simple">E-mail</InputLabel>
              <TextField id="name-simple" value={this.state.name} onChange={this.handleChange} />
            </FormControl>
          </div>
          <div className="formInputs">
            <TextField
              id="multiline-static"
              label="Comments"
              multiline
              rows="4"
              value={this.state.name}
              onChange={this.handleChange}
              className="textField"
              margin="normal"
            />
          </div>
        </div>

      </HeaderLayout>
    )
  }
}
