import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  TOKEN_NOT_FOUND,
  USER_POSTS_SUCCESS,
  USER_POSTS_ERROR
} from '../types/profile'
import axios from 'axios'


export const getUserProfile = (history) => {
  return (dispatch) => {
    axios.get('/user/profile')
      .then(res => {
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        localStorage.removeItem('x-user-token')
        dispatch({
          type: GET_PROFILE_ERROR,
          payload: err.response.data
        })
        // window.location = '/'
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


export const tokenNotFound = (history) => {
  return (dispatch) => {
    dispatch({
      type: TOKEN_NOT_FOUND
    })
  }
}
