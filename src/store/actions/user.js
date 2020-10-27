import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  USER_POSTS_SUCCESS,
  USER_POSTS_ERROR
} from '../types/user'
import axios from 'axios'

export const getUser = (profileId) => {
  return dispatch => {
    dispatch({
      type: GET_USER_REQUEST
    })
    axios.get(`/user/${profileId}/profile`)
      .then(res => {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        if(err.response && err.response.status === 404){
          dispatch({
            type: GET_USER_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}


export const getPosts = (id) => {
  return dispatch => {
    axios.get(`/post/${id}/user`)
      .then(res => {
        dispatch({
          type: USER_POSTS_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        if(err.response){
          dispatch({
            type: USER_POSTS_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}
