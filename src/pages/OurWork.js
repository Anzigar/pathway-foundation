import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OurWorkContainer = styled.div`
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
  margin-top: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #444;
`;

const ThematicAreasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ThematicAreaCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
    z-index: 1;
  }
`;

const CardTitle = styled.h4`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1.2rem;
  color: white;
  font-size: 1.3rem;
  z-index: 2;
  margin: 0;
  width: 100%;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardDescription = styled.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const LearnMoreButton = styled(Link)`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: ${props => props.theme?.colors?.primary || "#087FAE"};
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme?.colors?.secondary || "#EFB000"};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled(ThematicAreasGrid)`
  margin-bottom: 4rem;
`;

const CompletedProjectCard = styled(ThematicAreaCard)`
  position: relative;
  
  &::after {
    content: 'Completed';
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #27ae60;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 3;
  }
`;

const OurWork = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const completedProjects = [
    {
      id: 1,
      title: "Bodaboda Youth Empowerment Project",
      description: "Empowered youth through motorcycle taxi business training, providing sustainable livelihoods for over 200 young people in Dar es Salaam. The project included skills training, safety workshops, and microfinance opportunities.",
      image: "/images/bodaboda-project.jpg",
      link: "/projects/bodaboda-youth-empowerment", // Updated path
      location: "Dar es Salaam, Tanzania"
    },
    {
      id: 2,
      title: "Empowering Adolescent Girls Through Menstrual Justice",
      description: "Improved menstrual health management for over 5,000 adolescent girls in rural Tanzania by providing education, reusable sanitary products, and community awareness campaigns to reduce stigma and school absenteeism.",
      image: "/images/menstrual-justice.jpg",
      link: "/projects/menstrual-justice", // Updated path
      location: "Morogoro, Tanzania"
    },
    {
      id: 3,
      title: "Youth Through Football Project",
      description: "Used football as a vehicle for youth development, reaching 500+ young people with life skills training, health education, and leadership opportunities through organized sports activities and tournaments.",
      image: "/images/football-project.jpg",
      link: "/projects/youth-football", // Updated path
      location: "Dodoma, Tanzania"
    },
    {
      id: 4,
      title: "Mtambani Water, Sanitation and Hygiene Project",
      description: "Improved water access and sanitation for 10,000+ community members by constructing water points, latrines in schools, and training community members on hygiene practices and sustainable water management.",
      image: "/images/wash-project.jpg",
      link: "/projects/mtambani-wash", // Updated path
      location: "Kigoma, Tanzania"
    }
  ];

  const thematicAreas = [
    {
      id: 1,
      title: "Livelihoods & Economic Empowerment",
      description: "We work with communities to develop sustainable livelihoods through skills training, access to markets, and financial inclusion. Our projects focus on creating economic opportunities that lead to improved household incomes and financial resilience.",
      image: "/images/livelihoods.jpg",
      link: "/projects/bodaboda-youth-empowerment"
    },
    {
      id: 2,
      title: "Gender Equality & Social Inclusion",
      description: "We promote gender equality and social inclusion through initiatives that address barriers faced by women, girls, and marginalized groups. Our work focuses on creating equal access to resources, opportunities, and decision-making power.",
      image: "/images/gender-equality.jpg",
      link: "/projects/menstrual-justice"
    },
    {
      id: 3,
      title: "Youth Development & Leadership",
      description: "We empower young people to become agents of change in their communities through leadership development, skills training, and meaningful participation in community initiatives and decision-making processes.",
      image: "/images/youth-development.jpg",
      link: "/projects/youth-football"
    },
    {
      id: 4,
      title: "WASH & Health in Communities and Schools",
      description: "We improve access to clean water, sanitation, and hygiene (WASH) services in communities and schools. Our projects focus on infrastructure development, behavior change, and sustainable management of WASH facilities.",
      image: "/images/wash.jpg",
      link: "/projects/mtambani-wash"
    },
    {
      id: 5,
      title: "Climate Resilience & Innovation",
      description: "We build community resilience to climate change through innovative approaches that address environmental challenges, promote sustainable natural resource management, and support adaptation to changing climate conditions.",
      image: "/images/climate.jpg",
      link: "/projects/mtambani-wash"
    },
    {
      id: 6,
      title: "Emergency Response & Resilience Building",
      description: "We provide timely assistance to communities affected by disasters while building long-term resilience through disaster risk reduction, preparedness, and community-based early warning systems.",
      image: "/images/emergency.jpg",
      link: "/projects"
    }
  ];
  
  return (
    <div>
      {/* Uncomment if PageHeader component exists */}
      {/* <PageHeader title="Our Work" background="/images/our-work-bg.jpg" /> */}
      
      <OurWorkContainer>
        <SectionTitle>Our Work</SectionTitle>
        
        <Paragraph>
          At Pathways Foundation for the Poor, we implement community-driven programs that address the root causes 
          of poverty and promote sustainable development. Our work spans across various thematic areas, all aimed at 
          uplifting impoverished and vulnerable communities.
        </Paragraph>
        
        <SubTitle>Completed Projects</SubTitle>
        <Paragraph>
          We have successfully implemented various projects across Tanzania, each addressing specific community needs 
          and delivering measurable impact. Here are some of our completed projects:
        </Paragraph>
        
        <ProjectsGrid>
          {completedProjects.map((project, index) => (
            <CompletedProjectCard
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardImage image={project.image}>
                <CardTitle>{project.title}</CardTitle>
              </CardImage>
              <CardContent>
                <p style={{ fontSize: '0.85rem', color: '#087FAE', marginBottom: '0.5rem' }}>
                  <strong>Location:</strong> {project.location}
                </p>
                <CardDescription>{project.description}</CardDescription>
                <LearnMoreButton to={project.link}>View Project</LearnMoreButton>
              </CardContent>
            </CompletedProjectCard>
          ))}
        </ProjectsGrid>
        
        <SubTitle>Our Approach</SubTitle>
        <Paragraph>
          We believe in a community-led approach to development, where local communities are actively involved in 
          identifying their needs, planning solutions, and implementing projects. Through partnerships with local 
          and international organizations, we leverage resources and expertise to create lasting impact in the 
          communities we serve.
        </Paragraph>
        
        <SubTitle>Focus Areas</SubTitle>
        <ThematicAreasGrid>
          {thematicAreas.map((area, index) => (
            <ThematicAreaCard
              key={area.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardImage image={area.image}>
                <CardTitle>{area.title}</CardTitle>
              </CardImage>
              <CardContent>
                <CardDescription>{area.description}</CardDescription>
                <LearnMoreButton to={area.link}>Learn More</LearnMoreButton>
              </CardContent>
            </ThematicAreaCard>
          ))}
        </ThematicAreasGrid>
      </OurWorkContainer>
    </div>
  );
};

export default OurWork;