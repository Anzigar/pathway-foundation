import React from 'react';

const ThematicAreas: React.FC = () => {
  const thematicAreas = [
    {
      title: 'Livelihoods & Economic Empowerment',
      description: 'Creating sustainable income opportunities and economic resilience for vulnerable communities.',
      image: '/images/livelihoods.jpg',
      link: '/blog/bodaboda-youth-empowerment-project'
    },
    {
      title: 'Gender Equality & Social Inclusion',
      description: 'Promoting equity, rights, and empowerment for all genders and marginalized groups.',
      image: '/images/gender-equality.jpg',
      link: '/blog/empowering-adolescent-girls-through-menstrual-justice'
    },
    {
      title: 'Youth Development & Leadership',
      description: 'Building capacity in young people through mentorship, education, and skills development.',
      image: '/images/youth.jpg',
      link: '/blog/empowering-youth-through-football'
    },
    {
      title: 'WASH & Health in Communities and Schools',
      description: 'Improving access to clean water, sanitation, and health resources in underserved areas.',
      image: '/images/wash.jpg',
      link: '/blog/mtambani-water-sanitation-hygiene-project'
    },
    {
      title: 'Climate Resilience & Innovation',
      description: 'Developing sustainable solutions to address environmental challenges and climate change.',
      image: '/images/climate.jpg',
      link: '/blog/mtambani-water-sanitation-hygiene-project'
    },
    {
      title: 'Emergency Response & Resilience Building',
      description: 'Supporting communities during crises and strengthening their capacity to recover and adapt.',
      image: '/images/emergency.jpg',
      link: '#'
    }
  ];

  return (
    <section className="thematic-areas-section">
      <div className="container">
        <h2 className="section-title">Our Thematic Areas</h2>
        <div className="thematic-areas-grid">
          {thematicAreas.map((area, index) => (
            <div key={index} className="thematic-area-card">
              <div className="thematic-area-image">
                <img src={area.image} alt={area.title} />
              </div>
              <div className="thematic-area-content">
                <h3 className="thematic-area-title">{area.title}</h3>
                <p className="thematic-area-description">{area.description}</p>
                <a href={area.link} className="learn-more-btn">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThematicAreas;
