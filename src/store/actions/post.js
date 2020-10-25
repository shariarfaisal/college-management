import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_ERROR
} from '../types/post'
import axios from 'axios'

export const getPost = (id) => {
  return dispatch => {
    dispatch({
      type: POST_REQUEST
    })
    axios.get(`/post/${id}`)
      .then(res => {
        dispatch({
          type: POST_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        if(err.response && err.response.data){
          dispatch({
            type: POST_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}
