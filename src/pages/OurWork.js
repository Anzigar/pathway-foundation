import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";
import { FaHandsHelping, FaUsers, FaGraduationCap, FaHeartbeat, FaLeaf, FaGlobeAfrica } from "react-icons/fa";

const WorkSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: var(--text-primary);
  margin-bottom: 24px;
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 60px;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ThematicGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ThematicAreaCard = styled(Link)`
  background-color: var(--background-white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--text-primary);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    color: var(--text-primary);
  }
`;

const AreaCardHeader = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 30px;
  text-align: center;
`;

const AreaIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const AreaTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const AreaCardBody = styled.div`
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AreaDescription = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
`;

const AreaKeyPoints = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 24px;
  flex-grow: 1;
`;

const KeyPoint = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.5;
  
  &:before {
    content: "•";
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 10px;
  }
`;

const LearnMoreLink = styled.span`
  color: var(--primary-color);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  
  &::after {
    content: "→";
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
  }
  
  ${ThematicAreaCard}:hover & {
    &::after {
      transform: translateX(4px);
    }
  }
`;

const OurWork = () => {
  const thematicAreas = [
    {
      id: "economic-empowerment",
      title: "Livelihoods & Economic Empowerment",
      description: "Supporting sustainable livelihoods through skills development, financial inclusion, and entrepreneurship.",
      icon: <FaHandsHelping />,
      keyPoints: [
        "Vocational skills training for youth",
        "Microenterprise development and support",
        "Financial literacy programs",
        "Market access facilitation"
      ]
    },
    {
      id: "gender-equality",
      title: "Gender Equality & Social Inclusion",
      description: "Promoting gender equality and inclusive participation in all aspects of society.",
      icon: <FaUsers />,
      keyPoints: [
        "Women's leadership development",
        "Gender-based violence prevention",
        "Men's engagement in gender equality",
        "Inclusive policy advocacy"
      ]
    },
    {
      id: "youth-development",
      title: "Youth Development & Leadership",
      description: "Empowering young people with skills, mentorship, and opportunities for leadership.",
      icon: <FaGraduationCap />,
      keyPoints: [
        "Youth leadership training",
        "Mentorship programs",
        "Sports for development initiatives",
        "Youth innovation hubs"
      ]
    },
    {
      id: "wash-health",
      title: "WASH & Health",
      description: "Improving access to clean water, sanitation, and essential health services.",
      icon: <FaHeartbeat />,
      keyPoints: [
        "Community water systems",
        "Sanitation infrastructure development",
        "Hygiene education programs",
        "Community health outreach"
      ]
    },
    {
      id: "climate-resilience",
      title: "Climate Resilience & Innovation",
      description: "Building community resilience through climate-smart innovations and practices.",
      icon: <FaLeaf />,
      keyPoints: [
        "Renewable energy solutions",
        "Climate-smart agriculture",
        "Environmental conservation",
        "Disaster risk reduction training"
      ]
    },
    {
      id: "emergency-response",
      title: "Emergency Response",
      description: "Providing timely humanitarian assistance during emergencies and disasters.",
      icon: <FaGlobeAfrica />,
      keyPoints: [
        "Rapid needs assessment",
        "Emergency relief coordination",
        "Post-disaster recovery support",
        "Community preparedness training"
      ]
    }
  ];

  return (
    <>
      <PageBanner 
        title="Our Work" 
        subtitle="Discover the thematic areas where we focus our efforts to create sustainable change" 
      />
      
      <WorkSection>
        <SectionContent>
          <SectionTitle>Our Approach</SectionTitle>
          <SectionText>
            At Pathway Foundation, we believe in a holistic, community-led approach to development. We work across six interconnected thematic areas to address the root causes of vulnerability and create sustainable pathways to resilience.
          </SectionText>
          
          <ThematicGridContainer>
            {thematicAreas.map(area => (
              <ThematicAreaCard key={area.id} to={`/our-work/${area.id}`}>
                <AreaCardHeader>
                  <AreaIcon>{area.icon}</AreaIcon>
                  <AreaTitle>{area.title}</AreaTitle>
                </AreaCardHeader>
                <AreaCardBody>
                  <AreaDescription>{area.description}</AreaDescription>
                  <AreaKeyPoints>
                    {area.keyPoints.map((point, index) => (
                      <KeyPoint key={index}>{point}</KeyPoint>
                    ))}
                  </AreaKeyPoints>
                  <LearnMoreLink>Learn More</LearnMoreLink>
                </AreaCardBody>
              </ThematicAreaCard>
            ))}
          </ThematicGridContainer>
        </SectionContent>
      </WorkSection>
      
      <CallToAction />
    </>
  );
};

export default OurWork;