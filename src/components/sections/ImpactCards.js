import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaWater, FaHeartbeat } from "react-icons/fa";

/**
 * ImpactCards component with Meta-inspired design
 * Displays impact statistics and achievements in a single focused card
 */
const ImpactCards = () => {
  const impactData = [
    {
      title: "Education",
      stat: "10,000+",
      description: "Students reached",
      icon: <FaGraduationCap />,
      link: "/our-work/education"
    },
    {
      title: "Clean Water",
      stat: "50+",
      description: "Water wells built",
      icon: <FaWater />,
      link: "/our-work/clean-water"
    },
    {
      title: "Healthcare",
      stat: "15,000+",
      description: "People with improved access",
      icon: <FaHeartbeat />,
      link: "/our-work/healthcare"
    }
  ];

  return (
    <ImpactContainer>
      <ImpactHeading>Our Impact</ImpactHeading>
      <ImpactSubheading>
        Creating lasting change through sustainable development initiatives
      </ImpactSubheading>
      
      <ImpactCard>
        <ImpactIconsContainer>
          {impactData.map((item, index) => (
            <ImpactItem key={index}>
              <IconContainer>
                {item.icon}
              </IconContainer>
              <StatNumber>{item.stat}</StatNumber>
              <StatTitle>{item.title}</StatTitle>
              <StatDescription>{item.description}</StatDescription>
            </ImpactItem>
          ))}
        </ImpactIconsContainer>
        <LearnMoreContainer>
          <LearnMoreLink to="/our-impact">
            Learn more about our impact <ArrowIcon>→</ArrowIcon>
          </LearnMoreLink>
        </LearnMoreContainer>
      </ImpactCard>
    </ImpactContainer>
  );
};

// Styled components with 2-space indentation
const ImpactContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
`;

const ImpactHeading = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-primary);
`;

const ImpactSubheading = styled.p`
  font-size: 20px;
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto 64px;
  color: var(--text-secondary);
`;

const ImpactCard = styled.div`
  background-color: var(--background-white);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 40px 30px;
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 30px 20px;
  }
`;

const ImpactIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ImpactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 0 15px;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: white;
  font-size: 24px;
`;

const StatNumber = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
`;

const StatTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--primary-color);
`;

const StatDescription = styled.div`
  font-size: 16px;
  color: var(--text-secondary);
`;

const LearnMoreContainer = styled.div`
  margin-top: 40px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--background-gray);
`;

const LearnMoreLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-color);
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ArrowIcon = styled.span`
  display: inline-block;
  margin-left: 6px;
  transition: transform 0.2s ease;
  
  ${LearnMoreLink}:hover & {
    transform: translateX(4px);
  }
`;

export default ImpactCards;