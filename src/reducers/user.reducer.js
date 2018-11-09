import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actions'

const itemsDefaultState = { token: '', loading: false, error: '' }

export default function (state = itemsDefaultState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        token: action.payload.token,
        loading: false,
        error: '',
      }
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: 'Login failed',
      }
    }
    case LOGOUT: {
      return {
        ...state,
        token: '',
        loading: false,
      }
    }
    default:
      return state
  }
}
