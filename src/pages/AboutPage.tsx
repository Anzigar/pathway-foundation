import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import OurStory from '../components/About/OurStory';
import MissionVision from '../components/About/MissionVision';
import CoreValues from '../components/About/CoreValues';
import Team from '../components/About/Team';
import Partners from '../components/About/Partners';
// @ts-ignore - Importing JS component
import SEO from '../components/seo';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <SEO
        title="About Us"
        description="Learn about Pathways Foundation for the Poor's mission to uplift impoverished communities in Tanzania through sustainable development programs."
        keywords="about Pathways Foundation, Tanzania charity, poverty alleviation, community development mission"
        canonicalUrl="https://www.pathwaysfoundation.org/about"
      />
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
