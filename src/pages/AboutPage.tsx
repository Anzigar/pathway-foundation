import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import OurStory from '../components/About/OurStory';
import MissionVision from '../components/About/MissionVision';
import CoreValues from '../components/About/CoreValues';
import Team from '../components/About/Team';
import Partners from '../components/About/Partners';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <PageHeader 
        title="About Us" 
        subtitle="Learn about Pathways Foundation for the Poor and our mission to empower vulnerable communities"
      />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Team />
      <Partners />
    </div>
  );
};

export default AboutPage;
