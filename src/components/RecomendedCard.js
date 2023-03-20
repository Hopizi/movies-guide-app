import React, {useEffect, useRef, useState} from 'react'
import Star from "../assets/Star Fill.svg"
import "../styles/RecomendedCard.css"
import RightNext from "../assets/Chevron-Right.svg"
import LeftPrev from "../assets/Chevron-Left.svg"
import {Link} from "react-router-dom"

function RecomendedCard({slides}) {

  const [currentIndex, setCurrentIndex] = useState(2);
  const timeRef = useRef(null)

  function goToPrev() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 ;
    setCurrentIndex(newIndex)
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1 ;
    const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      goToNext()
    }, 5000)
  },[currentIndex])


  return (
    <div className='slider-container'>
      <div className='saviour-image-container'>
        {slides.length > 0 && <img src={slides[currentIndex].imgPath} />}
      </div>
      <img 
      className='prev-btn' 
      src={LeftPrev} 
      onClick= {goToPrev}
      />
      <img 
      className='next-btn' 
      src={RightNext} 
      onClick= {goToNext}
      />
      <div className='recomended-description'>
        <h1>{slides.length > 0 && slides[currentIndex].title}</h1>
        <p>{slides.length > 0 && slides[currentIndex].description}</p>
        <Link to={`/movies/${slides.length > 0 && slides[currentIndex].id}`}><button>Watch Now</button></Link>
      </div>
    </div>
  )
}

export default RecomendedCard