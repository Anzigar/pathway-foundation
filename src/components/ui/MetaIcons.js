import React from "react";
import styled from "styled-components";

/**
 * MetaIcons - A collection of SVG icons styled to match Meta's design system
 * Icons use consistent styling with the Montserrat font
 * @returns {Object} Icon components collection
 */

// Base icon styling for consistent appearance across the application
const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// Arrow icons with different directions
const ArrowRight = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.166 10H15.833"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.167L15.833 10.001L10 15.834"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

const ArrowLeft = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.834 10H4.167"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.167L4.167 10.001L10 15.834"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

const ArrowUp = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 15.834V4.167"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.167 10.001L10 4.167L15.833 10.001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

const ArrowDown = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 4.166V15.833"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.833 10L10 15.833L4.167 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

// Interface icons for user interaction
const Close = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L15 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

const Menu = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.333 5H16.667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.333 10H16.667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.333 15H16.667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </IconWrapper>
);

// Social media icons
const Facebook = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.833 1.667H13.333C12.009 1.667 10.74 2.193 9.802 3.131C8.864 4.069 8.333 5.338 8.333 6.667V9.167H5.833V12.5H8.333V19.167H11.667V12.5H14.167L15.833 9.167H11.667V6.667C11.667 6.335 11.799 6.016 12.033 5.782C12.268 5.547 12.586 5.417 12.917 5.417H15.833V1.667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

const Twitter = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.167 2.5C18.334 3.06 17.401 3.491 16.417 3.75C15.892 3.139 15.198 2.708 14.419 2.515C13.64 2.323 12.821 2.377 12.077 2.673C11.332 2.969 10.7 3.492 10.272 4.17C9.845 4.848 9.643 5.647 9.693 6.452V7.285C8.153 7.323 6.627 6.978 5.261 6.281C3.895 5.585 2.736 4.561 1.892 3.302C1.892 3.302 -0.774 10.833 6.726 14.167C4.907 15.354 2.75 16.002 0.558 16.018C8.058 20.185 17.226 16.018 17.226 6.418C17.225 6.182 17.203 5.947 17.16 5.717C18.004 4.904 18.625 3.877 19.167 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

const Instagram = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.167 1.667H5.833C3.532 1.667 1.667 3.532 1.667 5.833V14.167C1.667 16.468 3.532 18.333 5.833 18.333H14.167C16.468 18.333 18.333 16.468 18.333 14.167V5.833C18.333 3.532 16.468 1.667 14.167 1.667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 9.477C13.442 10.172 13.338 10.885 13.035 11.522C12.733 12.159 12.246 12.689 11.641 13.044C11.036 13.398 10.339 13.561 9.642 13.511C8.944 13.462 8.277 13.202 7.728 12.766C7.178 12.33 6.772 11.739 6.56 11.074C6.349 10.408 6.342 9.697 6.54 9.026C6.739 8.356 7.133 7.758 7.674 7.311C8.215 6.865 8.876 6.592 9.575 6.529C10.29 6.464 11.005 6.618 11.625 6.969C12.245 7.32 12.736 7.85 13.033 8.485C13.329 9.12 13.418 9.828 13.333 10.523V10.523Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.583 5.417H14.592"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

// ChevronRight icon for buttons and links
const ChevronRight = (props) => (
  <IconWrapper>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </IconWrapper>
);

// Add other icons as needed
const Calendar = (props) => (
  <IconWrapper>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  </IconWrapper>
);

const MapPin = (props) => (
  <IconWrapper>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  </IconWrapper>
);

// Export all icons as a single object
const MetaIcons = {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Close,
  Menu,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  Calendar,
  MapPin
};

export default MetaIcons;