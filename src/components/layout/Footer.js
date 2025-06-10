import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaImage,
  FaVideo,
  FaFileAlt
} from "react-icons/fa";

// Basic container styles
const FooterContainer = styled.footer`
  background-color: #087FAE;
  color: #FFFFFF;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Improved grid layout with better responsiveness
const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 2.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  color: #EFB000;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.8rem;
  font-size: 0.95rem;
`;

// Improved contact item alignment with consistent spacing
const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-right: 0.8rem;
  color: #EFB000;
  flex-shrink: 0;
`;

const ContactTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
  color: #EFB000;
`;

const ContactText = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
`;

// Consistent location item styling with other contact items
const LocationItem = styled(ContactItem)`
  margin-bottom: 1.2rem;
`;

const LocationTitle = styled(ContactLabel)``;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #EFB000;
    transform: translateX(3px);
  }
`;

const ExternalLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  
  &:hover {
    color: #EFB000;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #FFFFFF;
  transition: all 0.3s ease;
  
  &:hover {
    background: #EFB000;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
`;

const PoweredBy = styled.div`
  text-align: center;
  margin-top: 0.6rem;
  color: #EFB000;
  font-weight: 500;
  font-size: 0.85rem;
`;

// Add logo to footer for better visibility
const FooterLogo = styled.div`
  margin-bottom: 1.2rem;
  
  img {
    height: 80px;
    width: auto;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterHeading>About Us</FooterHeading>
            <FooterLogo>
              <img src="/images/Asset.png" alt="Pathways Foundation for the Poor" />
            </FooterLogo>
            <FooterDescription>
              Pathways Foundation for the Poor (PFP) is committed to uplifting the lives of
              impoverished and vulnerable communities by tackling the root causes of poverty,
              boosting household incomes, and promoting overall social well-being.
            </FooterDescription>
            <SocialLinks>
   
              <SocialIcon href="https://www.instagram.com/pfptanzania?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="www.linkedin.com/in/pfp-tanzania-183bb6369" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="https://youtube.com/@pfp_tanzania?si=v4yQuOiZv0RJRqIk" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIcon>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterHeading>Our Locations</FooterHeading>
            <LocationItem>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <ContactTextContainer>
                <LocationTitle>Headquarters (USA)</LocationTitle>
                <ContactText>Texas, United States of America</ContactText>
              </ContactTextContainer>
            </LocationItem>
            <LocationItem>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <ContactTextContainer>
                <LocationTitle>Tanzania Office</LocationTitle>
                <ContactText>Dar es Salaam, Tanzania</ContactText>
              </ContactTextContainer>
            </LocationItem>
          </FooterSection>

          <FooterSection>
            <FooterHeading>Contact Us</FooterHeading>
            <ContactItem>
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <ContactTextContainer>
                <ContactLabel>Phone</ContactLabel>
                <ContactText>+255 678 495 109</ContactText>
              </ContactTextContainer>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <ContactTextContainer>
                <ContactLabel>Email</ContactLabel>
                <ContactText>info@pathwaysfoundation.org</ContactText>
              </ContactTextContainer>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <FaGlobe />
              </IconWrapper>
              <ContactTextContainer>
                <ContactLabel>Website</ContactLabel>
                <ContactText>www.pathwaysfoundation.org</ContactText>
              </ContactTextContainer>
            </ContactItem>
          </FooterSection>

          <FooterSection>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLink to="/about-us">About Us</FooterLink>
            <FooterLink to="/our-work">Our Work</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/news-events">News & Events</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
            <FooterLink to="/donate">Donate</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterHeading>Our Projects</FooterHeading>
            <FooterLink to="/projects/bodaboda-youth-empowerment">Bodaboda Youth Empowerment</FooterLink>
            <FooterLink to="/projects/youth-football">Youth Through Football</FooterLink>
            <FooterLink to="/projects/mtambani-wash">Mtambani WASH Project</FooterLink>
          </FooterSection>
        </FooterGrid>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} Pathways Foundation for the Poor. All Rights Reserved.
        <PoweredBy>Powered by HIFA GROUP</PoweredBy>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;