import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as LogoSVG } from "../../assets/logo2.svg";

// Animation for logo entrance
const logoEntrance = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled components
const HeaderWrapper = styled.header`
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding-left: 15px; /* Add left padding to shift content slightly left */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0; /* Reduced vertical padding to compensate for larger logo */
  max-width: 1200px;
  margin: 0 auto;
  width: 98%; /* Increased from 95% to provide more space for the logo */
  
  /* Add proper spacing between elements */
  & > div, & > nav {
    display: flex;
    align-items: center;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  max-width: 1700px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.25rem 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 0; /* Reduced spacing between logo and navigation */
  margin-left: -10px; /* Move logo slightly to the left */

  svg {
    height: 40px; /* Increased from 85px for better visibility */
    width: auto;
    animation: ${logoEntrance} 0.8s ease-out;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  /* Fallback for img tag if SVG doesn't render */
  img {
    height: 120px; /* Increased from 90px for better visibility */
    width: auto;
    animation: ${logoEntrance} 0.8s ease-out;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 5px; /* Minimal spacing from logo */

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 280px;
    height: 100vh;
    background-color: var(--background-white);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 5rem 2rem 2rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 100;
    margin-left: 0; /* Reset on mobile */
  }
`;

const NavItem = styled(NavLink)`
  color: ${props => props.theme?.colors?.primary || "#087FAE"};
  margin: 0 0.75rem; /* Reduced horizontal margin between nav items */
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;

  &:hover, &.active {
    color: ${props => props.theme?.colors?.secondary || "#EFB000"};
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
  }

  @media (max-width: 1024px) {
    margin: 1rem 0;
    font-size: 1rem;
  }
`;

// First nav item with less margin to be closer to logo
const FirstNavItem = styled(NavItem)`
  margin-left: 0.25rem; /* Even smaller margin for first item */
`;

const CTAButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.4rem 1.25rem;
  border-radius: 100px;
  margin-left: 1rem; /* Reduced from 1.5rem */
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--secondary-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 1024px) {
    margin: 1.5rem 0 0;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.3rem;
  color: var(--text-primary);
  cursor: pointer;
  z-index: 1000;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 99;
`;

const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* Reduced spacing for mobile nav items */
  padding: 20px 15px; /* Adjusted padding */
  background-color: white;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'flex' : 'none'};
`;

// Removed unused MobileMenuButton component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <HeaderWrapper>
      <HeaderContainer className={scrolled ? "scrolled" : ""}>
        <NavContainer>
          <Logo to="/">
            <LogoSVG />
          </Logo>
          
          <MenuToggle onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MenuToggle>
          
          <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
          
          <NavMenu isOpen={isMenuOpen}>
            <FirstNavItem to="/" onClick={closeMenu}>Home</FirstNavItem>
            <NavItem to="/about-us" onClick={closeMenu}>About Us</NavItem>
            <NavItem to="/our-work" onClick={closeMenu}>Our Work</NavItem>
            <NavItem to="/projects" onClick={closeMenu}>Projects</NavItem>
            <NavItem to="/news-events" onClick={closeMenu}>News & Events</NavItem>
            <NavItem to="/blog" onClick={closeMenu}>Blog</NavItem>
            <NavItem to="/contact-us" onClick={closeMenu}>Contact</NavItem>
            <CTAButton to="/donate" onClick={closeMenu}>Donate</CTAButton>
          </NavMenu>
          <MobileNavContainer isOpen={isMenuOpen}>
            <NavItem to="/" onClick={closeMenu}>Home</NavItem>
            <NavItem to="/about-us" onClick={closeMenu}>About Us</NavItem>
            <NavItem to="/our-work" onClick={closeMenu}>Our Work</NavItem>
            <NavItem to="/projects" onClick={closeMenu}>Projects</NavItem>
            <NavItem to="/news-events" onClick={closeMenu}>News & Events</NavItem>
            <NavItem to="/blog" onClick={closeMenu}>Blog</NavItem>
            <NavItem to="/contact-us" onClick={closeMenu}>Contact</NavItem>
            <CTAButton to="/donate" onClick={closeMenu}>Donate</CTAButton>
          </MobileNavContainer>
        </NavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;