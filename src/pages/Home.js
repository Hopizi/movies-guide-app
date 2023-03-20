import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import Right from "../assets/Chevron-Right.svg"
import Recomended from '../components/Recomended'
import SideBar from '../components/SideBar'
import NavbarIG from '../components/NavbarIG'
import Scroll from '../components/Scroll'
import MovieCard from '../components/MovieCard'
import TvShowsCard from '../components/TvShowsCard'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import "../styles/Home.css"
import { Helmet } from 'react-helmet'

function Home() {

    const [RecomendedList, setRecomendedList] = useState([]);
    const [TvShows, setTVShow] = useState([]);

    useEffect (() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1").then(response => {
            setRecomendedList(response.data.results)
        }).catch(err => console.log(err))
    }, [])

    useEffect (() => {
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1").then(response => {
            setTVShow(response.data.results)
        }).catch(err => console.log(err))
    })



  return (
    <div className='home'>
        <Helmet>
            <title>
                Movies Guide App
            </title>
        </Helmet>
        <Recomended />
        <SideBar />
        <NavbarIG />
        <Scroll />
        <div className='divider'>
            <h2>New Releases <span><img src={Right}/></span></h2>
        </div>
        <div className='new-releases'>
            {
                RecomendedList.map((list, index) => {
                    return <MovieCard key={index} {...list}/>
                })
            }
        </div>
        <div className='divider'>
            <h2>Featured Tv Shows <span><img src={Right}/></span></h2>
        </div>
        <div className='f-tv-shows'>
            {
                TvShows.map((show, index) => {
                    return <TvShowsCard key={index} {...show}/>
                })
            }
            <img className='right next' src={Right}/>
        </div>
        <Footer />
        {/* <Slider /> */}
    </div>
  )
}

export default Home