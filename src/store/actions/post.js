import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_ERROR,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR
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


export const getComments = (postId) => {
  return dispatch => {
    dispatch({
      type: GET_COMMENT_REQUEST
    })
    axios.get(`/post/${postId}/comments`)
      .then(res => {
        dispatch({
          type: GET_COMMENT_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        if(err.response){
          dispatch({
            type: GET_COMMENT_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}

export const createComment = ({ postId, body, resetForm }) => {
  return dispatch => {
    dispatch({
      type: CREATE_COMMENT_REQUEST
    })
    axios.post(`/comment/${postId}/create`,{ body })
      .then(res => {
        console.log(res.data);
        resetForm()
        dispatch({
          type: CREATE_COMMENT_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        if(err.response && err.response.status === 400){
          dispatch({
            type: CREATE_COMMENT_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}
