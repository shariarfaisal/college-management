import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  TOKEN_NOT_FOUND,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  SET_PAGINATION_LIMIT
} from '../types/profile'


const initialState = {
  loading: true,
  data: null,
  error: null,
  update:{
    loading: false,
    error: null
  },
  posts: {
    loading: false,
    data: null,
    error: null
  },
  filter:{
    published: '',
    date: '',
    search: ''
  },
  pagination:{
    limits: [5,10,20,30,40,50,75,100],
    limit: 5,
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
    case GET_POSTS_REQUEST:{
      const { posts, filter, pagination } = state
      const { published, date, search, page, limit } = action.payload
      return {
        ...state,
        posts:{
          ...posts,
          loading: true
        },
        filter: {
          ...filter,
          published,
          date,
          search
        },
        pagination:{
          ...pagination,
          page,
          limit
        }
      }
    }
    case GET_POSTS_SUCCESS:{
      const { posts, filter, pagination } = state
      const { data, published, date, search, page, limit } = action.payload

      return {
        ...state,
        posts:{
          ...posts,
          loading: false,
          data
        },
        filter:{
          ...filter,
          published,
          date,
          search
        },
        pagination:{
          ...pagination,
          page,
          limit,
          nextBtn: data.length === limit
        }
      }
    }
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts:{
          loading: false,
          data: null,
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
