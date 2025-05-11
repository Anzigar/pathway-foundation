import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/**
 * CardAnimation - Component that adds animation effects to cards when they enter the viewport
 * Uses IntersectionObserver API for performance and attaches animations to children
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {number} [props.delay=0] - Optional delay for animation in milliseconds
 * @returns {JSX.Element} Animated wrapper component
 */
const CardAnimation = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    // Create observer for visibility detection
    const observer = new IntersectionObserver(
      (entries) => {
        // Update state when the element enters viewport
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Stop observing once animation is triggered
          observer.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of element is visible
        rootMargin: "0px 0px 50px 0px" // Add bottom margin to trigger earlier
      }
    );

    // Start observing element
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Clean up observer on unmount
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  return (
    <AnimationWrapper ref={elementRef} $isVisible={isVisible}>
      {children}
    </AnimationWrapper>
  );
};

// Styled component with animation properties
const AnimationWrapper = styled.div`
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? 0 : "20px")});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

export default CardAnimation;