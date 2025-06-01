import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../shared/PageHeader';
//import from pages contactpage.tsx
import './ProjectDetail.css';

interface ProjectDetailProps {
  title: string;
  status: 'Current' | 'Past';
  funder: string;
  duration: string;
  implementationArea: string;
  targetGroup: string;
  focusArea: string;
  overview: string;
  role: string;
  image: string;
}

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetailProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // Here we're simulating loading the project data based on slug
    setTimeout(() => {
      // Hardcoded project data based on projectsection.txt
      const projectsData: { [key: string]: ProjectDetailProps } = {
        'empowering-youth-through-football': {
          title: 'Empowering Youth Through Football',
          status: 'Current',
          funder: 'Embassy of Ireland – HoM Fund (Irish Aid contributes €10,800 out of a total project cost of €14,260)',
          duration: 'Jan 2025-December 2025',
          implementationArea: 'Bunju Ward, Kinondoni Municipality, Dar es Salaam, Tanzania',
          targetGroup: 'Schoolchildren aged 8-17',
          focusArea: 'Child Rights, Gender Equality, Education, Sports for Development, Environmental Sustainability',
          overview: 'This initiative uses football as a transformative tool to promote child rights, gender equality, school engagement, and environmental stewardship. The project aims to improve school attendance and learning outcomes, foster inclusive participation regardless of gender, and enhance children\'s physical and mental well-being. Core activities include football training at Bunju A and B Primary Schools, safe spaces for dialogue, community sensitization events, and the distribution of sports equipment. Environmental education and clean-up actions will also be integrated into sports events.',
          role: 'Pathways Foundation for the Poor (PFP) is committed to empowering youth through innovative, community-centered approaches. Using football as a platform, PFP will work closely with local leaders, teachers, and parents to foster a safe, inclusive, and nurturing environment for children. Through participatory monitoring and community engagement, PFP aims to build strong foundations for child protection and create a scalable model for youth empowerment.',
          image: '/images/supplying_jerseys/football.jpg'
        },
        'bodaboda-youth-empowerment-project': {
          title: 'Bodaboda Youth Empowerment Project (BOYEP)',
          status: 'Past',
          funder: 'Embassy of Netherland through VOICE Tanzania',
          duration: 'September 2019 - September 2020',
          implementationArea: 'Kinondoni Municipality, Dar es Salaam',
          targetGroup: 'Motorcycles (Bodaboda) drivers and Association Leaders across Kinondoni and Ilala Municipalities, Dar es Salaam',
          focusArea: 'Youth Empowerment, Livelihoods, Financial Inclusion, Leadership Development, and Social Protection',
          overview: 'The Bodaboda Youth Empowerment Project (BOYEP) aimed to empower Bodaboda youth by strengthening their leadership, advocacy, and financial management skills. Through a Community-Based Trainer (CBT) model, the project is expected to train over 1,000 individuals\' beneficiaries. Furthermore, in completion of this project PFP should have achieved the formation and registration of at least 5 Motorcycle (Bodaboda) associations, to enable access to low-interest loans and group economic investments such as motorcycle purchases. It should also initiate linkages to health insurance and encouraged income diversification like vegetable farming for the beneficiaries.',
          role: 'Pathways Foundation for the Poor (PFP) will lead the implementation of BOYEP with a firm belief in empowering youth as agents of change. Through a participatory CBT approach, PFP will ensure wide-reaching impact and sustainability. PFP will continue to advocate for scalable youth empowerment programs and is generally committed to expanding successful models like BOYEP to other regions across Tanzania.',
          image: '/images/boeyp.jpg'
        },
        'mtambani-water-sanitation-hygiene-project': {
          title: 'Mtambani Water, Sanitation and Hygiene Project',
          status: 'Past',
          funder: 'IDAY International in partnership with the Elisabeth and Emile Fund',
          duration: 'October 2019-October 2020',
          implementationArea: 'Mtambani and Kiharaka Primary Schools, Bagamoyo District, Pwani Region, Tanzania',
          targetGroup: 'Children at school and households in designated project areas',
          focusArea: 'Water, Sanitation and Hygiene (WASH), Menstrual Hygiene for Girls and Community Health',
          overview: 'The Mtambani WASH Project aims to improve hygiene and sanitation conditions in marginalized primary schools, with a special focus on addressing waterborne diseases and supporting girls\' menstrual hygiene. Key interventions include constructing pit latrines, installing water systems, and training stakeholders in hygiene practices. School Health Clubs will be established, and local women will be trained in making sanitary pads - providing both empowerment and economic opportunity.',
          role: 'Pathways Foundation for the Poor (PFP) is committed to creating lasting community impact through inclusive planning, capacity building, and participatory implementation. Through involving local government, school committees, and households, PFP will ensure the sustainability of the interventions. Despite seasonal challenges, innovative solutions like water pumps will be employed to maintain progress and foster long-term ownership and impact.',
          image: '/images/mtambani_project.jpg'
        }
      };
      
      if (slug && projectsData[slug]) {
        setProject(projectsData[slug]);
      }
      setLoading(false);
    }, 1000);
  }, [slug]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>Project Not Found</h2>
          <p>We couldn't find the project you're looking for. It may have been moved or doesn't exist.</p>
          <Link to="/projects" className="btn btn-primary">
            ← Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <PageHeader title={project.title} subtitle={project.status === 'Current' ? 'Current Project' : 'Past Project'} />
      
      <div className="container my-5">
        <div className="breadcrumb-nav mb-4">
          <Link to="/projects" className="back-to-projects">
            ← Back to Projects
          </Link>
        </div>
        
        <div className="project-detail-container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="project-detail-image">
                <img src={project.image} alt={project.title} className="img-fluid" />
                <span className={`project-status-badge ${project.status === 'Current' ? 'current' : 'past'}`}>
                  {project.status} Project
                </span>
              </div>
              
              <div className="project-detail-content">
                <h2 className="section-heading">Project Overview</h2>
                <p className="section-text">{project.overview}</p>
                
                <h2 className="section-heading">Our Role & Commitment</h2>
                <p className="section-text">{project.role}</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="project-info-section">
                <h3>Project Information</h3>
                
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Funded by</span>
                    <span className="info-value">{project.funder}</span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">Duration</span>
                    <span className="info-value">{project.duration}</span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">Location</span>
                    <span className="info-value">{project.implementationArea}</span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">Target Group</span>
                    <span className="info-value">{project.targetGroup}</span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">Focus Areas</span>
                    <span className="info-value">{project.focusArea}</span>
                  </div>
                </div>
              </div>
              
              <div className="project-actions">
                <h4>Support This Project</h4>
                <p>Join us in making a meaningful impact in communities.</p>
                <div className="action-buttons">
                  <div className="row">
                    <div className="col-6 pe-1">
                      <Link to="/donate" className="btn btn-primary w-100">Donate</Link>
                    </div>
                    <div className="col-6 ps-1">
                      <Link to="/contact-us" className="btn btn-outline-primary w-100">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="related-projects">
          <Link to="/projects" className="btn btn-outline-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
