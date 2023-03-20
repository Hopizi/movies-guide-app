import React from 'react'
import "../styles/TvShowsCard.css"
import Right from "../assets/Chevron-Right.svg"
import Image from "../assets/pexels-eberhard-grossgasteiger-3389536.jpg"
import Star from "../assets/Star Fill.svg"
import {Link} from "react-router-dom"

function TvShowsCard(props) {

    const posterPath = (poster => {
        return `https://image.tmdb.org/t/p/w1280${poster}`
    })

    function yearRemove (string) {
    const year = string.substr(0,4);
    return year;
  }

  return (
    <Link to={`/tvshows/${props.id}`}>
      <div className='tv-shows'>
        <div className='card-img-container'>
            <img className='no-radius' src={posterPath(props.poster_path)}/>
        </div>
        <div className='card-description-tv'>
        <h1 className='title'>{props.original_name}</h1>
        <p className='movie-year'>{yearRemove(props.first_air_date)}</p>
        </div>
    </div>
    </Link>
  )
}

export default TvShowsCard