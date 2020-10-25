import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR
} from '../types/createPost'

const initialState = {
  loading: false,
  data: null,
  error: null,
  success: null
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return{
        ...state,
        loading: true,
        success: null
      }
    case CREATE_POST_SUCCESS:
      return{
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        success: 'Post created successfully.'
      }
    case CREATE_POST_ERROR:
      return{
        loading: false,
        data: null,
        error: action.payload,
        success: null
      }
    default:
      return state
  }
}


export default reducer
