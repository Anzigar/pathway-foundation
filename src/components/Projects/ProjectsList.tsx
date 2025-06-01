import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsList.css'; // Import the CSS file

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
          summary: 'This initiative uses football as a transformative tool to promote child rights, gender equality, school engagement, and environmental stewardship. The project aims to improve school attendance and learning outcomes, foster inclusive participation regardless of gender, and enhance children\'s physical and mental well-being. Core activities include football training at Bunju A and B Primary Schools, safe spaces for dialogue, community sensitization events, and the distribution of sports equipment.',
          image: '/images/supplying_jerseys/football.jpg',
          slug: 'empowering-youth-through-football',
          status: 'Current'
        }
      ]);
      setPastProjects([
        {
          title: 'Bodaboda Youth Empowerment Project (BOYEP)',
          summary: 'The Bodaboda Youth Empowerment Project (BOYEP) aimed to empower Bodaboda youth by strengthening their leadership, advocacy, and financial management skills. Through a Community-Based Trainer (CBT) model, the project is expected to train over 1,000 individuals\' beneficiaries. Furthermore, in completion of this project PFP should have achieved the formation and registration of at least 5 Motorcycle (Bodaboda) associations, to enable access to low-interest loans and group economic investments such as motorcycle purchases.',
          image: '/images/boeyp.jpg',
          slug: 'bodaboda-youth-empowerment-project',
          status: 'Past'
        },
        {
          title: 'Mtambani Water, Sanitation and Hygiene Project',
          summary: 'The Mtambani WASH Project aims to improve hygiene and sanitation conditions in marginalized primary schools, with a special focus on addressing waterborne diseases and supporting girls\' menstrual hygiene. Key interventions include constructing pit latrines, installing water systems, and training stakeholders in hygiene practices. School Health Clubs will be established, and local women will be trained in making sanitary pads - providing both empowerment and economic opportunity.',
          image: '/images/mtambani_project.jpg',
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
                  <Link to={`/projects/${project.status.toLowerCase()}/${project.slug}`} className="project-link">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects-container">
            <div className="no-projects">
              {/* <FontAwesomeIcon icon={faProjectDiagram} className="no-data-icon" /> */}
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
                  <Link to={`/projects/${project.status.toLowerCase()}/${project.slug}`} className="project-link">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects-container">
            <div className="no-projects">
              {/* <FontAwesomeIcon icon={faProjectDiagram} className="no-data-icon" /> */}
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
