import React from 'react';

const FocusAreas: React.FC = () => {
  const focusAreas = [
    {
      title: 'Livelihoods & Economic Empowerment',
      icon: 'economic-icon.svg',
      description: 'Creating sustainable income opportunities for communities',
      link: '/blog/bodaboda-youth-empowerment-project'
    },
    {
      title: 'Gender Equality & Social Inclusion',
      icon: 'gender-icon.svg',
      description: 'Promoting equity and empowerment for all genders',
      link: '/blog/empowering-adolescent-girls-through-menstrual-justice'
    },
    {
      title: 'Youth Development & Leadership',
      icon: 'youth-icon.svg',
      description: 'Building capacity in young people through mentorship',
      link: '/blog/empowering-youth-through-football'
    },
    {
      title: 'WASH & Health in Communities',
      icon: 'wash-icon.svg',
      description: 'Improving access to clean water and sanitation',
      link: '/blog/mtambani-water-sanitation-hygiene-project'
    },
    {
      title: 'Climate Resilience & Innovation',
      icon: 'climate-icon.svg',
      description: 'Creating sustainable solutions for environmental challenges',
      link: '/blog/mtambani-water-sanitation-hygiene-project'
    },
    {
      title: 'Emergency Response & Resilience',
      icon: 'emergency-icon.svg',
      description: 'Supporting communities during crises and disasters',
      link: '/our-work'
    }
  ];

  return (
    <section className="focus-areas-section">
      <div className="container">
        <h2 className="section-title">Our Focus Areas</h2>
        <div className="focus-areas-grid">
          {focusAreas.map((area, index) => (
            <a href={area.link} key={index} className="focus-area-card">
              <div className="focus-area-icon">
                <img src={`/icons/${area.icon}`} alt={area.title} className="focus-icon" />
              </div>
              <h3 className="focus-area-title">{area.title}</h3>
              <p className="focus-area-description">{area.description}</p>
              <span className="learn-more">Learn More</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;