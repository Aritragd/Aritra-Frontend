import React from 'react'
import './Home.css'
import avatar from '../../assets/images/avatar.png'
import useIntersectionObserver from '../../utils/IntersectionObserver'

const Home = () => {

  useIntersectionObserver()

  return (
    <div className='home'>
      <div className="container hidden">
        <div className="home-grid-container">
          <div className="left-grid grid-item">
            <h1>Hi</h1>
            <p>Aritra Ghosh Dastidar</p>
          </div>
          <div className="right-grid grid-item home-image">
            <div className="circle-bg"></div>
            <img className="avatar-image" src={avatar} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home