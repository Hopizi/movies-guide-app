import React, {useEffect, useState} from 'react'
import ImageSlider from './ImageSlider'
import axios from 'axios'

function Slider() {

    const [topMovies, setTopMovies] = useState([])

    const posterPath = (poster => {
        return `https://image.tmdb.org/t/p/w1280${poster}`
    })

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1").then(response => {
        setTopMovies(response.data.results)
        }).catch(err => console.log(err))
    },[])

    // useEffect(() => {
    //     const updatedList = topMovies.map(movie => {
    //         return {...movie, poster_path: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
    //     })
    //     setTopMovies(updatedList)
    // },[])

    const containerStyles = {
        width: "80%",
        height: "90vh",
        margin: "0 auto"
    }

    const theMovies = topMovies.map(movie => ({title: movie.original_title, description: movie.overview, imgPath: posterPath(movie.poster_path)}))

  return (
    <div>
        <div style={containerStyles}>
            <ImageSlider slides = {theMovies}/>
        </div>
    </div>
  )
}

export default Slider