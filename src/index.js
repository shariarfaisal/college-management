import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/style.scss'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './store/root'

axios.defaults.baseURL = 'http://localhost:3000/'

const token = localStorage.getItem('x-user-token')
if(token){
  axios.defaults.headers['Authorization'] = token
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
);
