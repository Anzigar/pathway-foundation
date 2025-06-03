import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoSVG from "../../assets/logo.svg";

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

const NavItem = styled(Link)`
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

// Impact stats data
const impactStats = [
  { title: "Projects", value: "4", description: "Completed Projects" },
  { title: "Regions", value: "10", description: "Across Tanzania" },
  { title: "Beneficiaries", value: "10,000+", description: "Lives Impacted" },
  { title: "Years", value: "18", description: "Years of Experience" },
];

// Styled components for impact section
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const StatItem = styled.div`
  text-align: center;
  margin: 1rem 0;
  flex: 1 1 200px; /* Responsive flex basis */
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
`;

const StatTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const StatDescription = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

// Component for rendering impact stats
const ImpactSection = () => (
  <StatsContainer>
    {impactStats.map((stat, index) => (
      <StatItem key={index}>
        <StatValue>{stat.value}</StatValue>
        <StatTitle>{stat.title}</StatTitle>
        <StatDescription>{stat.description}</StatDescription>
      </StatItem>
    ))}
  </StatsContainer>
);

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

// Update carousel styles for better responsiveness on mobile
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 60vh; // Adjust height for mobile
  }
`;

const CarouselContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  width: 90%;
  max-width: 800px;
  
  @media (max-width: 768px) {
    top: 40%; // Move content up on mobile for better visibility
  }
`;

const CarouselTitle = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem; // Smaller font on mobile
  }
`;

const CarouselDescription = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem; // Smaller font on mobile
    margin-bottom: 1.5rem;
  }
`;

// Updated carousel items with different project photos
const carouselItems = [
  {
    image: "/images/football-project.jpg",
    title: "Empowering Youth Through Football",
    description: "Building leadership skills and community resilience through sports",
    buttons: [
      { text: "Donate", link: "/donate", isPrimary: true },
      { text: "Learn More", link: "/projects/youth-football", isPrimary: false }
    ]
  },
  {
    image: "/images/bodaboda-project.jpg",
    title: "Youth Economic Empowerment",
    description: "Creating sustainable livelihoods for young people in Tanzania",
    buttons: [
      { text: "Donate", link: "/donate", isPrimary: true },
      { text: "Learn More", link: "/projects/bodaboda-youth-empowerment", isPrimary: false }
    ]
  },
  {
    image: "/images/wash-project.jpg",
    title: "Water, Sanitation & Hygiene",
    description: "Improving access to clean water and sanitation facilities in rural communities",
    buttons: [
      { text: "Donate", link: "/donate", isPrimary: true },
      { text: "Learn More", link: "/projects/mtambani-wash", isPrimary: false }
    ]
  }
];

// Updated focus areas with links to corresponding projects
const focusAreas = [
  {
    title: "Livelihoods & Economic Empowerment",
    description: "Creating sustainable economic opportunities for vulnerable communities.",
    icon: "economic",
    link: "/projects/bodaboda-youth-empowerment"
  },
  {
    title: "Gender Equality & Social Inclusion",
    description: "Promoting equal rights and opportunities for all genders and social groups.",
    icon: "gender",
    link: "/projects/menstrual-justice"
  },
  {
    title: "Youth Development & Leadership",
    description: "Empowering young people with skills and opportunities to lead change.",
    icon: "youth",
    link: "/projects/youth-football"
  },
  {
    title: "WASH & Health in Communities and Schools",
    description: "Improving access to clean water, sanitation, and health services.",
    icon: "wash",
    link: "/projects/mtambani-wash"
  },
  {
    title: "Climate Resilience & Innovation",
    description: "Building community resilience to climate change through innovation.",
    icon: "climate",
    link: "/projects/mtambani-wash"
  },
  {
    title: "Emergency Response & Resilience",
    description: "Providing timely assistance during emergencies and building resilience.",
    icon: "emergency",
    link: "/projects"
  }
];