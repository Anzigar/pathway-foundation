import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #087FAE;
  color: #FFFFFF;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  
  img {
    height: 40px; /* Significantly increased for better visibility */
    width: auto;
  }
`;

const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FooterHeading = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const FooterLink = styled(Link)`
  color: #FFFFFF;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #EFB000;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  background-color: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #EFB000;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterBottomLink = styled(Link)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo to="/">
            <img src="/images/white-logo.svg" alt="Pathway Foundation Logo" />
          </FooterLogo>
          <FooterDescription>
            Empowering vulnerable communities since 2016. We work to create sustainable change through community-led initiatives.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/pfptanzania/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink to="/about-us">About Us</FooterLink>
          <FooterLink to="/our-work">Our Work</FooterLink>
          <FooterLink to="/projects">Projects</FooterLink>
          <FooterLink to="/news-events">News & Events</FooterLink>
          <FooterLink to="/contact-us">Contact Us</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Get Involved</FooterHeading>
          <FooterLink to="/donate">Donate</FooterLink>
          <FooterLink to="/get-involved">Volunteer</FooterLink>
          <FooterLink to="/get-involved">Partner With Us</FooterLink>
          <FooterLink to="/media-resources">Media & Resources</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Contact</FooterHeading>
          <FooterDescription>
            Mabwepande, Bunju B, Kinondoni Municipal<br />
            Dar es Salaam, Tanzania<br /><br />
            <strong>Phone:</strong> +255 684 412 476<br />
            <strong>Email:</strong> info@pathwaysfoundationforthepoor.org
          </FooterDescription>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} Pathway Foundation. All rights reserved.
        </Copyright>
        <FooterBottomLinks>
          <FooterBottomLink to="/privacy-policy">Privacy Policy</FooterBottomLink>
          <FooterBottomLink to="/terms-of-service">Terms of Service</FooterBottomLink>
        </FooterBottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;