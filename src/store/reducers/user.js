import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  USER_POSTS_SUCCESS,
  USER_POSTS_ERROR
} from '../types/user'

const initialState = {
  loading: false,
  data: null,
  error: null,
  posts: {
    loading: true,
    data: null,
    error: null
  }
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload
      }
      case USER_POSTS_SUCCESS:
        return {
          ...state,
          posts:{
            loading: false,
            data: action.payload,
            error: null
          }
        }
      case USER_POSTS_ERROR:
        return {
          ...state,
          posts:{
            loading: false,
            data: null,
            error: action.payload
          }
        }
    default:
      return state
  }
}

export default reducer
