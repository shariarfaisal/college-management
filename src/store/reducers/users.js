import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../types/users'


const initialState = {
  loading: false,
  users: null,
  errors: null,
  profile: {
    loading: true,
    data: null,
    error: null
  }
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }

    default:
      return state
  }
}

export default reducer
