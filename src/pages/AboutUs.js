import React from "react";
import styled from "styled-components";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";
import { FaUsers, FaHandsHelping, FaGlobeAfrica, FaGraduationCap, FaHeartbeat, FaLeaf } from "react-icons/fa";

const AboutSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ColumnContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: var(--text-primary);
  margin-bottom: 24px;
`;

const SectionText = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.6;
`;

const MissionVisionSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-light);
`;

const MissionVisionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MissionVisionCard = styled.div`
  background-color: var(--background-white);
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const MVTitle = styled.h3`
  font-size: 24px;
  color: var(--text-primary);
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--primary-color);
`;

const MVText = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ValuesSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const ValuesContainer = styled.div`
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

const ValueCard = styled.div`
  padding: 30px;
  border-radius: 12px;
  background-color: var(--background-light);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
`;

const ValueTitle = styled.h3`
  font-size: 20px;
  color: var(--text-primary);
  margin: 16px 0;
`;

const ValueIcon = styled.div`
  font-size: 36px;
  color: var(--primary-color);
`;

const ThematicAreasSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-light);
`;

const AreasContainer = styled.div`
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

const AreaCard = styled.div`
  background-color: var(--background-white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
`;

const AreaIcon = styled.div`
  background-color: var(--primary-color);
  color: white;
  font-size: 36px;
  padding: 30px;
  text-align: center;
`;

const AreaContent = styled.div`
  padding: 30px;
`;

const AreaTitle = styled.h3`
  font-size: 20px;
  color: var(--text-primary);
  margin-bottom: 16px;
`;

const AreaText = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const TeamSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const AboutImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const AboutUs = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all our actions and decisions.",
      icon: <FaUsers />
    },
    {
      id: 2,
      title: "Community-Led",
      description: "We believe in empowering communities to lead their own development.",
      icon: <FaHandsHelping />
    },
    {
      id: 3,
      title: "Transparency",
      description: "We maintain transparency in all our operations and financial management.",
      icon: <FaGlobeAfrica />
    },
    {
      id: 4,
      title: "Innovation",
      description: "We embrace innovative approaches to tackle complex social challenges.",
      icon: <FaGraduationCap />
    },
    {
      id: 5,
      title: "Compassion",
      description: "We act with compassion and empathy toward the communities we serve.",
      icon: <FaHeartbeat />
    },
    {
      id: 6,
      title: "Sustainability",
      description: "We develop solutions that are environmentally and socially sustainable.",
      icon: <FaLeaf />
    },
  ];

  const thematicAreas = [
    {
      id: 1,
      title: "Livelihoods & Economic Empowerment",
      description: "Supporting sustainable livelihoods through skills development, financial inclusion, and entrepreneurship.",
      icon: <FaHandsHelping />
    },
    {
      id: 2,
      title: "Gender Equality & Social Inclusion",
      description: "Promoting gender equality and inclusive participation in all aspects of society.",
      icon: <FaUsers />
    },
    {
      id: 3,
      title: "Youth Development & Leadership",
      description: "Empowering young people with skills, mentorship, and opportunities for leadership.",
      icon: <FaGraduationCap />
    },
    {
      id: 4,
      title: "WASH & Health",
      description: "Improving access to clean water, sanitation, and essential health services.",
      icon: <FaHeartbeat />
    },
    {
      id: 5,
      title: "Climate Resilience & Innovation",
      description: "Building community resilience through climate-smart innovations and practices.",
      icon: <FaLeaf />
    },
    {
      id: 6,
      title: "Emergency Response",
      description: "Providing timely humanitarian assistance during emergencies and disasters.",
      icon: <FaGlobeAfrica />
    }
  ];

  return (
    <>
      <PageBanner 
        title="About Us" 
        subtitle="Learn more about our mission, vision, and the impact we're making in vulnerable communities" 
      />
      
      <AboutSection>
        <SectionContent>
          <TwoColumn>
            <ColumnContent>
              <SectionTitle>Our Story</SectionTitle>
              <SectionText>
                Founded in 2016, Pathway Foundation emerged from a vision to address the pressing needs of vulnerable communities in Tanzania. What began as a small initiative to support youth education has grown into a comprehensive organization working across multiple thematic areas.
              </SectionText>
              <SectionText>
                Over the years, we have established strong partnerships with local communities, government agencies, and international organizations to implement sustainable and impactful programs that address root causes of vulnerability and create pathways to resilience.
              </SectionText>
            </ColumnContent>
            <ColumnContent>
              <AboutImage 
                src="/images/about/about.jpg" // Replace with your image path or URL
                alt="Pathway Foundation team working with communities"
              />
            </ColumnContent>
          </TwoColumn>
        </SectionContent>
      </AboutSection>
      
      <MissionVisionSection>
        <SectionContent>
          <SectionTitle style={{ textAlign: "center", marginBottom: "60px" }}>Mission & Vision</SectionTitle>
          <MissionVisionContainer>
            <MissionVisionCard>
              <MVTitle>Our Mission</MVTitle>
              <MVText>
                To empower vulnerable communities through sustainable, community-led initiatives that foster economic resilience, social inclusion, and environmental stewardship.
              </MVText>
            </MissionVisionCard>
            <MissionVisionCard>
              <MVTitle>Our Vision</MVTitle>
              <MVText>
                A world where every community has the resources, knowledge, and opportunities to thrive, regardless of their circumstances.
              </MVText>
            </MissionVisionCard>
          </MissionVisionContainer>
        </SectionContent>
      </MissionVisionSection>
      
      <ValuesSection>
        <SectionContent>
          <SectionTitle style={{ textAlign: "center", marginBottom: "60px" }}>Our Core Values</SectionTitle>
          <ValuesContainer>
            {values.map(value => (
              <ValueCard key={value.id}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <MVText>{value.description}</MVText>
              </ValueCard>
            ))}
          </ValuesContainer>
        </SectionContent>
      </ValuesSection>
      
      <ThematicAreasSection>
        <SectionContent>
          <SectionTitle style={{ textAlign: "center", marginBottom: "60px" }}>Thematic Areas</SectionTitle>
          <AreasContainer>
            {thematicAreas.map(area => (
              <AreaCard key={area.id}>
                <AreaIcon>{area.icon}</AreaIcon>
                <AreaContent>
                  <AreaTitle>{area.title}</AreaTitle>
                  <AreaText>{area.description}</AreaText>
                </AreaContent>
              </AreaCard>
            ))}
          </AreasContainer>
        </SectionContent>
      </ThematicAreasSection>
      
      <TeamSection>
        <SectionContent>
          <SectionTitle style={{ textAlign: "center", marginBottom: "60px" }}>Our Team</SectionTitle>
          {/* Team members will be added here */}
          <SectionText style={{ textAlign: "center" }}>
            Meet the dedicated individuals behind Pathway Foundation who work tirelessly to create positive change in vulnerable communities.
          </SectionText>
        </SectionContent>
      </TeamSection>
      
      <CallToAction />
    </>
  );
};

export default AboutUs;