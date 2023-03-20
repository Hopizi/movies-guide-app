import React from 'react'
import TvShowsSearchCard from '../components/TvShowsSearchCard'
import { useEffect, useState} from 'react';
import axios from 'axios';
import "../styles/TvShows.css"
import {Helmet} from "react-helmet"

function TvShows() {

    const [tvShowsSearch, setTvShowsSearch] = useState("")

    const [searchResults, setSearchResult] = useState([]);

    useEffect(() => {
        if (tvShowsSearch) {
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&query=${tvShowsSearch}&page=1&include_adult=false`).then(response => {
            setSearchResult(response.data.results)
        }).catch(err => {
            console.log(err)
        })
        }
    }, [tvShowsSearch])

    const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        setTvShowsSearch(event.target.value);
        setTvShowsSearch("");
    }
};


  return (
    <div className='tv-shows-container'>
        <Helmet>
            <title>Search | Tv Shows</title>
        </Helmet>
        <div className='search-container'>
        <input 
        className='tv-shows-search' 
        type="text" 
        value={tvShowsSearch} 
        onChange={e => setTvShowsSearch(e.target.value)}
        placeholder="Search Tv Shows..."
        onKeyPress={handleKeyPress}
        />
        </div>
        <div className='searched-tv-shows'>
            {
                searchResults.map((tvShows, index) => {
                    return <TvShowsSearchCard key={index} {...tvShows}/>  
                })
            }        
        </div>
    </div>
  )
}

export default TvShows