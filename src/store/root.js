import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools  } from 'redux-devtools-extension'
import usersReducer from './reducers/users'
import userReducer from './reducers/user'
import loginReducer from './reducers/login'
import signupReducer from './reducers/signup'
import profileReducer from './reducers/profile'
import postsReducer from './reducers/posts'
import postReducer from './reducers/post'
import createPostReducer from './reducers/createPost'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    users: usersReducer,
    user: userReducer,
    profile: profileReducer,
    login: loginReducer,
    signup: signupReducer,
    posts: postsReducer,
    post: postReducer,
    createPost: createPostReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
