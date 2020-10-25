import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../types/login'

const initialState = {
  loading: false,
  accessToken: null,
  error: null,
  success: null
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        accessToken: action.payload,
        success: 'Login successfull!'
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        success: null,
        error: action.payload
      }
    default:
      return state

  }
}

export default reducer
