import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  CHECK_USERNAME
} from '../types/signup'


const initialState = {
  loading: false,
  data: null,
  error: null,
  success: null,
  usernameExists: null
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        success: null
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        success: 'Account created successfully.'
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload
      }
    case CHECK_USERNAME:
      return {
        ...state,
        usernameExists: action.payload
      }
    default:
      return state
  }
}

export default reducer
