import React from 'react'
import Logo from "../assets/Animate2.svg"
import Home from "../assets/Home.svg"
import Movie from "../assets/Movie.svg"
import TV from "../assets/TV.svg"
import StarStroke from "../assets/Star Stroke.svg"
import "../styles/SideBar.css"
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <nav>
      <ul className='sidebar-list'>
            <li>
              <Link to="/" className='logo'>
                <img src={Logo}/>
                <span className='logo-text'>Movie App</span>
              </Link>
            </li>
            <li>
              <Link to="/" className='link'><img src={Home} className='icon'/>
            <span className='nav-item'>Home</span>
            </Link >
            </li>
            <li>
              <Link to="/movies" className='link'><img src={Movie} className='icon'/>
            <span className='nav-item'>Movies</span>
            </Link>
            </li>
            <li>
              <Link to="/tvshows" className='link'><img src={TV} className='icon'/>
            <span className='nav-item'>TvShows</span>
            </Link>
            </li>
        </ul>
    </nav>
  )
}

export default SideBar