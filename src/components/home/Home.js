import React from 'react'
import Layout from '../Layout'
import Posts from './Posts'
import Post from './Post'


import './home.scss'

const Home = (props) => {
  return(
    <Layout>
      <Posts />
    </Layout>
  )
}
export default Home
