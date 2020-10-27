import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_ERROR,
  PAGINATION_REQUEST,
  PAGINATION_SUCCESS,
  PAGINATION_ERROR,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../types/posts'
import axios from 'axios'

export const getPosts = ({ limit, page }) => {
  return dispatch => {
    dispatch({
      type: POSTS_REQUEST
    })
    axios.get(`/post?limit=${limit}&page=${page}`)
      .then(res => {
        dispatch({
          type: POSTS_SUCCESS,
          payload:{
            limit,
            page,
            data: res.data
          }
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

export const getPaginate = ({ limit, page }) => {
  return dispatch => {
    dispatch({ type: PAGINATION_REQUEST })
    axios.get(`/post?limit=${limit}&page=${page}`)
      .then(res => {
        dispatch({
          type: PAGINATION_SUCCESS,
          payload:{
            limit,
            page,
            data: res.data
          }
        })
      })
      .catch(err => {
        if(err.response){
          dispatch({
            type: PAGINATION_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}

export const getSearch = ({ search, limit, page }) => {
  return dispatch => {
    dispatch({ type: SEARCH_REQUEST })
    axios.get(`/post?search=${search}&limit=${limit}&page=${page}`)
      .then(res => {
        dispatch({
          type: SEARCH_SUCCESS,
          payload:{
            query: search,
            data: res.data,
            limit,
            page 
          }
        })
      })
      .catch(err => {
        if(err.response){
          dispatch({
            type: SEARCH_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}
