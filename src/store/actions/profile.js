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

export const getPosts = ({
  published,
  date,
  profileId,
  limit,
  page
}) => {

  let url = `/post/${profileId}/user?`
  if(published === 'published'){
    url += 'published=true'
  }else if(published === 'unpublished'){
    url += 'published=false'
  }

  if(date && new Date(date).toString() !== "Invalid Date"){
    url += `&createdAt=${date.toISOString()}`
  }

  if(limit){
    url += `&limit=${limit}`
  }
  if(page){
    url += `&page=${page}`
  }

  return dispatch => {
    axios.get(url)
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

export const filterAction = ({
  published,
  date,
  profileId,
  limit,
  page
}) => {
  let url = `/post/${profileId}/user?`
  if(published === 'published'){
    url += 'published=true'
  }else if(published === 'unpublished'){
    url += 'published=false'
  }

  if(date && new Date(date).toString() !== "Invalid Date"){
    url += `&createdAt=${date.toISOString()}`
  }

  if(limit){
    url += `&limit=${limit}`
  }
  if(page){
    url += `&page=${page}`
  }

  return dispatch => {
    dispatch({
      type: SET_FILTER_REQUEST,
      payload:{
        published,
        date
      }
    })
    axios.get(url)
      .then(res => {
        dispatch({
          type: SET_FILTER_SUCCESS,
          payload:{
            data: res.data,
            published,
            date,
            limit,
            page
          }
        })

      })
      .catch(err => {
        if(err.response){
          dispatch({
            type: SET_FILTER_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}


export const setPaginationLimit = (limit) => {
  return dispatch => {
    dispatch({
      type: SET_PAGINATION_LIMIT,
      payload: limit
    })
  }
}
