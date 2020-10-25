import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR
} from '../types/createPost'
import axios from 'axios'

export const createPost = (arg) => {
  return dispatch => {
    dispatch({
      type: CREATE_POST_REQUEST
    })
    axios.post('/post/create',arg.values)
      .then(res => {
        arg.resetForm()
        dispatch({
          type: CREATE_POST_SUCCESS,
          payload: res.data
        })
      })
      .catche(err => {
        if(err.response && err.response.status === 400){
          arg.setErrors({...err.response.data})
          dispatch({
            type: CREATE_POST_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}
