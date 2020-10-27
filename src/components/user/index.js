import React,{ useEffect } from 'react'
import Layout from '../layout'
import { connect } from 'react-redux'
import { getUser } from '../../store/actions/user'
import ProfileInfo from './ProfileInfo'
import Posts from './Posts'

const User = ({ user:{ loading, data }, isAdmin, getUser, match }) => {
  useEffect(() => { getUser(match.params.id) },[])

  return(
    <Layout>
      <div className="row mx-0 justify-content-center">
        <div className="user-info col-md-8 shadow-md my-5 p-3" style={{minHeight: '4rem'}}>
          {data && <ProfileInfo {...data} />}
        </div>
        <Posts />
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile.data,
    isAdmin: state.profile.data.role === 1
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: (id) => dispatch(getUser(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)
