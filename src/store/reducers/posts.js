import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_ERROR
} from '../types/posts'

const initialState = {
  loading: false,
  data: null,
  error: null
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer
