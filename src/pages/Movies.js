import React from 'react'
import { useEffect, useState } from 'react'
import "../styles/Movies.css"
import MoviesSearchCard from '../components/MoviesSearchCard'
import axios from 'axios'
import {Helmet} from "react-helmet"

function Movies() {

    const [movieSearch, setMovieSearch] = useState("")

    const [searchResults, setSearchResult] = useState([]);

    useEffect(() => {
        if (movieSearch) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&query=${movieSearch}&page=1&include_adult=false`).then(response => {
            setSearchResult(response.data.results)
        }).catch(err => {
            console.log(err)
        })
        }
    }, [movieSearch])

    const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        setMovieSearch(event.target.value);
        setMovieSearch("");
    }
};

const pageTitle = "Search | Movies"

  return (
    <div className='movie-container'>
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
        <div className='search-container'>
        <input 
        className='movie-search' 
        type="text" 
        value={movieSearch} 
        onChange={e => setMovieSearch(e.target.value)}
        placeholder="Search Movies..."
        onKeyPress={handleKeyPress}
        />
        </div>
        <div className='searched-movies'>
            {
                searchResults.map((movie, index) => {
                    return <MoviesSearchCard key={index} {...movie}/>
                })
            }            
        </div>
    </div>
  )
}

export default Movies