import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import components as needed
// import PageHeader from "../components/common/PageHeader";

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: ${props => props.theme?.colors?.primary || "#087FAE"};
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: ${props => props.theme?.colors?.secondary || "#EFB000"};
  }
`;

const SubTitle = styled.h3`
  font-size: 1.6rem;
  color: ${props => props.theme?.colors?.primary || "#087FAE"};
  margin-bottom: 1.2rem;
  margin-top: 3rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #444;
`;

const List = styled.ul`
  margin: 1rem 0 1.5rem 2rem;
  
  li {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 0.5rem;
    color: #444;
  }
`;

const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ValueCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border-top: 4px solid ${props => props.theme?.colors?.primary || "#087FAE"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }
`;

const ValueTitle = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme?.colors?.primary || "#087FAE"};
  margin-bottom: 0.8rem;
`;

const ThematicAreasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ThematicAreaCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${props => props.theme?.colors?.secondary || "#EFB000"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }
`;

const ThematicAreaTitle = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme?.colors?.secondary || "#EFB000"};
  margin-bottom: 0.8rem;
`;

const AboutUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div>
      {/* PageHeader if exists */}
      <SEO
        title="About Us"
        description="Learn about Pathways Foundation for the Poor's mission to uplift impoverished communities in Tanzania through sustainable development programs."
        keywords="about Pathways Foundation, Tanzania charity, poverty alleviation, community development mission"
        canonicalUrl="https://www.pathwaysfoundation.org/about-us"
      />
      <AboutContainer>
        <SectionTitle>About Pathways Foundation for the Poor</SectionTitle>
        
        <SubTitle>Our Story</SubTitle>
        <Paragraph>
          Pathways Foundation for the Poor (PFP) began its journey in East Africa, with Tanzania as its operational base. 
          Registered as a Non-Governmental Organization (NGO) in 2016, PFP has implemented community-driven programs across 
          various zones in Tanzania:
        </Paragraph>
        <List>
          <li>Coastal Zone: Dar es Salaam and Pwani</li>
          <li>Eastern Zone: Morogoro and Tanga</li>
          <li>Central Zone: Dodoma and Singida</li>
          <li>Western Zone: Tabora, Kigoma, Rukwa, and Katavi</li>
        </List>
        <Paragraph>
          Our work spans youth empowerment, gender equality, livelihoods, WASH, and climate resilience, reaching thousands 
          of marginalized individuals, particularly women and girls. In 2024, PFP was officially registered in the United 
          States of America, with its headquarters in Texas, to expand our global presence and strengthen our fundraising 
          and strategic partnerships. This new registration enhances our ability to mobilize resources, engage with international 
          donors, and promote global solidarity for our mission to uplift vulnerable communities. With operations rooted in 
          Tanzania and a growing international platform, PFP remains committed to local impact with global collaboration.
        </Paragraph>
        
        <SubTitle>Our Mission</SubTitle>
        <Paragraph>
          To uplift the lives of impoverished and vulnerable communities by tackling the root causes of poverty, 
          boosting household incomes, and promoting overall social well-being.
        </Paragraph>
        
        <SubTitle>Our Vision</SubTitle>
        <Paragraph>
          A society where every individual, irrespective of gender, realizes their full potential, coexists peacefully, 
          and thrives, leading to the eradication of extreme poverty and the enhancement of social well-being.
        </Paragraph>
        
        <SubTitle>Our Core Values</SubTitle>
        <ValuesContainer>
          <ValueCard 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ValueTitle>Social inclusion</ValueTitle>
            <p>We believe in involving communities to lead their own development.</p>
          </ValueCard>
          
          <ValueCard 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ValueTitle>Empowerment</ValueTitle>
            <p>We offer support initiatives led by youth, women and special groups.</p>
          </ValueCard>
          
          <ValueCard 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ValueTitle>Transparency</ValueTitle>
            <p>We maintain transparency in all our operations and financial management.</p>
          </ValueCard>
          
          <ValueCard 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ValueTitle>Innovation</ValueTitle>
            <p>We embrace innovative approaches to tackle complex social challenges.</p>
          </ValueCard>
          
          <ValueCard 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ValueTitle>Sustainability</ValueTitle>
            <p>We develop solutions that are environmentally and socially sustainable.</p>
          </ValueCard>
          
          <ValueCard 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ValueTitle>Integrity</ValueTitle>
            <p>We uphold the highest standards of integrity in all our actions and decisions.</p>
          </ValueCard>
        </ValuesContainer>
        
        <SubTitle>Thematic Areas</SubTitle>
        <ThematicAreasContainer>
          <ThematicAreaCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ThematicAreaTitle>Livelihoods & Economic Empowerment</ThematicAreaTitle>
            <p>Supporting communities to develop sustainable livelihoods and economic opportunities.</p>
          </ThematicAreaCard>
          
          <ThematicAreaCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ThematicAreaTitle>Gender Equality & Social Inclusion</ThematicAreaTitle>
            <p>Promoting equality, dignity, and opportunity for all community members regardless of gender.</p>
          </ThematicAreaCard>
          
          <ThematicAreaCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ThematicAreaTitle>Youth Development & Leadership</ThematicAreaTitle>
            <p>Empowering young people with skills, knowledge and opportunities to lead change.</p>
          </ThematicAreaCard>
          
          <ThematicAreaCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ThematicAreaTitle>WASH & Health in Communities and Schools</ThematicAreaTitle>
            <p>Improving access to clean water, sanitation facilities, and health education.</p>
          </ThematicAreaCard>
          
          <ThematicAreaCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ThematicAreaTitle>Climate Resilience & Innovation</ThematicAreaTitle>
            <p>Building community resilience to climate change through innovative approaches.</p>
          </ThematicAreaCard>
          
          <ThematicAreaCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ThematicAreaTitle>Emergency Response & Resilience Building</ThematicAreaTitle>
            <p>Supporting communities during emergencies while building long-term resilience.</p>
          </ThematicAreaCard>
        </ThematicAreasContainer>
      </AboutContainer>
    </div>
  );
};

export default AboutUs;