import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../assets/images/hero1.png'
import hero2 from '../assets/images/hero2.jpg'
import hero3 from '../assets/images/hero3.jpg'
import hero4 from '../assets/images/hero4.jpg'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderWrapperRef = useRef(null)
  const autoSlideIntervalRef = useRef(null)

  const slides = [
    {
      id: 1,
      image: hero1,
      headline: 'The Art of Indulgence.',
      tagline: 'Step into a space where luxury meets tranquility.',
      ctaText: 'Reserve Your Spot',
      ctaLink: '#booking'
    },
    {
      id: 2,
      image: hero2,
      headline: 'Masterful Hair Styling.',
      tagline: 'Precision cuts and custom coloring for every identity.',
      ctaText: 'Explore Hair Services',
      ctaLink: '/services'
    },
    {
      id: 3,
      image: hero3,
      headline: 'Radiant Skin.',
      tagline: 'Advanced facials and targeted therapies for lasting health.',
      ctaText: 'View Skincare',
      ctaLink: '/services'
    },
    {
      id: 4,
      image: hero4,
      headline: 'Flawless Artistry.',
      tagline: 'Bespoke makeup for bridal, party, and editorial moments.',
      ctaText: 'Book Consultation',
      ctaLink: '#booking'
    }
  ]

  const totalSlides = slides.length

  const updateSlider = (newIndex) => {
    setCurrentSlide(newIndex)
  }

  const moveToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const moveToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleSlideClick = (e) => {
    // Prevent navigation if clicking on a button or a dot within the slide
    if (e.target.closest('.cta-button') || e.target.closest('.slider-dot')) {
      return
    }

    const rect = sliderWrapperRef.current?.getBoundingClientRect()
    if (!rect) return

    const clickX = e.clientX - rect.left
    const elementWidth = rect.width

    // Clear auto slide on manual interaction
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current)
    }

    if (clickX < elementWidth / 2) {
      // Clicked on the left half -> Previous slide
      moveToPrevSlide()
    } else {
      // Clicked on the right half -> Next slide
      moveToNextSlide()
    }

    // Reset interval
    autoSlideIntervalRef.current = setInterval(moveToNextSlide, 6000)
  }

  const handleDotClick = (index) => {
    updateSlider(index)
    // Reset interval on manual interaction
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current)
    }
    autoSlideIntervalRef.current = setInterval(moveToNextSlide, 6000)
  }

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    // Auto slide every 6 seconds
    autoSlideIntervalRef.current = setInterval(moveToNextSlide, 6000)

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current)
      }
    }
  }, [])

  return (
    <section id="home" className="hero-banners">
      <div className="slider-wrapper" ref={sliderWrapperRef} onClick={handleSlideClick}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1 className="main-headline">{slide.headline}</h1>
              <p className="tagline">{slide.tagline}</p>
              {slide.ctaLink.startsWith('#') ? (
                <a
                  href={slide.ctaLink}
                  className="cta-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    scrollToSection(slide.ctaLink)
                  }}
                >
                  {slide.ctaText}
                </a>
              ) : (
                <Link to={slide.ctaLink} className="cta-button" onClick={(e) => e.stopPropagation()}>
                  {slide.ctaText}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              handleDotClick(index)
            }}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
