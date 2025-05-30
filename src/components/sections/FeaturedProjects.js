import React from "react";
import styled from "styled-components";
import Card from "../ui/Card";
import Button from "../ui/Button";
import MetaIcons from "../ui/MetaIcons";

const SectionContainer = styled.section`
  padding: 100px 0;
  background-color: var(--background-light);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  color: #000000;
  margin-bottom: 16px;
  font-weight: 700;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #000000;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  svg {
    margin-left: var(--spacing-sm);
    transition: transform var(--transition-fast);
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const StyledButton = styled(Button)`
  color: #000000;
  
  &:hover {
    color: #000000;
  }
`;

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "BOYEP",
      description: "Building Opportunities for Youth Economic Participation program helps young people develop vocational skills and find sustainable employment opportunities.",
      image: "/images/boeyp.jpg",
      link: "/projects/past/boyep",
      imageAlt: "Youth in vocational training workshop"
    },
    {
      id: 2,
      title: "Mtambani WASH",
      description: "Our Water, Sanitation and Hygiene initiative in the Mtambani community has provided clean water access to over 5,000 residents.",
      image: "/images/mtambani_project.jpg",
      link: "/projects/past/mtambani-wash",
      imageAlt: "Clean water access point in Mtambani"
    },
    {
      id: 3,
      title: "Youth Football Initiative",
      description: "Using football as a tool for youth development, leadership training, and community building in vulnerable areas.",
      image: "/images/supplying_jerseys/football.jpg",
      link: "/projects/current/empowering-youth-through-football",
      imageAlt: "Youth playing football"
    }
  ];

  return (
    <SectionContainer>
      <SectionContent>
        <SectionHeader>
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionDescription>
            Our initiatives focus on creating sustainable change through community-led approaches
          </SectionDescription>
        </SectionHeader>
        <ProjectsGrid>
          {projects.map(project => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              link={project.link}
            />
          ))}
        </ProjectsGrid>
        <ButtonContainer>
          <StyledButton to="/projects" variant="primary" size="medium">
            View all projects
            <MetaIcons.ArrowRight />
          </StyledButton>
        </ButtonContainer>
      </SectionContent>
    </SectionContainer>
  );
};

export default FeaturedProjects;