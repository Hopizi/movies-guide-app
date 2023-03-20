import React, {useEffect, useState} from 'react'
import RecomendedCard from './RecomendedCard'
import axios from 'axios'
import "../styles/Recomended.css"


function Recomended(props) {

  const [topMovies, setTopMovies] = useState([])

    const posterPath = (poster => {
        return `https://image.tmdb.org/t/p/w1280${poster}`
    })

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1").then(response => {
        setTopMovies(response.data.results)
        }).catch(err => console.log(err))
    },[])

    const theMovies = topMovies.map(movie => ({title: movie.original_title, description: movie.overview, imgPath: posterPath(movie.poster_path), id: movie.id}))


  return (
    <div className='recomended'>
      <RecomendedCard slides = {theMovies}/>
    </div>
  )
}

export default Recomended