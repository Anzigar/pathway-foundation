import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="mission-vision-section">
      <div className="container">
        <div className="mission-container">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            To uplift the lives of impoverished and vulnerable communities by tackling the root causes of poverty, 
            boosting household incomes, and promoting overall social well-being.
          </p>
        </div>

        <div className="vision-container">
          <h2 className="section-title">Our Vision</h2>
          <p className="vision-text">
            A society where every individual, irrespective of gender, realizes their full potential, 
            coexists peacefully, and thrives, leading to the eradication of extreme poverty and the 
            enhancement of social well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
