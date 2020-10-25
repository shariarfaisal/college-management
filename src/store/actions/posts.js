import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_ERROR
} from '../types/posts'
import axios from 'axios'

export const getPosts = () => {
  return dispatch => {
    dispatch({
      type: POSTS_REQUEST
    })
    axios.get('/post')
      .then(res => {
        dispatch({
          type: POSTS_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        if(err.response){
          dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}
