import { useState } from "react"
import {
  ImageList,
  Image,
  NextBtn,
  PrevBtn,
  Slider,
  SliderContainer,
} from "./ImageSlider.styled"
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa"

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <SliderContainer>
      <Slider>
        <PrevBtn onClick={goToPrevious}>
          <FaRegArrowAltCircleLeft />
        </PrevBtn>
        <Image
          src={slides[currentIndex].url}
          alt={slides[currentIndex].title}
        />
        <NextBtn onClick={goToNext}>
          <FaRegArrowAltCircleRight />
        </NextBtn>
      </Slider>
      <ImageList>
        {slides.map((slide, index) => {
          return (
            <li key={index}>
              <button onClick={() => goToSlide(index)}>
                <img src={slide.url} alt={slide.title} />
              </button>
            </li>
          )
        })}
      </ImageList>
    </SliderContainer>
  )
}

export default ImageSlider
