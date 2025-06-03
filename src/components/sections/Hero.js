import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

/**
 * Hero component with carousel functionality
 * @returns {JSX.Element} Hero section with carousel
 */
const Hero = () => {
  // Carousel configuration
  const CAROUSEL_CONFIG = {
    slideInterval: 4000, // Auto-slide interval in milliseconds (4 seconds)
    animationDuration: {
      default: 600, // Default animation duration 
      mobile: 500    // Mobile animation duration
    }
  };
  
  // State for carousel
  const [currentImage, setCurrentImage] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState("next");
  const [timerProgress, setTimerProgress] = useState(0);
  
  // Reference for the slide timer
  const slideTimerRef = useRef(null);
  
  // Carousel slides data with images and content
  const carouselSlides = [
    {
      src: "/images/hero.jpg",
      alt: "Students in a classroom in Tanzania",
      title: "Creating sustainable change in Tanzania",
      description: "We work with local communities to develop solutions that address the root causes of poverty and create lasting positive change.",
      primaryButton: {
        text: "Donate Now",
        link: "/donate"
      },
      secondaryButton: {
        text: "Learn More",
        link: "/our-work"
      }
    },
    {
      src: "/images/hero-2.jpg", 
      alt: "Community project in Tanzania",
      title: "Empowering local communities",
      description: "Our projects focus on education, healthcare, and sustainable development to create opportunities for vulnerable communities.",
      primaryButton: {
        text: "Our Projects",
        link: "/projects"
      },
      secondaryButton: {
        text: "Get Involved",
        link: "/get-involved"
      }
    },
    {
      src: "/images/hero-3.jpg",
      alt: "Local sustainability initiative",
      title: "Building a sustainable future",
      description: "Through collaboration and innovation, we're helping communities develop sustainable solutions for long-term prosperity.",
      primaryButton: {
        text: "Our Impact",
        link: "/blog"
      },
      secondaryButton: {
        text: "Support Us",
        link: "/donate"
      }
    }
  ];
  
  // Add animation end handler for mobile optimization
  const handleAnimationEnd = (e) => {
    // Force a browser repaint after animation to prevent flickering on mobile
    if (e.target.style) {
      // Instead of self-assignment, use a different approach to trigger repaint
      const currentTransform = e.target.style.transform;
      e.target.style.display = 'none';
      // Trigger reflow
      void e.target.offsetHeight;
      e.target.style.display = '';
      e.target.style.transform = currentTransform;
    }
  };
  
  // Update the handleNextSlide function to ensure proper mobile functionality
  const handleNextSlide = useCallback(() => {
    if (isSliding) return;
    setIsSliding(true);
    setDirection("next");
    setCurrentImage((prev) => (prev + 1) % carouselSlides.length);
    
    // Use the configuration for animation duration
    const animationDuration = window.innerWidth <= 576 ? 
      CAROUSEL_CONFIG.animationDuration.mobile : 
      CAROUSEL_CONFIG.animationDuration.default;
    
    setTimeout(() => setIsSliding(false), animationDuration);
  }, [carouselSlides.length]);
  
  // Update the handlePrevSlide function for better mobile handling
  const handlePrevSlide = useCallback(() => {
    if (isSliding) return;
    setIsSliding(true);
    setDirection("prev");
    setCurrentImage((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    
    // Use the configuration for animation duration
    const animationDuration = window.innerWidth <= 576 ? 
      CAROUSEL_CONFIG.animationDuration.mobile : 
      CAROUSEL_CONFIG.animationDuration.default;
    
    setTimeout(() => setIsSliding(false), animationDuration);
  }, [carouselSlides.length]);
  
  // Update the goToSlide function for better mobile handling
  const goToSlide = useCallback((index) => {
    if (isSliding || index === currentImage) return;
    setIsSliding(true);
    setDirection(index > currentImage ? "next" : "prev");
    setCurrentImage(index);
    
    // Use the configuration for animation duration
    const animationDuration = window.innerWidth <= 576 ? 
      CAROUSEL_CONFIG.animationDuration.mobile : 
      CAROUSEL_CONFIG.animationDuration.default;
    
    setTimeout(() => setIsSliding(false), animationDuration);
  }, [isSliding, currentImage]);
  
  // Auto-scroll effect
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlide();
    }, CAROUSEL_CONFIG.slideInterval);
    
    return () => clearTimeout(timer);
  }, [currentImage, handleNextSlide, CAROUSEL_CONFIG.slideInterval]);
  
  // Update timer progress animation
  useEffect(() => {
    let animationFrame;
    let startTime;
    
    const updateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min((elapsed / CAROUSEL_CONFIG.slideInterval) * 100, 100);
      
      setTimerProgress(progress);
      
      if (progress < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };
    
    // Start animation
    animationFrame = requestAnimationFrame(updateProgress);
    
    // Clean up
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [currentImage]);
  
  return (
    <HeroWrapper>
      <HeroInnerContainer>
        <CarouselContainer>
          <CarouselTrack 
            style={{ 
              transform: `translateX(-${currentImage * 100}%)`,
              transition: isSliding ? `transform ${window.innerWidth <= 576 ? 0.5 : 0.6}s ease-in-out` : "none"
            }}
            onAnimationEnd={handleAnimationEnd}
          >
            {carouselSlides.map((slide, index) => (
              <CarouselSlide key={index}>
                <SlideImage 
                  src={slide.src} 
                  alt={slide.alt} 
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </CarouselSlide>
            ))}
          </CarouselTrack>

          <TimerIndicator progress={timerProgress} />
          
          <HeroOverlay>
            <HeroContent>
              {carouselSlides.map((slide, index) => (
                <HeroTextContent 
                  key={index}
                  isActive={currentImage === index}
                  direction={direction}
                >
                  <HeroTitle>{slide.title}</HeroTitle>
                  <HeroDescription>
                    {slide.description}
                  </HeroDescription>
                  <HeroButtons>
                    <PrimaryButton to={slide.primaryButton.link}>
                      {slide.primaryButton.text}
                    </PrimaryButton>
                    <SecondaryButton to={slide.secondaryButton.link}>
                      {slide.secondaryButton.text}
                      <ButtonIcon>
                        <FaArrowRight />
                      </ButtonIcon>
                    </SecondaryButton>
                  </HeroButtons>
                </HeroTextContent>
              ))}
            </HeroContent>
          </HeroOverlay>
          
          <NavButton direction="left" onClick={handlePrevSlide}>
            <FaArrowLeft />
          </NavButton>
          
          <NavButton direction="right" onClick={handleNextSlide}>
            <FaArrowRight />
          </NavButton>
          
          {/* Carousel indicators */}
          <CarouselIndicators>
            {carouselSlides.map((_, index) => (
              <CarouselIndicator 
                key={index} 
                active={currentImage === index}
                onClick={() => goToSlide(index)}
              >
                <FaCircle size={8} />
              </CarouselIndicator>
            ))}
          </CarouselIndicators>
        </CarouselContainer>
      </HeroInnerContainer>
    </HeroWrapper>
  );
};

