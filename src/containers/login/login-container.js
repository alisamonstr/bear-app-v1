import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import { push } from 'react-router-redux'
import TextField from '@material-ui/core/TextField'
import { MyButton } from '../../components/button'
import { login } from '../../actions'

const CardWrapper = styled.div`
     display: flex;
     flex-direction: column;
     margin-left: 500px;
     margin-top: 100px;
     background-color: white;
     width: 240px;
     padding: 50px;
     padding-left: 80px;
     border-radius: 20px;
     box-shadow: 2px 3px 20px rgba(0,0,0,0.5);
`

const InputField = styled(TextField)`
    display: block !important;
`
const OrderButton = styled(MyButton)`
     margin-top: 45px !important;
    width: 100px;
`

const mapStateToProps = state => ({
  user: state.user,
})

export class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.object,
  }
  componentDidMount() {
    if (this.props.user.token) {
      this.props.dispatch(push('/admin'))
    }
  }

  onSubmit = (values) => {
    this.props.dispatch(login(values.email, values.password))
  }
  validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
      >
        {({ handleSubmit }) => (
          <CardWrapper>
            <form onSubmit={handleSubmit}>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <InputField
                      {...input}
                      helperText={meta.touched ? meta.error : undefined}
                      error={meta.error && meta.touched}
                      label="E-mail"
                      autoComplete="email"
                      margin="normal"
                    />
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <InputField
                      {...input}
                      helperText={meta.touched ? meta.error : undefined}
                      error={meta.error && meta.touched}
                      label="Password"
                      autoComplete="password"
                      margin="normal"
                    />
                  </div>
                )}
              </Field>
              {this.props.user.error}
              <OrderButton type="submit">
                <div> Войти</div>
              </OrderButton>
            </form>
          </CardWrapper>
        )}
      </Form>
    )
  }
}

export const LoginContainer = connect(mapStateToProps)(Login)
