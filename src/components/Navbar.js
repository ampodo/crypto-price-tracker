import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
      <Link to='/'>
       <div className='navbar'>
           <img className="twins" alt="" src={process.env.PUBLIC_URL + '/icons/twins.png'}/>
           <h1 className='head'>Coin Tracker</h1>
       </div>
       </Link>
  )
}

export default Navbar
