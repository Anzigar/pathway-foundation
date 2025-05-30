import React from "react";
import styled from "styled-components";
import PageBanner from "../components/ui/PageBanner";
import Card from "../components/ui/Card";
import CallToAction from "../components/sections/CallToAction";

/**
 * CurrentProjects - Component for displaying current active projects
 * @returns {JSX.Element} The CurrentProjects component
 */
const CurrentProjects = () => {
  // Mock data for current projects
  const currentProjects = [
    {
      id: 1,
      title: "Empowering Youth Through Football",
      description: "Using football as a tool for youth development, leadership training, and community building in vulnerable areas.",
      image: "/images/supplying_jerseys/football.jpg",
      // link: "/projects/current/empowering-youth-through-football",
      imageAlt: "Youth playing football"
    },
    {
      id: 2,
      title: "Menstrual Justice Initiative",
      description: "Breaking the stigma around menstruation and providing menstrual products to school girls to reduce absenteeism.",
      image: "/images/hero.jpg",
      link: "/projects/current/menstrual-justice",
      imageAlt: "Girls in a classroom"
    },
    {
      id: 3,
      title: "Community Climate Resilience",
      description: "Building climate resilience through community-based adaptation strategies and sustainable practices.",
      image: "/images/hero.jpg",
      link: "/projects/current/climate-resilience",
      imageAlt: "Community garden project"
    }
  ];

  return (
    <>
      <PageBanner 
        title="Current Projects" 
        subtitle="Our ongoing initiatives creating sustainable change in vulnerable communities" 
      />
      
      <ProjectsSection>
        <SectionContent>
          <ProjectsGrid>
            {currentProjects.map(project => (
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
        </SectionContent>
      </ProjectsSection>
      
      <CallToAction />
    </>
  );
};

// Styled components
const ProjectsSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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

export default CurrentProjects;