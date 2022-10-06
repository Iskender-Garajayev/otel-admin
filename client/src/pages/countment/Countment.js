import React from 'react'
import './countment.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const countment = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
      <Navbar/>
      <div className="containet">
        Accounting 
      </div>
    </div>
  </div>
  )
}

export default countment