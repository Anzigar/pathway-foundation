import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * AppleStyleImpactCards component 
 * Uses Apple's design language for card layouts with clean typography and ample whitespace
 */
const AppleStyleImpactCards = () => {
  const impactData = [
    {
      title: "Education",
      stat: "10,000+",
      description: "Students reached through our educational programs across Tanzania",
      link: "/our-work/education",
      image: "/images/impact/education.jpg"
    },
    {
      title: "Clean Water",
      stat: "15+",
      description: "Water wells providing clean drinking water to rural communities",
      link: "/our-work/clean-water",
      image: "/images/impact/water.jpg"
    },
    {
      title: "Healthcare",
      stat: "15,000+",
      description: "People with improved access to healthcare services and education",
      link: "/our-work/healthcare",
      image: "/images/impact/healthcare.jpg"
    },
    {
      title: "Sustainability",
      stat: "35+",
      description: "Community-led environmental conservation projects launched",
      link: "/our-work/sustainability",
      image: "/images/impact/sustainability.jpg"
    }
  ];

  return (
    <ImpactSection>
      <SectionHeader>
        <SectionTitle>Our Impact</SectionTitle>
        <SectionSubtitle>
          Creating lasting change through sustainable development initiatives
        </SectionSubtitle>
      </SectionHeader>
      
      <CardsContainer>
        {impactData.map((item, index) => (
          <ImpactCard key={index} to={item.link}>
            <CardImage src={item.image} alt={item.title} />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardStat>{item.stat}</CardStat>
              <CardDescription>{item.description}</CardDescription>
              <LearnMoreRow>
                <LearnMoreLink>Learn more</LearnMoreLink>
                <ArrowIcon>→</ArrowIcon>
              </LearnMoreRow>
            </CardContent>
          </ImpactCard>
        ))}
      </CardsContainer>
    </ImpactSection>
  );
};

// Styled components with Apple's design aesthetic
const ImpactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--apple-black);
`;

const SectionSubtitle = styled.p`
  font-size: 21px;
  line-height: 1.47;
  max-width: 600px;
  margin: 0 auto;
  color: var(--apple-dark-gray);
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImpactCard = styled(Link)`
  background-color: var(--background-white);
  border-radius: var(--apple-card-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  box-shadow: var(--apple-card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  color: var(--apple-blue);
`;

const CardStat = styled.div`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--apple-black);
`;

const CardDescription = styled.p`
  font-size: 19px;
  line-height: 1.42;
  color: var(--apple-dark-gray);
  margin-bottom: auto;
  padding-bottom: 20px;
`;

const LearnMoreRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const LearnMoreLink = styled.span`
  font-size: 17px;
  font-weight: 400;
  color: var(--apple-blue);
`;

const ArrowIcon = styled.span`
  display: inline-block;
  margin-left: 6px;
  transition: transform 0.2s ease;
  color: var(--apple-blue);
  
  ${ImpactCard}:hover & {
    transform: translateX(4px);
  }
`;

export default AppleStyleImpactCards;