import React from 'react'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Star from "../assets/Star Fill.svg"
import RealStar from "@material-ui/icons/Star"
import {Helmet} from "react-helmet"
import "../styles/TvShowsInfo.css"

function MovieInfo() {

    const {id} = useParams()
    const [tvShowsInfo, setTvShowsInfo] = useState({})

    useEffect (() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`).then(response => {
            setTvShowsInfo(response.data)
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

    const pageTitle = tvShowsInfo.original_name

  return (
    <div className='tv-shows-main-info-container'>
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
        <div className='tv-shows-main-container'>
            <div className='tv-shows-img-watch-now-container'>
                <div className='tv-shows-img-watch-now'>
                    {tvShowsInfo && tvShowsInfo.poster_path && <img src={posterPath(tvShowsInfo.poster_path)}/>}
                </div>
                <button className='tv-shows-watch-now-container'><span>Watch Now</span></button>
            </div>
            <div className='tv-shows-info-container'>
                <div className='tv-shows-real-info'>
                    {tvShowsInfo && tvShowsInfo.original_name && <h1>{tvShowsInfo.original_name}</h1>}
                {tvShowsInfo.first_air_date && <h3>{yearRemove(tvShowsInfo.first_air_date)}</h3>}
                {tvShowsInfo && tvShowsInfo.genres && tvShowsInfo.genres[1]?.name && <h3 className='tv-shows-genre'>{tvShowsInfo.genres[1].name}</h3>}
                {tvShowsInfo.overview && <p className='tv-shows-description'>{tvShowsInfo.overview}</p>}
                    <div className='tv-shows-ratings'>
                        <img src={Star}/>     
                        {
                        tvShowsInfo && tvShowsInfo.vote_average ? <p>{ratings(tvShowsInfo.vote_average)}</p> : "N/A"
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieInfo