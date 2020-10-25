import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from '../types/user'
import axios from 'axios'


export const fetchUsersRequest = () => {
  return{
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = data => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data
  }
}

export const fetchUsersError = error => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  }
}


export const getUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios.get('/user')
      .then(res => {
        dispatch(fetchUsersSuccess(res.data))
      })
      .catch(err => {
        if(err.response && err.response.data){
          dispatch(fetchUsersError(err.response.data))
        }
      })
  }
}
