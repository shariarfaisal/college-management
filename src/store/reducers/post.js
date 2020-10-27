import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_ERROR,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR
} from '../types/post'

const initialState = {
  loading: false,
  data: null,
  error: null,
  comments:{
    loading: true,
    data: null,
    error: null
  },
  createComment:{
    loading: false,
    error: null
  }
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_COMMENT_REQUEST:
      return {
        ...state,
        comments:{
          ...state.comment,
          loading: true
        }
      }
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comments:{
          ...state.comment,
          loading: false,
          data: action.payload,
          error: null
        }
      }
    case GET_COMMENT_ERROR:
      return {
        ...state,
        comments:{
          ...state.comment,
          loading: false,
          data: null,
          error: action.payload
        }
      }
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        createComment:{
          ...state.createComment,
          loading: true
        }
      }
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments:{
          ...state.comments,
          data: [action.payload,...state.comments.data]
        },
        createComment:{
          loading: false,
          error: null
        }
      }
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        createComment:{
          loading: false,
          error: action.payload
        }
      }
    default:
      return state
  }
}

export default reducer
