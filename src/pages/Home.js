import React from "react";
import styled from "styled-components";
import Hero from "../components/sections/Hero";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Partners from "../components/sections/Partners";
import CallToAction from "../components/sections/CallToAction";
import { FaHandHoldingHeart, FaUsers, FaGlobe, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ImpactSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const ImpactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ImpactHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const ImpactTitle = styled.h2`
  font-size: 42px;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-weight: 700;
`;

const ImpactDescription = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: var(--background-light);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const StatIcon = styled.div`
  font-size: 48px;
  color: var(--primary-color);
  margin-bottom: 16px;
`;

const StatNumber = styled.div`
  font-size: 42px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 18px;
  color: var(--text-secondary);
`;

const ProductsSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
  text-align: center;
`;

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProductsTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 50px;
  text-align: center;
`;

const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: var(--background-white);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImageWrapper = styled.div`
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-light);
  overflow: hidden;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProductBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  z-index: 2;
`;

const ProductContent = styled.div`
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
`;

const ProductCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 16px;
  margin-top: auto;
  text-decoration: none;
  
  svg {
    margin-left: 8px;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: var(--secondary-color);
    
    svg {
      transform: translateX(4px);
    }
  }
`;

// Product data
const products = [
  {
    id: 1,
    name: "Clean Water Projects",
    image: "/images/clean_water.jpg",
    link: "/projects/water",
    badge: "Featured"
  },
  {
    id: 2,
    name: "Education Initiatives",
    image: "/images/education.JPG",
    link: "/projects/education",
    badge: "New"
  },
  {
    id: 3,
    name: "Healthcare Programs",
    image: "/images/healthcare_programs.jpg",
    link: "/projects/healthcare"
  },
  {
    id: 4,
    name: "Economic Development",
    image: "/images/about/page1.jpg",
    link: "/projects/economic"
  }
];

/**
 * Home page component showing hero, impact stats, featured projects, partners, and call to action
 * @returns {JSX.Element} The Home page component
 */
const Home = () => {
  const impactStats = [
    { title: "Projects", value: "4", description: "Completed Projects" },
    { title: "Regions", value: "10", description: "Across Tanzania" },
    { title: "Beneficiaries", value: "10,000+", description: "Lives Impacted" },
    { title: "Years", value: "18", description: "Years of Experience" },
  ];
  
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
  
  return (
    <>
      <Hero />
      
      <ImpactSection>
        <ImpactContent>
          <ImpactHeader>
            <ImpactTitle>Our Impact</ImpactTitle>
            <ImpactDescription>
              Since 2016, we&apos;ve been working to create sustainable change in vulnerable communities across Tanzania
            </ImpactDescription>
          </ImpactHeader>
          
          <StatsContainer>
            <StatCard>
              <StatIcon>
                <FaHandHoldingHeart />
              </StatIcon>
              <StatNumber>4</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatIcon>
                <FaUsers />
              </StatIcon>
              <StatNumber>25,000+</StatNumber>
              <StatLabel>People Impacted</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatIcon>
                <FaGlobe />
              </StatIcon>
              <StatNumber>10</StatNumber>
              <StatLabel>Regions Served</StatLabel>
            </StatCard>
          </StatsContainer>
        </ImpactContent>
      </ImpactSection>

      <ProductsSection>
        <ProductsContainer>
          <ProductsTitle>Our Focus Areas</ProductsTitle>
          <ProductCardGrid>
            {products.map((product) => (
              <ProductCard key={product.id}>
                <ProductImageWrapper>
                  <ProductImage src={product.image} alt={product.name} />
                  {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
                </ProductImageWrapper>
                <ProductContent>
                  <ProductName>{product.name}</ProductName>
                  <ProductCta to={product.link}>
                    {/* Learn More <FaArrowRight /> */}
                  </ProductCta>
                </ProductContent>
              </ProductCard>
            ))}
          </ProductCardGrid>
        </ProductsContainer>
      </ProductsSection>
      
      <FeaturedProjects />
      <Partners />
      <CallToAction />
    </>
  );
};

export default Home;