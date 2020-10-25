import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  CHECK_USERNAME
} from '../types/signup'
import axios from 'axios'

export const getSignup = ({ values, setErrors, resetForm}) => {
  return dispatch => {
    dispatch({ type: SIGNUP_REQUEST })
    axios.post('/user/signup',values)
      .then(res => {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data
        })
        resetForm()
      })
      .catch(err => {
        if(err.response && err.response.status && err.response.status === 400){

          setErrors({...err.response.data})

          dispatch({
            type: SIGNUP_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}

export const checkUsername = (arg) => {
  return dispatch => {
    axios.get(`/user/${arg}/check-username`)
      .then(res => {
        dispatch({
          type: CHECK_USERNAME,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}
