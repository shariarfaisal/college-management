import React from 'react'
import Layout from '../Layout'
import './style.scss'
import { connect } from 'react-redux'
import { getUserProfile } from '../../store/actions/profile'
import ProfileInfo from './ProfileInfo'

function Profile({ profile }) {
  return(
    <Layout>
      <div className="profile-content">
        {profile.data && <ProfileInfo {...profile.data} />}
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
