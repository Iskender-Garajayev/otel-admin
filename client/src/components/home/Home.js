import React from 'react'
import './home.css'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'


const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="containet">
          <div className="home-card">
            <div className="home-accaunt-card">
              <h1>amount</h1>
              <span>icon</span>
            </div>
            <div className="home-accaunt-card">
              <h1>amount</h1>
              <span>icon</span>
            </div>
            <div className="home-accaunt-card">
              <h1>amount</h1>
              <span>icon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home