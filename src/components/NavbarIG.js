import React from 'react'
import Profile from "../assets/Account.svg"
import Settings from "../assets/Settings.svg"
import "../styles/NavbarIG.css"
import { Link } from 'react-router-dom'

function NavbarIG() {
  return (
    <div className='navbarig'>
        <Link to="/sign-in"><img className='nav-icon' src={Profile}/></Link>
        <a><img className='nav-icon' src={Settings}/></a>
    </div>
  )
}

export default NavbarIG