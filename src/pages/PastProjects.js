import React from "react";
import styled from "styled-components";
import PageBanner from "../components/ui/PageBanner";
import Card from "../components/ui/Card";
import CallToAction from "../components/sections/CallToAction";

/**
 * PastProjects - Component for displaying completed projects
 * @returns {JSX.Element} The PastProjects component
 */
const PastProjects = () => {
  // Mock data for past projects
  const pastProjects = [
    {
      id: 1,
      title: "BOYEP",
      description: "Building Opportunities for Youth Economic Participation program that helped young people develop vocational skills.",
      image: "/images/hero.jpg",
      link: "/projects/past/boyep",
      imageAlt: "Youth in vocational training workshop",
      completion: "2021"
    },
    {
      id: 2,
      title: "Mtambani WASH",
      description: "Water, Sanitation and Hygiene initiative that provided clean water access to over 5,000 residents.",
      image: "/images/projects/mtambani-wash.jpg",
      link: "/projects/past/mtambani-wash",
      imageAlt: "Clean water access point in Mtambani",
      completion: "2020"
    },
    {
      id: 3,
      title: "Women's Microenterprise Network",
      description: "Supporting women entrepreneurs through business training, microloans, and market access.",
      image: "/images/hero.jpg",
      link: "/projects/past/women-microenterprise",
      imageAlt: "Women entrepreneurs displaying products",
      completion: "2019"
    },
    {
      id: 4,
      title: "School Infrastructure Improvement",
      description: "Renovated and equipped classrooms and facilities at three primary schools in rural communities.",
      image: "/images/projects/school-infrastructure.jpg",
      link: "/projects/past/school-infrastructure",
      imageAlt: "Renovated school building",
      completion: "2018"
    }
  ];

  return (
    <>
      <PageBanner 
        title="Past Projects" 
        subtitle="Completed initiatives that have created lasting impact in communities" 
      />
      
      <ProjectsSection>
        <SectionContent>
          <ProjectsGrid>
            {pastProjects.map(project => (
              <Card 
                key={project.id}
                title={`${project.title} (${project.completion})`}
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

export default PastProjects;