import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_ERROR,
  PAGINATION_REQUEST,
  PAGINATION_SUCCESS,
  PAGINATION_ERROR,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_CLEAR
} from '../types/posts'

const initialState = {
  loading: false,
  data: null,
  error: null,
  search:{
    loading: false,
    query: '',
    data: null,
    limit: 20,
    page: 1
  },
  pagination:{
    loading: false,
    limit: 0,
    page: 0
  }
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
        data: action.payload.data,
        pagination:{
          ...state.pagination,
          limit: action.payload.limit,
          page: action.payload.page
        },
        error: null
      }
    case POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case PAGINATION_REQUEST:
      return {
        ...state,
        pagination:{
          ...state.pagination,
          loading: true
        }
      }
    case PAGINATION_SUCCESS:
      return {
        ...state,
        data: action.payload.data.length !== 0 ? action.payload.data: state.data,
        pagination:{
          ...state.pagination,
          loading: false,
          limit: action.payload.data.length !== 0 ? action.payload.limit: state.pagination.limit,
          page: action.payload.data.length !== 0 ? action.payload.page: state.pagination.page
        }
      }
    case PAGINATION_ERROR:
      return {
        ...state,
        pagination:{
          ...state.pagination,
          loading: false
        }
      }
    case SEARCH_REQUEST:
      return {
        ...state,
        search:{
          ...state.search,
          loading: true
        }
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        search:{
          ...state.search,
          loading: false,
          data: action.payload.data,
          query: action.payload.query,
          limit: action.payload.limit,
          page: action.payload.page
        }
      }
    case SEARCH_ERROR:
      return {
        ...state,
        search:{
          ...state.search,
          loading: false,
          data: null
        }
      }
    case SEARCH_CLEAR:
      return {
        ...state,
        search:{
          ...state.search,
          loading: false,
          data: null
        }
      }
    default:
      return state
  }
}

export default reducer
