import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_ERROR,
  PAGINATION_REQUEST,
  PAGINATION_SUCCESS,
  PAGINATION_ERROR,
  SET_PAGINATION_LIMIT,
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
    limit: 10,
    limits: [10,20,30,40,50,75,100],
    page: 1,
    nextBtn: true
  }
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case POSTS_SUCCESS:{
      const { data, limit, page } = action.payload
      return {
        ...state,
        loading: false,
        data,
        pagination:{
          ...state.pagination,
          limit,
          page
        },
        error: null
      }
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
    case PAGINATION_SUCCESS: {
      const { data, limit, page } = action.payload
      return {
        ...state,
        data: data.length !== 0 ? data: state.data,
        pagination:{
          ...state.pagination,
          loading: false,
          limit: data.length !== 0 ? limit: state.pagination.limit,
          page: data.length !== 0 ? page: state.pagination.page,
          nextBtn: data.length === limit
        }
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
    case SET_PAGINATION_LIMIT:
      return {
        ...state,
        pagination:{
          ...state.pagination,
          limit: action.payload
        }
      }
    default:
      return state
  }
}

export default reducer
