import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="team-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team members will be added here */}
          <div className="team-placeholder text-center">
            <p className="text-lg text-gray-600">Our team information is coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
