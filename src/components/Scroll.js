import React from 'react'
import Left from "../assets/Chevron-Left.svg"
import Right from "../assets/Chevron-Right.svg"
import "../styles/Scroll.css"

function Scroll() {
  return (
    <div className='scroll'>
        <img className='scroll-right' src={Right}/>
    </div>
  )
}

export default Scroll