import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CardAnimation from "./CardAnimation";
import MetaIcons from "./MetaIcons";

/**
 * Card component that displays a project or content card with image, title, and description
 * Styled to match Meta.com's modern card design with hover effects and rounded corners
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {string} props.image - Image URL
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.link - Link URL for the card
 * @param {React.ReactNode} [props.footer] - Optional footer content (e.g., view counter, date)
 * @returns {JSX.Element} Card component
 */
const Card = ({ title, description, image, imageAlt, link, footer }) => {
  return (
    <CardAnimation>
      <CardContainer to={link}>
        <CardImage>
          <img src={image} alt={imageAlt} />
        </CardImage>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {footer && <CardFooter>{footer}</CardFooter>}
          <CardLink>
            Learn more
            <MetaIcons.ArrowRight />
          </CardLink>
        </CardContent>
      </CardContainer>
    </CardAnimation>
  );
};

// Styled components with 2 space indentation as per coding standards
const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  height: 100%;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    box-shadow: var(--shadow-md);
    
    img {
      transform: scale(1.05);
    }
    
    svg {
      transform: translateX(4px);
    }
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 20%);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }
`;

const CardContent = styled.div`
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
  font-weight: 600;
`;

const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  flex-grow: 1;
`;

const CardLink = styled.span`
  color: var(--primary-color);
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-top: auto;
  
  svg {
    margin-left: var(--spacing-sm);
    transition: transform var(--transition-fast);
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-md);
  margin-top: auto;
  margin-bottom: var(--spacing-md);
  border-top: 1px solid var(--border-light);
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: var(--text-tertiary);
`;

const CardHighlight = styled.div`
  background-color: #087FAE;
  color: #FFFFFF;
`;

export default Card;