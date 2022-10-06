import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Personal = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
      <Navbar/>
      <div className="containet">
        Personal 
      </div>
    </div>
  </div>
  )
}

export default Personal