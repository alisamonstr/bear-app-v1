import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { Field, Form } from 'react-final-form'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'
import './how-to-buy-styles.css'
import { MyButton } from '../../components/button'
import { SimpleSnackbar } from '../../components/error.component'
import { link } from '../../config'


const ItemBox = styled.div`
  width: 80%;
  background-color: white;
  margin-left: 30px;
  margin-top: 30px;
  box-shadow: 2px 3px 20px rgba(0,0,0,0.5);
  display: flex;
  padding: 50px;
  @media (max-width: 1000px){
  width: 90vw;
  margin-left: 10px;
  margin-top: 30px;
  padding: 10px;
  flex-direction: column;
  }
`
const BigInputField = styled(TextField)`
    margin-bottom: 20px !important;
    width: 400px ;
`
const ItemInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 80px;
  flex-direction: column;
   @media (max-width: 1000px){
   margin-left: 10px;
   padding-bottom: 15px;
   }
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    margin-left: 30px;
    align-items: center;
    @media (max-width: 1000px){
    margin-left: 20px;
    }
`
const InputField = styled(TextField)`
    display: block !important;
`

const OrderInfo = styled.div`
     display: flex;
     @media (max-width: 1000px){
     flex-direction: column;
     }
`

const OrderButton = styled(MyButton)`
     margin-top: 20px !important;
     margin-left: 80px !important;
     width: 100px;
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
    height: 1000px;
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
const StyledHowToBuy = styled.h1`
   @media (max-width: 1000px){
   margin-bottom: -10px;
}
`
const CommentsInput = styled(BigInputField)`
   width: 185px;
`
const Styledform = styled.form`
 display: flex;

 
`
const Smth = styled.div`
width: 20px;
`
const StyledField = styled(Field)`
margin-top: 100px !important;
`

export class HowToBuy extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }
  state = {
    isError: false,
    isSuccess: false,

  }
  onSubmit = (values) => {
    fetch(`${link}/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        values,
      }),
    }).then(() => this.setState({ isSuccess: true }))
      .catch(() => this.setState({ isError: true }))
  }
  getContent = () => {
    if (this.state.isSuccess) {
      return (
        <div>  Ваша заявка отправлена. Скоро мы свяжемся с вами. </div>
      )
    }
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
      >
        {({ handleSubmit }) => (
          <ItemInfoBox>
            <Styledform onSubmit={handleSubmit}>
              <Column>
                <StyledField name="firstName">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="First Name"
                        autoComplete="firstName"
                        className="edit"
                        type="text"
                      />
                    </div>
                  )}
                </StyledField>
                <StyledField name="lastName">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="Last  Name"
                        autoComplete="lastName"
                        className="edit"
                        type="text"
                      />
                    </div>
                  )}
                </StyledField>
                <StyledField name="country">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="Country"
                        autoComplete="country"
                        className="edit"
                        type="text"
                      />
                    </div>
                  )}
                </StyledField>
                <StyledField name="comments">
                  {({ input, meta }) => (
                    <div>
                      <CommentsInput
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        id="standard-multiline-flexible"
                        label="Comments"
                        multiline
                        rowsMax="10"
                        rows={4}
                        className="textField"
                        autoComplete="comments"
                        type="text"
                      />
                    </div>
                  )}
                </StyledField>
              </Column>
              <Smth />
              <Column>
                <Field name="adress">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="Adress"
                        autoComplete="adress"
                        className="edit"
                        type="text"
                      />
                    </div>
                  )}
                </Field>
                <Field name="bearName">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="Bear Name"
                        autoComplete="bearName"
                        className="edit"
                        type="text"
                      />
                    </div>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="E-mail"
                        autoComplete="email"
                        className="edit"
                        type="text"
                      />
                    </div>
                  )}
                </Field>
                <Field name="city">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="City"
                        autoComplete="city"
                        className="edit"
                        type="text"
                      />
                    </div>
                  )}
                </Field>
                <OrderButton type="submit"> Заказать </OrderButton>

              </Column>
            </Styledform>
          </ItemInfoBox>
        )
        }
      </Form>
    )
  }
  handleError = () => {
    this.setState({ isError: false })
  }
  validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    }
    if (!values.lastName) {
      errors.lastName = 'Required'
    }
    if (!values.country) {
      errors.country = 'Required'
    }
    if (!values.city) {
      errors.city = 'Required'
    }
    if (!values.adress) {
      errors.adress = 'Required'
    }
    if (!values.bearName) {
      errors.bearName = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    }
    return errors
  }

  render() {
    return (
      <FormBox>
        <StyledHowToBuy> HOW TO BUY</StyledHowToBuy>
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
          <ItemBox>
            {this.getContent()}
            <SimpleSnackbar handleError={this.handleError} error={this.state.isError} />

          </ItemBox>
        </OrderInfo>
      </FormBox>
    )
  }
}

export const HowToBuyComponent = connect()(HowToBuy)
