import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  TOKEN_NOT_FOUND,
  USER_POSTS_SUCCESS,
  USER_POSTS_ERROR,
  SET_FILTER_REQUEST,
  SET_FILTER_SUCCESS,
  SET_FILTER_ERROR,
  SET_PAGINATION_LIMIT
} from '../types/profile'


const initialState = {
  loading: true,
  data: null,
  error: null,
  posts: {
    loading: true,
    data: null,
    error: null
  },
  filter:{
    loading: false,
    published: '',
    date: '',
    error: null
  },
  search:{
    loading: false,
    query: '',
    data: null,
    limit: 20,
    page: 1
  },
  pagination:{
    loading: false,
    limit: 5,
    limits: [5,10,20,30,40,50,75,100],
    page: 1,
    nextBtn: true
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
    case SET_FILTER_REQUEST:
      return {
        ...state,
        filter:{
          ...state.filter,
          loading: true,
          published: action.payload.published,
          date: action.payload.date
        }
      }
    case SET_FILTER_SUCCESS:
      const { data, published, date, limit, page } = action.payload
      return {
        ...state,
        posts:{
          ...state.posts,
          data
        },
        filter:{
          ...state.filter,
          loading: false,
          published,
          date
        },
        pagination:{
          ...state.pagination,
          limit,
          page
        }
      }
    case SET_FILTER_ERROR:
      return {
        ...state,
        filter:{
          ...state.filter,
          loading: false,
          error: action.payload
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
