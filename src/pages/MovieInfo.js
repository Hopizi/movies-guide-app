import React from 'react'
import "../styles/MovieInfo.css"
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Star from "../assets/Star Fill.svg"
import {Helmet} from "react-helmet"

function MovieInfo() {

    const {id} = useParams()
    const [moviesInfo, setMoviesInfo] = useState({})

    useEffect (() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`).then(response => {
            setMoviesInfo(response.data)
        }).catch(err => console.log(err))
    }, [id])

    const posterPath = (poster => {
        return `https://image.tmdb.org/t/p/w1280${poster}`
    })

    function yearRemove (string) {
    const year = string.substr(0,4);
    return year;
  }

    function ratings (string) {
        const newRate = string.toString();
        return newRate.substr(0,3);
    }

    const pageTitle = moviesInfo.original_title

  return (
    <div className='movie-info-container'>
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
        <div className='main-container'>
            <div className='img-watch-now-container'>
                <div className='img-watch-now'>
                    {moviesInfo && moviesInfo.poster_path && <img src={posterPath(moviesInfo.poster_path)}/>}
                </div>
                <button className='watch-now-container'><span>Watch Now</span></button>
            </div>
            <div className='info-container'>
                <div className='real-info'>
                    {moviesInfo && moviesInfo.original_title && <h1>{moviesInfo.original_title}</h1>}
                {moviesInfo.release_date && <h3>{yearRemove(moviesInfo.release_date)}</h3>}
                {moviesInfo && moviesInfo.genres && moviesInfo.genres[1]?.name && <h3 className='genre'>{moviesInfo.genres[1].name}</h3>}
                {moviesInfo.overview && <p className='description'>{moviesInfo.overview}</p>}
                <div className='ratings'>
                        <img src={Star}/>     
                        {
                        moviesInfo && moviesInfo.vote_average ? <p>{ratings(moviesInfo.vote_average)}</p> : "N/A"
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieInfo