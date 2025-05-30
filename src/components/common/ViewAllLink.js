import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/**
 * A styled "View All" link component with distinct color
 * Used for linking to full listing pages from section previews
 */
const ViewAllLinkStyled = styled(Link)`
  color: var(--secondary-color, #EFB000); /* Using the secondary color from the website */
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  margin-top: 30px;
  
  &:hover {
    color: var(--secondary-color-dark, #d9a000);
    transform: translateX(5px);
  }
  
  svg {
    margin-left: 8px;
    font-size: 14px;
  }
`;

/**
 * ViewAllLink component with text and icon
 * @param {Object} props - Component props
 * @param {string} props.to - Destination path
 * @param {string} props.text - Link text (defaults to "View all")
 * @param {Object} props.style - Additional inline styles
 * @param {React.ReactNode} props.children - Optional children elements
 * @returns {JSX.Element} The ViewAllLink component
 */
const ViewAllLink = ({ to, text = "View all", style = {}, children, ...rest }) => {
  return (
    <ViewAllLinkStyled to={to} style={style} {...rest}>
      {text || children} <FaArrowRight />
    </ViewAllLinkStyled>
  );
};

export default ViewAllLink;