/**
 * Note: Make sure to place your hero images here:
 * /public/images/hero.jpg
 * /public/images/hero-2.jpg
 * /public/images/hero-3.jpg
 * 
 * If the images are not showing, check the following:
 * 1. Verify the paths are correct
 * 2. Make sure the images exist in the public folder
 * 3. Try clearing your browser cache
 */

// Styled components with 2 spaces indentation
const HeroWrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: var(--background-light);
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 576px) {
    padding: 30px 15px;
    touch-action: pan-y; /* Allow vertical scrolling but improve horizontal touch handling */
  }
  
  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const HeroContainer = styled.section`
  width: 90%;
  max-width: 1400px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (max-width: 576px) {
    height: 450px; /* Adequate height for mobile */
  }
  
  @media (max-width: 480px) {
    height: 400px; /* Consistent height */
    min-height: 400px;
  }
  
  @media (max-width: 360px) {
    height: 380px;
    min-height: 380px;
  }
`;

const slideAnimation = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOutAnimation = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

// Adjust overlay for better text visibility on small screens
const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 2;
  display: flex;
  align-items: center;
  
  @media (max-width: 576px) {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.65) 100%
    );
  }
  
  @media (max-width: 480px) {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.35) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
`;

// Animations for content transitions
const slideInRight = keyframes`
  from { transform: translateY(-50%) translateX(50px); opacity: 0; }
  to { transform: translateY(-50%) translateX(0); opacity: 1; }
`;

const slideInLeft = keyframes`
  from { transform: translateY(-50%) translateX(-50px); opacity: 0; }
  to { transform: translateY(-50%) translateX(0); opacity: 1; }
`;

const slideOutRight = keyframes`
  from { transform: translateY(-50%) translateX(0); opacity: 1; }
  to { transform: translateY(-50%) translateX(50px); opacity: 0; }
`;

const slideOutLeft = keyframes`
  from { transform: translateY(-50%) translateX(0); opacity: 1; }
  to { transform: translateY(-50%) translateX(-50px); opacity: 0; }
`;

const HeroTextContent = styled.div`
  max-width: 550px;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  width: 45%;
  display: ${props => props.isActive ? "block" : "none"};
  text-align: left;
  animation: ${props => {
    if (props.isActive) {
      return props.direction === "next" 
        ? css`${slideInRight} 0.8s forwards` 
        : css`${slideInLeft} 0.8s forwards`;
    }
    return props.direction === "next" 
      ? css`${slideOutLeft} 0.8s forwards` 
      : css`${slideOutRight} 0.8s forwards`;
  }};
  
  @media (max-width: 992px) {
    width: 55%;
    max-width: 500px;
  }
  
  @media (max-width: 768px) {
    width: 65%;
    left: 8%;
  }
  
  @media (max-width: 576px) {
    width: 100%;
    left: 0;
    top: 50%; /* Position in the middle vertically */
    transform: translateY(-50%); /* Center vertically with transform */
    padding: 0 20px;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: auto; /* Don't stretch to full height */
  }
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
  
  /* Fix iOS Safari issues */
  @supports (-webkit-touch-callout: none) {
    /* CSS specific to iOS devices */
    -webkit-transform: translateY(-50%);
    
    @media (max-width: 576px) {
      -webkit-transform: translateY(-50%); /* iOS-specific vertical centering */
      height: auto;
      display: flex !important;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  color: white;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 38px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 576px) {
    font-size: 28px;
    margin-bottom: 12px;
    width: 100%;
    text-align: center;
    text-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.8),
      0 2px 6px rgba(0, 0, 0, 0.6),
      0 0 10px rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    padding: 5px;
    border-radius: 4px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 10px;
    padding: 0;
    min-height: 1.2em;
    text-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.9),
      0 3px 8px rgba(0, 0, 0, 0.7),
      0 0 15px rgba(0, 0, 0, 0.5);
  }
