import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import Card from "../components/ui/Card";
import CallToAction from "../components/sections/CallToAction";

const ProjectsSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProjectsNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const NavButton = styled(Link)`
  padding: 12px 24px;
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 30px;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(6, 104, 225, 0.05)'};
    color: ${props => props.active ? 'white' : 'var(--primary-color)'};
  }
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

const FilterContainer = styled.div`
  margin-bottom: 40px;
`;

const FilterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
  color: var(--text-primary);
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 20px;
  background-color: ${props => props.active ? 'rgba(6, 104, 225, 0.1)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 0;
  color: var(--text-secondary);
  
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: var(--text-primary);
  }
  
  p {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const Projects = () => {
  // These would typically come from an API
  const projects = [
    {
      id: 1,
      title: "Empowering Youth Through Football",
      description: "Using football as a tool for youth development, leadership training, and community building in vulnerable areas.",
      image: "/images/supplying_jerseys/football.jpg",
      link: "/projects/current/empowering-youth-through-football",
      imageAlt: "Youth playing football",
      status: "current",
      category: "youth-development"
    },
    {
      id: 2,
      title: "Menstrual Justice Initiative",
      description: "Breaking the stigma around menstruation and providing menstrual products to school girls to reduce absenteeism.",
      image: "/images/menstrual.jpg",
      link: "/projects/current/menstrual-justice",
      imageAlt: "Girls in a classroom",
      status: "current",
      category: "gender-equality"
    },
    {
      id: 3,
      title: "Community Climate Resilience",
      description: "Building climate resilience through community-based adaptation strategies and sustainable practices.",
      image: "/images/climate_resilience.jpg",
      link: "/projects/current/climate-resilience",
      imageAlt: "Community garden project",
      status: "current",
      category: "climate-resilience"
    },
    {
      id: 4,
      title: "BOYEP",
      description: "Building Opportunities for Youth Economic Participation program that helped young people develop vocational skills.",
      image: "/images/boeyp.jpg",
      link: "/projects/past/boyep",
      imageAlt: "Youth in vocational training workshop",
      status: "past",
      category: "economic-empowerment"
    },
    {
      id: 5,
      title: "Mtambani WASH",
      description: "Water, Sanitation and Hygiene initiative that provided clean water access to over 5,000 residents.",
      image: "/images/mtambani_project.jpg",
      link: "/projects/past/mtambani-wash",
      imageAlt: "Clean water access point in Mtambani",
      status: "past",
      category: "wash-health"
    },
    {
      id: 6,
      title: "Women's Microenterprise Network",
      description: "Supporting women entrepreneurs through business training, microloans, and market access.",
      image: "/images/women.JPG",
      link: "/projects/past/women-microenterprise",
      imageAlt: "Women entrepreneurs displaying products",
      status: "past",
      category: "economic-empowerment"
    }
  ];

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "economic-empowerment", name: "Economic Empowerment" },
    { id: "gender-equality", name: "Gender Equality" },
    { id: "youth-development", name: "Youth Development" },
    { id: "wash-health", name: "WASH & Health" },
    { id: "climate-resilience", name: "Climate Resilience" }
  ];

  const [activeStatus, setActiveStatus] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(project => {
    if (activeStatus !== "all" && project.status !== activeStatus) return false;
    if (activeCategory !== "all" && project.category !== activeCategory) return false;
    return true;
  });

  return (
    <>
      <PageBanner 
        title="Our Projects" 
        subtitle="Explore our current and past initiatives making a difference in communities" 
      />
      
      <ProjectsSection>
        <SectionContent>
          <ProjectsNav>
            <NavButton 
              to="/projects" 
              active={activeStatus === "all"} 
              onClick={() => setActiveStatus("all")}
            >
              All Projects
            </NavButton>
            <NavButton 
              to="/projects/current" 
              active={activeStatus === "current"}
              onClick={() => setActiveStatus("current")}
            >
              Current Projects
            </NavButton>
            <NavButton 
              to="/projects/past" 
              active={activeStatus === "past"}
              onClick={() => setActiveStatus("past")}
            >
              Past Projects
            </NavButton>
          </ProjectsNav>
          
          <FilterContainer>
            <FilterTitle>Filter by Category:</FilterTitle>
            <FilterOptions>
              {categories.map(category => (
                <FilterButton 
                  key={category.id} 
                  active={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </FilterButton>
              ))}
            </FilterOptions>
          </FilterContainer>
          
          {filteredProjects.length > 0 ? (
            <ProjectsGrid>
              {filteredProjects.map(project => (
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
          ) : (
            <NoResults>
              <h3>No Projects Found</h3>
              <p>
                We couldn&apos;t find any projects matching your selected filters. Please try a different combination or view all projects.
              </p>
            </NoResults>
          )}
        </SectionContent>
      </ProjectsSection>
      
      <CallToAction />
    </>
  );
};

export default Projects;