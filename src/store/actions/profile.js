import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  TOKEN_NOT_FOUND,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
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

export const profileUpdateAction = ({
  values
}) => {
  return dispatch => {
    
  }
}

export const getPostsAction = ({
  profileId,
  published,
  date,
  limit,
  page,
  search
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
  if(search){
    url += `&search=${search}`
  }

  return dispatch => {
    dispatch({
      type: GET_POSTS_REQUEST,
      payload:{
        published,
        date,
        search,
        limit,
        page
      }
    })
    axios.get(url)
      .then(res => {
        dispatch({
          type: GET_POSTS_SUCCESS,
          payload:{
            data: res.data,
            published,
            date,
            search,
            limit,
            page
          }
        })
      })
      .catch(err => {
        if(err.response){
          dispatch({
            type: GET_POSTS_ERROR,
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


export const setPaginationLimit = (limit) => {
  return dispatch => {
    dispatch({
      type: SET_PAGINATION_LIMIT,
      payload: limit
    })
  }
}