`;

const HeroDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 36px;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  max-width: 95%;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 576px) {
    font-size: 16px;
    margin-bottom: 20px; /* Add consistent spacing */
    width: 100%;
    text-align: center;
    max-width: 100%;
    text-shadow: 
      0 1px 6px rgba(0, 0, 0, 0.8),
      0 2px 6px rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 6px;
    backdrop-filter: blur(2px);
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 15px;
    -webkit-line-clamp: 3;
    text-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.9),
      0 3px 8px rgba(0, 0, 0, 0.7);
    background: rgba(0, 0, 0, 0.3);
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  
  @media (max-width: 576px) {
    justify-content: center;
    width: 100%;
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row; /* Keep buttons side-by-side */
    flex-wrap: wrap; /* Allow wrapping if needed */
    justify-content: center;
    width: 100%;
    gap: 12px;
    margin-top: 0; /* Remove extra margin */
  }
  
  @media (max-width: 360px) {
    flex-direction: column; /* Stack buttons on very small screens */
    align-items: center;
    gap: 10px;
  }
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 576px) {
    padding: 10px 18px;
    font-size: 14px;
    min-width: 120px;
    text-align: center;
    white-space: nowrap;
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 13px;
    min-width: 110px;
    white-space: nowrap;
  }
  
  @media (max-width: 360px) {
    width: 80%; /* Wider buttons when stacked */
    padding: 8px 0;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary-color, #087FAE);
  color: white;
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
`;

const ButtonIcon = styled.span`
  display: inline-flex;
  margin-left: 8px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === "left" ? "left: 20px;" : "right: 20px;"}
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  opacity: 0.7;
  -webkit-tap-highlight-color: transparent; /* Remove tap highlight on mobile */
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
    ${props => props.direction === "left" ? "left: 10px;" : "right: 10px;"}
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    top: 50%;
    ${props => props.direction === "left" ? "left: 15px;" : "right: 15px;"}
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.6);
    pointer-events: auto;
    touch-action: manipulation;
    z-index: 25;
    
    &:active {
      background-color: rgba(255, 255, 255, 0.8);
      transform: translateY(-50%) scale(0.95);
    }
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    ${props => props.direction === "left" ? "left: 10px;" : "right: 10px;"}
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

// Make indicators more visible and functional on mobile
const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 20;
  
  @media (max-width: 576px) {
    bottom: 20px;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    bottom: 20px;
    gap: 10px;
  }
`;

const CarouselIndicator = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${props => props.active ? 'var(--secondary-color, #EFB000)' : 'rgba(255, 255, 255, 0.7)'};
  transition: color 0.3s ease, transform 0.3s ease;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    color: ${props => props.active ? 'var(--secondary-color, #EFB000)' : 'rgba(255, 255, 255, 0.9)'};
    transform: scale(1.2);
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    pointer-events: auto;
    touch-action: manipulation;
    min-width: 44px;
    min-height: 44px;
    z-index: 25;
    position: relative;
    
    svg {
      font-size: 12px;
    }
    
    &:active {
      transform: scale(0.9);
    }
  }
`;

// Ensure proper container setup for carousel functionality
const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  
  @media (max-width: 576px) {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  @media (max-width: 480px) {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  
  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
    will-change: transform;
    transition: transform 0.5s ease-in-out;
  }
  
  @media (max-width: 480px) {
    transition: transform 0.4s ease-in-out;
    width: 100%;
  }
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  position: relative;
  
  @media (max-width: 576px) {
    min-width: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  
  @media (max-width: 480px) {
    min-width: 100%;
    width: 100%;
    touch-action: pan-y;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; /* Ensure proper display */
  
  @media (max-width: 576px) {
    object-position: center;
    object-fit: cover; /* Maintain aspect ratio without zoom */
    transform: none;
    scale: 1; /* Explicitly prevent any scaling */
  }
  
  @media (max-width: 480px) {
    object-fit: cover;
    object-position: center;
    transform: none;
    scale: 1;
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 360px) {
    object-position: center;
    transform: none;
    scale: 1;
  }
`;

const TimerIndicator = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.7);
  width: ${props => props.progress}%;
  transition: width 0.1s linear;
  z-index: 15; /* Lower than navigation elements */
`;

export default Hero;