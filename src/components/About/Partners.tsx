import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="partners-section py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Partners will be added here */}
          <div className="partners-placeholder text-center">
            <p className="text-lg text-gray-600">Information about our partners is coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
