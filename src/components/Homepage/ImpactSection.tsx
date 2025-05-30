import React from 'react';

const ImpactSection: React.FC = () => {
  return (
    <section className="impact-section">
      <div className="container">
        <h2 className="section-title">Our Impact</h2>
        <div className="impact-stats">
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10</div>
            <div className="stat-label">Regions</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Lives Impacted</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">18</div>
            <div className="stat-label">Years of Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;