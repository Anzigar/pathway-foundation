import React from 'react';
import Hero from '../components/Homepage/Hero';
import FeaturedProjects from '../components/Homepage/FeaturedProjects';
import ImpactSection from '../components/Homepage/ImpactSection';
import FocusAreas from '../components/Homepage/FocusAreas';
import LatestNews from '../components/Homepage/LatestNews';
import CallToAction from '../components/Homepage/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <ImpactSection />
      <FeaturedProjects />
      <FocusAreas />
      <LatestNews />
      <CallToAction />
    </div>
  );
};

export default HomePage;
