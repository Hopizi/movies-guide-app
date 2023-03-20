import React from 'react'
import '../styles/SignUp.css'
import Google from "../assets/search.svg"
import Twitter from "../assets/twitter.svg"
import Logo from "../assets/Animate2.svg"
import {Helmet} from "react-helmet"
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='sign-up-container'>
        <Helmet>
            <title>Create Account</title>
        </Helmet>
            <div className='sign-up-section'>
                <Link to="/"><img className='sign-up-logo' src={Logo}/></Link>
                <h2>Create Account</h2>
                <form className='sign-up-form'>
                    <span>
                        <label for="f-name">First Name</label>
                        <input type="text" id="f-name" name="f-name"></input>
                    </span>
                    <span>
                        <label for="l-name">Last Name</label>
                        <input type="text" id="l-name" name="l-name"></input>
                    </span>
                    <span>
                        <label for="name">Username</label>
                        <input type="text" id="username" name="username"></input>
                    </span>
                    <span>
                        <label for="name">Email</label>
                        <input type="email" id="email" name="email"></input>
                    </span>
                    <span>
                        <label for="name">Password</label>
                        <input type="password" id="password" name="pasword"></input>
                    </span>
                    <span>
                        <label for="name">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password"></input>
                    </span>
                    <button>
                        Sign Up
                    </button>
                </form>
                <p>Sign Up With</p>
                <div className='sign-up-icons'>
                    <div className='sign-up-twitter-icon'>
                        <img src={Google}/>
                    </div>
                    <div className='sign-up-twitter-facebook'>
                        <img src={Twitter}/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SignUp