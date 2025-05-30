import React from "react";
import styled, { keyframes } from "styled-components";
import OptimizedImage from "../ui/OptimizedImage";

/**
 * Partners section displaying organization partners with Meta-inspired UI
 * @returns {JSX.Element} Partners component
 */
const Partners = () => {
  // Partner data with logos and names
  const partners = [
    {
      id: 1,
      name: "AZANIA BANK",
      logo: "/images/our-partner/azania.png",
      url: "https://azaniabank.co.tz",
      description: "Empowering communities through financial inclusion"
    },
    {
      id: 2,
      name: "ASUTA",
      logo: "/images/our-partner/asuta logo.png",
      url: "https://asuta.org",
      description: "non-profit organization focused on sustainable development"
    },
    {
      id: 3,
      name: "Government of Tanzania (GVT)",
      logo: "/images/our-partner/govt.png",
      url: "https://www.tanzania.go.tz",
      description: "Partnering for national development and community welfare"
    },
    {
      id: 4,
      name: "Tanzania Gender Networking Programme (TGNP)",
      logo: "/images/our-partner/tgnp.jpg",
      url: "https://www.tgnp.org",
      description: "Advocating for gender equality and women's rights"
    },
    {
      id: 5,
      name: "Tanzania Community Development Trust",
      logo: "/images/our-partner/wildaf.png",
      url: "https://www.wildaf.org",
      description: "Local our-partnerhip for sustainable community growth"
    },
    {
      id: 6,
      name: "Crop",
      logo: "/images/our-partner/crop.png",
      url: "https://www.crop.org",
      description: "Innovating agricultural solutions for food security"
    }
  ];

  return (
    <PartnersSection>
      <SectionContent>
        <SectionHeader>
          <SectionTitle>Our Partners</SectionTitle>
          <SectionDescription>
            Working together with these organizations to create lasting impact and transform communities
          </SectionDescription>
        </SectionHeader>

        <PartnerLogosContainer>
          {partners.map((partner, index) => (
            <PartnerItem key={partner.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <PartnerLogoWrapper
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PartnerLogo>
                  <OptimizedImage src={partner.logo} alt={`${partner.name} logo`} />
                </PartnerLogo>
                <PartnerName>{partner.name}</PartnerName>
                <PartnerDescription>{partner.description}</PartnerDescription>
              </PartnerLogoWrapper>
            </PartnerItem>
          ))}
        </PartnerLogosContainer>

        <PartnerCta>
          <CtaText>Interested in partnering with us?</CtaText>
          <CtaLink href="/contact-us">
            Get in touch 
            <ArrowIcon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3L13 8L8 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 8H3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ArrowIcon>
          </CtaLink>
        </PartnerCta>
      </SectionContent>
    </PartnersSection>
  );
};

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shine = keyframes`
  from { left: -100%; }
  to { left: 100%; }
`;

// Styled components with 2 spaces indentation
const PartnersSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
  position: relative;
  overflow: hidden;
  
  &::before, &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    opacity: 0.05;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    z-index: 0;
  }
  
  &::before {
    top: -200px;
    left: -200px;
  }
  
  &::after {
    bottom: -200px;
    right: -200px;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-weight: 700;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PartnerLogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerItem = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out forwards;
  animation-delay: 0.1s;
`;

const PartnerLogoWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
  background-color: var(--background-white);
  border-radius: 16px;
  padding: 24px;
  box-shadow: var(--shadow-sm);
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    
    img {
      opacity: 1;
      filter: none;
    }
  }
`;

const PartnerLogo = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  
  img {
    max-width: 180px;
    max-height: 80px;
    object-fit: contain;
    opacity: 0.8;
    filter: grayscale(30%);
    transition: all 0.4s ease;
  }
`;

const PartnerName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 8px;
`;

const PartnerDescription = styled.p`
  font-size: 14px;
  color: var(--text-secondary);
  text-align: center;
  line-height: 1.5;
  max-width: 220px;
  margin: 0 auto;
`;

const PartnerCta = styled.div`
  text-align: center;
  margin-top: 60px;
  padding: 40px;
  background: linear-gradient(to right, rgba(240,242,245,0.8), rgba(228,230,235,0.8), rgba(240,242,245,0.8));
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.4) 50%, 
      rgba(255,255,255,0) 100%);
    animation: ${shine} 8s infinite linear;
  }
`;

const CtaText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ArrowIcon = styled.span`
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s ease-out;
  
  ${CtaLink}:hover & {
    transform: translateX(4px);
  }
`;

export default Partners;