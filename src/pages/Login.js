import React from 'react'
import "../styles/Login.css"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import Image from "../assets/pexels-eberhard-grossgasteiger-3389536.jpg"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Google from "../assets/search.svg"
import Twitter from "../assets/twitter.svg"
import Logo from "../assets/Animate2.svg"
import { Link } from 'react-router-dom'
import Email from "@material-ui/icons/Email"
import {Helmet} from "react-helmet"

function Login() {

    const [loginDisplay, setLoginDisplay] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1").then(response => {
            setLoginDisplay(response.data.results)
        })
    },[])


    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % loginDisplay.length)
        }, 4000)
        console.log("Timer Started")

        return () => clearTimeout(timer)
        console.log("Timer Cleard")
    },[currentIndex, loginDisplay]);


    const posterPath = (poster => {
        return `https://image.tmdb.org/t/p/w1280${poster}`
    })

    const currentImage = loginDisplay[currentIndex];

    const pageTitle = "Login"

  return (
    <div className='login-container'>
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
        <div className='whole-container'>
            <div className='login-section'>
                <img className='login-logo' src={Logo}/>
                <h2>Log In</h2>
                <div className='actual-login-container'>
                    <div>
                    <input className='login-text email' type="text" placeholder='Email'/>
                    <input className='login-text password' type="text" placeholder='Password'/>
                </div>
                <div className='login-check'>
                    <a href='#'>Forgot Password ?</a>
                </div>
                <button className='login-button'>Log In</button>
                <p className='do-not-have-account'>Do Not Have An Account ? <Link to="/sign-up" className='link-style'>Create Account</Link></p>
                <p className='or'>or</p>
                <div className='login-icons'>
                    <div className='login-twitter-icon'>
                        <img src={Google}/>
                    </div>
                    <div className='login-twitter-facebook'>
                        <img src={Twitter}/>
                    </div>
                </div>
                </div>
            </div>
            <div className='login-img-container'>
                <div className='real-img-container'>
                    {loginDisplay.length > 0 && <img src={posterPath(currentImage.poster_path)}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login