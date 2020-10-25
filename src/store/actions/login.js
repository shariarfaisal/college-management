import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../types/login'
import axios from 'axios'

export const getLogin = (data) => {
  return (dispatch) => {
    dispatch({type: LOGIN_REQUEST })
    axios.post('/user/signin',data)
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.accessToken
        })
        localStorage.setItem('x-user-token','Bearer '+res.data.accessToken)
        setTimeout(() => {
          window.location = '/'
        },1000)
      })
      .catch(err => {
        console.log(err.response);
        if(err.response.status === 400){
          dispatch({
            type: LOGIN_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}
