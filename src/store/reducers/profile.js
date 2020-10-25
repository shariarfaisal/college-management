import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  TOKEN_NOT_FOUND,
  USER_POSTS_SUCCESS,
  USER_POSTS_ERROR
} from '../types/profile'


const initialState = {
  loading: true,
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
    case TOKEN_NOT_FOUND:
      return {
        ...state,
        loading: false
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case GET_PROFILE_ERROR:
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
