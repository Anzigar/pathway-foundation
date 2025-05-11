import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderContainer = styled.header`
  background-color: var(--background-white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  
  img {
    height: 36px;
    margin-right: 10px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;

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
  }
`;

const NavItem = styled(NavLink)`
  color: var(--text-primary);
  margin: 0 1rem;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;

  &:hover, &.active {
    color: var(--primary-color);
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

const CTAButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.4rem 1.25rem;
  border-radius: 100px;
  margin-left: 1.5rem;
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
    <HeaderContainer className={scrolled ? "scrolled" : ""}>
      <NavContainer>
        <Logo to="/">
          {/* Logo image will be replaced with actual logo when available */}
          Pathway Foundation
        </Logo>
        
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
        
        <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
        
        <NavMenu isOpen={isMenuOpen}>
          <NavItem to="/" onClick={closeMenu}>Home</NavItem>
          <NavItem to="/about-us" onClick={closeMenu}>About Us</NavItem>
          <NavItem to="/our-work" onClick={closeMenu}>Our Work</NavItem>
          <NavItem to="/projects" onClick={closeMenu}>Projects</NavItem>
          <NavItem to="/news-events" onClick={closeMenu}>News & Events</NavItem>
          <NavItem to="/get-involved" onClick={closeMenu}>Get Involved</NavItem>
          <NavItem to="/contact-us" onClick={closeMenu}>Contact</NavItem>
          <CTAButton to="/donate" onClick={closeMenu}>Donate</CTAButton>
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;