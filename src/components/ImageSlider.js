import React, { useEffect,useState } from 'react'

function ImageSlider({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        width: "100%",
        height: "100%",
        position: "relative"
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPostion: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].imgPath})`
    }

    const leftArrrowStyles = {
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
      left: "32px",
      fontSize: "45px",
      color: "#fff",
      zIndex: "1",
      cursor: "pointer",
    }

    const rightArrrowStyles = {
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
      right: "32px",
      fontSize: "45px",
      color: "#fff",
      zIndex: "1",
      cursor: "pointer",
    }

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1 ;
      setCurrentIndex(newIndex)
    }

    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex)
    }

    const dotsContainerStyles = {
      display: "flex",
      justifyContent: "center",
    }

    const dotStyles = {
      margin: "0 3px",
      cursor: "pointer",
      fontSize: "80px",
    }

    const goToSlide = slideIndex => {
      setCurrentIndex(slideIndex)
    }

  return (
    <div style={sliderStyles}>
        <div style={leftArrrowStyles} onClick={goToPrevious}>
          &21E6;
        </div>
        <div style={rightArrrowStyles} onClick={goToNext}>
          &21E6;
        </div>
        <div style={slideStyles}></div>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div 
            style={dotStyles} 
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            >
            ·</div>
          ))}
        </div>
    </div>
  )
}

export default ImageSlider