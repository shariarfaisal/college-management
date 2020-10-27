import React from 'react'
import Layout from '../layout'
import './style.scss'
import { connect } from 'react-redux'
import { getUserProfile } from '../../store/actions/profile'
import ProfileInfo from './ProfileInfo'

function Profile({ profile }) {
  return(
    <Layout>
      <div className="row mx-0 justify-content-center">
        <div className="col-11 col-sm-10 col-md-8 profile-content">
          {profile.data && <ProfileInfo {...profile.data} />}
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (history) => dispatch(getUserProfile(history))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
