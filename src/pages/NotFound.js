import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  padding: 0 20px;
`;

const NotFoundCode = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 24px;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 100px;
  }
  
  @media (max-width: 480px) {
    font-size: 80px;
  }
`;

const NotFoundTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const NotFoundText = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HomeButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 16px 32px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    color: white;
    transform: translateY(-4px);
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 28px;
  }
`;

const SuggestedLinks = styled.div`
  margin-top: 40px;
  
  h3 {
    font-size: 20px;
    color: var(--text-primary);
    margin-bottom: 16px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
  
  li a {
    color: var(--primary-color);
    text-decoration: underline;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundText>
        We&apos;re sorry, the page you requested could not be found. It might have been removed, had its name changed, or is temporarily unavailable.
      </NotFoundText>
      <HomeButton to="/">Return to Home</HomeButton>
      
      <SuggestedLinks>
        <h3>You might be looking for:</h3>
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/our-work">Our Work</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/news-events">News & Events</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </SuggestedLinks>
    </NotFoundContainer>
  );
};

export default NotFound;