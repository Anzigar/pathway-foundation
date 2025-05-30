import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

// Define the Project type
interface Project {
  title: string;
  summary: string;
  image: string;
  slug: string;
  status: 'Current' | 'Past';
}

const ProjectsList: React.FC = () => {
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const [pastProjects, setPastProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setCurrentProjects([
        {
          title: 'Empowering Youth Through Football',
          summary: 'Using sports as a tool for youth leadership development and community building.',
          image: '/images/football-project.jpg',
          slug: 'empowering-youth-through-football',
          status: 'Current'
        },
        {
          title: 'Empowering Adolescent Girls Through Menstrual Justice',
          summary: 'Addressing period poverty and promoting menstrual health education for adolescent girls.',
          image: '/images/menstrual-justice.jpg',
          slug: 'empowering-adolescent-girls-through-menstrual-justice',
          status: 'Current'
        }
      ]);
      setPastProjects([
        {
          title: 'Bodaboda Youth Empowerment Project (BOYEP)',
          summary: 'Creating sustainable livelihoods for young motorcycle taxi operators through skills development and financial literacy.',
          image: '/images/bodaboda-project.jpg',
          slug: 'bodaboda-youth-empowerment-project',
          status: 'Past'
        },
        {
          title: 'Mtambani Water, Sanitation and Hygiene Project',
          summary: 'Improving access to clean water and sanitation facilities in rural communities.',
          image: '/images/mtambani-wash.jpg',
          slug: 'mtambani-water-sanitation-hygiene-project',
          status: 'Past'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading projects...</div>;
  }

  return (
    <div className="projects-section">
      <div className="container">
        <h2 className="section-title">Current Projects</h2>
        {currentProjects.length > 0 ? (
          <div className="projects-grid">
            {currentProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="project-status current">{project.status}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <a href={`/projects/${project.slug}`} className="project-link">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects-container">
            <div className="no-projects">
              <FontAwesomeIcon icon={faProjectDiagram} className="no-data-icon" />
              <h3>No Current Projects</h3>
              <p>There are currently no active projects. Please check our past projects below.</p>
            </div>
          </div>
        )}

        <h2 className="section-title mt-5">Past Projects</h2>
        {pastProjects.length > 0 ? (
          <div className="projects-grid">
            {pastProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="project-status past">{project.status}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <a href={`/projects/${project.slug}`} className="project-link">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects-container">
            <div className="no-projects">
              <FontAwesomeIcon icon={faProjectDiagram} className="no-data-icon" />
              <h3>No Past Projects</h3>
              <p>There are no completed projects to display at this time.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;
