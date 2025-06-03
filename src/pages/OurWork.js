import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const PageContainer = styled.div`
  max-width: 100%;
`;

const HeroSection = styled.div`
  background: linear-gradient(to right, rgba(8, 127, 174, 0.9), rgba(8, 127, 174, 0.7)), 
              url('/images/work-hero-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
  color: #fff;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #087FAE;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StorySection = styled.div`
  margin-bottom: 5rem;
`;

const StoryHeading = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #087FAE;
  margin: 2rem 0 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 3px;
    background-color: #EFB000;
  }
`;

const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
`;

const ZonesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ZoneCard = styled.div`
  background-color: #f9f9f9;
  border-left: 4px solid #087FAE;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    border-left-color: #EFB000;
  }
`;

const ZoneTitle = styled.h4`
  color: #087FAE;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectsSection = styled.div`
  margin-bottom: 4rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectStatus = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${props => props.status === 'Current' ? '#27ae60' : '#e67e22'};
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const ProjectContent = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  color: #087FAE;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.9rem;
`;

const MetaIcon = styled.span`
  margin-right: 0.5rem;
  color: #EFB000;
`;

const ProjectDescription = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ViewProjectButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: #087FAE;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  align-self: flex-start;
  transition: all 0.3s ease;
  
  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: #EFB000;
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const OurWork = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const zones = [
    { 
      title: "Coastal Zone", 
      locations: "Dar es Salaam and Pwani"
    },
    { 
      title: "Eastern Zone", 
      locations: "Morogoro and Tanga"
    },
    { 
      title: "Central Zone", 
      locations: "Dodoma and Singida"
    },
    { 
      title: "Western Zone", 
      locations: "Tabora, Kigoma, Rukwa, and Katavi"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Bodaboda Youth Empowerment Project (BOYEP)",
      description: "Empowered youth through motorcycle taxi business training, providing sustainable livelihoods for over 200 young people in Dar es Salaam. The project included skills training, safety workshops, and microfinance opportunities.",
      image: "/images/education.jpg",
      // link: "/projects/bodaboda-youth-empowerment",
      location: "Dar es Salaam, Tanzania",
      status: "Past",
      year: "2018-2020"
    },
    {
      id: 2,
      title: "Empowering Youth Through Football",
      description: "Used football as a vehicle for youth development, reaching 500+ young people with life skills training, health education, and leadership opportunities through organized sports activities and tournaments.",
      image: "/images/hero-3.jpg",
      // link: "/projects/youth-football",
      location: "Dodoma, Tanzania",
      status: "Current",
      year: "2022-Present"
    },
    {
      id: 3,
      title: "Mtambani Water, Sanitation and Hygiene Project",
      description: "Improved water access and sanitation for 10,000+ community members by constructing water points, latrines in schools, and training community members on hygiene practices and sustainable water management.",
      image: "/images/clean_water.jpg",
      // link: "/projects/mtambani-wash",
      location: "Kigoma, Tanzania",
      status: "Past",
      year: "2019-2021"
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Our Work</HeroTitle>
        <HeroSubtitle>
          Making a lasting impact in communities across Tanzania
        </HeroSubtitle>
      </HeroSection>

      <ContentContainer>
        <StorySection>
          <SectionTitle>Our Journey of Impact</SectionTitle>
          
          <StoryHeading>Our Story</StoryHeading>
          <StoryText>
            Pathways Foundation for the Poor (PFP) began its journey in East Africa, with Tanzania as its operational base. 
            Registered as a Non-Governmental Organization (NGO) in 2006, PFP has implemented community-driven programs across 
            various zones in Tanzania:
          </StoryText>
          
          <ZonesGrid>
            {zones.map((zone, index) => (
              <ZoneCard key={index}>
                <ZoneTitle>{zone.title}</ZoneTitle>
                <p>{zone.locations}</p>
              </ZoneCard>
            ))}
          </ZonesGrid>
          
          <StoryText>
            Our work spans youth empowerment, gender equality, livelihoods, WASH, and climate resilience, reaching thousands 
            of marginalized individuals, particularly women and girls. In 2024, PFP was officially registered in the United 
            States of America, with its headquarters in Texas, to expand our global presence and strengthen our fundraising 
            and strategic partnerships. This new registration enhances our ability to mobilize resources, engage with international 
            donors, and promote global solidarity for our mission to uplift vulnerable communities. With operations rooted in 
            Tanzania and a growing international platform, PFP remains committed to local impact with global collaboration.
          </StoryText>
        </StorySection>

        <ProjectsSection>
          <StoryHeading>Our Projects</StoryHeading>
          <StoryText>
            We implement community-driven initiatives that create lasting positive change. 
            Each project addresses critical needs while building local capacity and resilience.
          </StoryText>
          
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectImageContainer>
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectStatus status={project.status}>
                    {project.status}
                  </ProjectStatus>
                </ProjectImageContainer>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  
                  <ProjectMeta>
                    <MetaIcon>
                      <FaMapMarkerAlt />
                    </MetaIcon>
                    {project.location}
                  </ProjectMeta>
                  
                  <ProjectMeta>
                    <MetaIcon>
                      <FaCalendarAlt />
                    </MetaIcon>
                    {project.year}
                  </ProjectMeta>
                  
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ViewProjectButton to={project.link}>
                    View Details <FaArrowRight />
                  </ViewProjectButton>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsSection>
      </ContentContainer>
    </PageContainer>
  );
};

export default OurWork;