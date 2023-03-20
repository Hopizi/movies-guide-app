import React from 'react'
import Image from "../assets/pexels-eberhard-grossgasteiger-3389536.jpg"
import "../styles/TvShowsSearchCard.css"
import {Link} from "react-router-dom"

function TvShowsSearchCard(props) {

    const posterPath = (poster => {
        return `https://image.tmdb.org/t/p/w1280${poster}`
    })

    function yearRemove (string) {
    const year = string.substr(0,4);
    return year;
  }

  return (
    <Link to={`/tvshows/${props.id}`} className='tv-link'>
        <div className='tv-shows-search-container'>
            <div className='img-container-tv-shows'>
                <img className='tv-shows-search-img' src={posterPath(props.poster_path)}/>
            </div>
            <div className='tv-shows-search-description'>
                <h1>{props.original_name}</h1>
                <p>{yearRemove(props.first_air_date)}</p>
            </div>
        </div>
    </Link>
  )
}

export default TvShowsSearchCard