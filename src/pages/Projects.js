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
  padding: 14px 28px;
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 50px;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(6, 104, 225, 0.05)'};
    color: ${props => props.active ? 'white' : 'var(--primary-color)'};
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  background-color: #f9f9fb;
  padding: 24px;
  border-radius: 16px;
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: var(--text-primary);
  font-weight: 600;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 50px;
  background-color: ${props => props.active ? 'rgba(6, 104, 225, 0.1)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 40px;
  color: var(--text-secondary);
  background-color: #f9f9fb;
  border-radius: 16px;
  margin-top: 40px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
    color: var(--text-primary);
    font-weight: 700;
  }
  
  p {
    font-size: 1.05rem;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const StyledCard = styled(Card)`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
  
  img {
    border-radius: 0;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
  
  .card-body {
    padding: 24px;
  }
  
  h5 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--text-primary);
    line-height: 1.3;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 24px;
  }
  
  a {
    display: inline-block;
    color: white;
    font-weight: 600;
    text-decoration: none;
    padding: 12px 24px;
    background-color: var(--primary-color);
    border-radius: 8px;
    transition: all 0.3s ease;
    text-align: center;
    box-shadow: 0 4px 12px rgba(6, 104, 225, 0.2);
  }
  
  a:hover {
    background-color: #0559c9;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(6, 104, 225, 0.25);
  }
`;

const Projects = () => {
  // These would typically come from an API
  const projects = [
    {
      id: 1,
      title: "Empowering Youth Through Football",
      description: "This initiative uses football as a transformative tool to promote child rights, gender equality, school engagement, and environmental stewardship. The project aims to improve school attendance and learning outcomes, foster inclusive participation regardless of gender, and enhance children's physical and mental well-being.",
      image: "/images/supplying_jerseys/football.jpg",
      link: "/projects/current/empowering-youth-through-football",
      imageAlt: "Youth playing football",
      status: "current",
      category: "youth-development"
    },
    {
      id: 4,
      title: "Bodaboda Youth Empowerment Project (BOYEP)",
      description: "The Bodaboda Youth Empowerment Project (BOYEP) aimed to empower Bodaboda youth by strengthening their leadership, advocacy, and financial management skills. Through a Community-Based Trainer (CBT) model, the project trained over 1,000 individuals.",
      image: "/images/boeyp.jpg",
      link: "/projects/past/bodaboda-youth-empowerment-project",
      imageAlt: "Youth in vocational training workshop",
      status: "past",
      category: "economic-empowerment"
    },
    {
      id: 5,
      title: "Mtambani Water, Sanitation and Hygiene Project",
      description: "The Mtambani WASH Project aims to improve hygiene and sanitation conditions in marginalized primary schools, with a special focus on addressing waterborne diseases and supporting girls' menstrual hygiene.",
      image: "/images/mtambani_project.jpg",
      link: "/projects/past/mtambani-water-sanitation-hygiene-project",
      imageAlt: "Clean water access point in Mtambani",
      status: "past",
      category: "wash-health"
    }
  ];

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "economic-empowerment", name: "Economic Empowerment" },
    { id: "youth-development", name: "Youth Development" },
    { id: "wash-health", name: "WASH & Health" }
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
                <StyledCard 
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