import React,{ Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/home/Home'
import Profile from './components/profile'
import Login from './components/login'
import Signup from './components/signup'
import Post from './components/post/Post'
import MyPosts from './components/myPosts'
import CreatePost from './components/create-post/CreatePost'
import { getUserProfile, tokenNotFound } from './store/actions/profile'
import { connect } from 'react-redux'

const NotFound = (props) => (
  <div className="notfound">
    <div className="item">
      <div>404</div>
      <div>Not Found</div>
    </div>
  </div>
)

const App = ({ profile, getProfile, getLogin, history }) => {
  const token = localStorage.getItem('x-user-token')

  useEffect(() => {
    if(token){
      getProfile(history)
    }else{
      getLogin(history)
    }
  },[])

  return(
    <Router>
      {profile.loading && <div>loading....</div>}
      {!profile.loading && <Fragment>
        {!profile.data && <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <Route>
            <Redirect path="/"/>
          </Route>
        </Switch>}
        {profile.data && <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/post/create" exact component={CreatePost} />
          <Route path="/profile/posts" exact component={MyPosts} />
          <Route path="/post/:id" exact component={Post} />
          <Route component={NotFound} />
        </Switch>}
      </Fragment>}
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (history) => dispatch(getUserProfile(history)),
    getLogin: (history) => dispatch(tokenNotFound(history))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
