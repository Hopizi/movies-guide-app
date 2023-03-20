import React from 'react'
import Image from "../assets/pexels-eberhard-grossgasteiger-3389536.jpg"
import "../styles/MoviesSearchCard.css"
import {Link} from "react-router-dom"

function MoviesSearchCard(props) {

    const posterPath = (poster => {
        return `https://image.tmdb.org/t/p/w1280${poster}`
    })

    function yearRemove (string) {
    const year = string.substr(0,4);
    return year;
  }

  return (
    <Link to={`/movies/${props.id}`} className='m-s-link'>
        <div className='movies-search-container'>
            <div className='img-container-movies'>
                <img className='movie-search-img' src={posterPath(props.poster_path)}/>
            </div>
            <div className='movies-search-description'>
                <h1>{props.title}</h1>
                <p>{yearRemove(props.release_date)}</p>
            </div>
        </div>
    </Link>
  )
}

export default MoviesSearchCard