import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/**
 * Hero component with Meta-inspired design
 * @returns {JSX.Element} Hero component
 */
const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroInnerContainer>
          <HeroBackgroundImage src="/images/hero.jpg" alt="Students in a classroom in Tanzania" />
          <HeroOverlay>
            <HeroContent>
              <HeroTextContent>
                <HeroTitle>Creating sustainable change in Tanzania</HeroTitle>
                <HeroDescription>
                  We work with local communities to develop solutions that address the root causes of 
                  poverty and create lasting positive change.
                </HeroDescription>
                <HeroButtons>
                  <PrimaryButton to="/donate">Donate Now</PrimaryButton>
                  <SecondaryButton to="/our-work">
                    Learn More
                    <ButtonIcon>
                      <FaArrowRight />
                    </ButtonIcon>
                  </SecondaryButton>
                </HeroButtons>
              </HeroTextContent>
            </HeroContent>
          </HeroOverlay>
        </HeroInnerContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

/**
 * Note: Make sure to place your hero image here:
 * /public/images/hero.jpg
 * 
 * If the image is not showing, check the following:
 * 1. Verify the path is correct
 * 2. Make sure the image exists in the public folder
 * 3. Try clearing your browser cache
 */

// Styled components with 2 spaces indentation
const HeroWrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: var(--background-light);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContainer = styled.section`
  width: 90%;
  max-width: 1400px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 400px;
  }
`;

const HeroBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 20px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
  z-index: 2;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 3;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeroTextContent = styled.div`
  max-width: 600px;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const HeroDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 100px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: var(--secondary-color);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    color: white;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--primary-color);
  
  &:hover {
    background-color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonIcon = styled.span`
  margin-left: 8px;
  display: inline-flex;
  font-size: 14px;
  transition: transform 0.2s ease;
  
  ${SecondaryButton}:hover & {
    transform: translateX(4px);
  }
`;

export default Hero;