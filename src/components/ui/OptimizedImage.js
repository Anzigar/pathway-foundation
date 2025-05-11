import React from "react";
import styled from "styled-components";

/**
 * OptimizedImage - A component for optimized image rendering
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} [props.width] - Image width
 * @param {string} [props.height] - Image height
 * @param {string} [props.className] - Additional CSS class
 * @returns {JSX.Element} - Optimized image component
 */
const OptimizedImage = ({ src, alt, width, height, className, ...rest }) => {
  return (
    <StyledImage 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
      loading="lazy"
      {...rest}
    />
  );
};

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

export default OptimizedImage;