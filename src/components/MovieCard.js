import React from 'react'
import Right from "../assets/Chevron-Right.svg"
import Image from "../assets/pexels-eberhard-grossgasteiger-3389536.jpg"
import Star from "../assets/Star Fill.svg"
import "../styles/MovieCard.css"
import {Link} from "react-router-dom"

function MovieCard(props) {
    const posterPath = (poster => {
        return `https://image.tmdb.org/t/p/w1280${poster}`
    })

  function yearRemove (string) {
    const year = string.substr(0,4);
    return year;
  }

  
  return (
    <Link to={`/movies/${props.id}`}>
      <div className='movie-card'>
        <div className='card-img-container hover-effect'>
            <img className='movie-img' src={posterPath(props.poster_path)}/>
        </div>
        <div className='card-description'>
        <h1>{props.title}</h1>
        <p className='movie-year'>{yearRemove(props.release_date)}</p>
        </div>
      </div>
    </Link>
    
  )
}

export default MovieCard