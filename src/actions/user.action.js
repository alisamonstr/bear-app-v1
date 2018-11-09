import { push } from 'react-router-redux'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'


export const login = (email, password) => (dispatch) => {
  fetch('https://hzc02srkq7.execute-api.eu-central-1.amazonaws.com/prod/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(res => res.json())
    .then((json) => {
      if (json.token) {
        dispatch({ type: LOGIN_SUCCESS, payload: json })
        return dispatch(push('/admin'))
      }
      return dispatch({ type: LOGIN_ERROR, payload: json })
    })
}

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT })
  return dispatch(push('/login'))
}
