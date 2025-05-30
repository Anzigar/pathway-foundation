import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ProjectsList from '../components/Projects/ProjectsList';

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <PageHeader 
        title="Our Projects" 
        subtitle="Discover the impactful initiatives we're working on to uplift communities"
      />
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;
