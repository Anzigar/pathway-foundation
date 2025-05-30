import React from 'react';

const CoreValues: React.FC = () => {
  const values = [
    {
      title: 'Social inclusion',
      description: 'We believe in involving communities to lead their own development.',
      icon: 'inclusion-icon.svg'
    },
    {
      title: 'Empowerment',
      description: 'We offer support initiatives led by youth, women and special groups.',
      icon: 'empowerment-icon.svg'
    },
    {
      title: 'Transparency',
      description: 'We maintain transparency in all our operations and financial management.',
      icon: 'transparency-icon.svg'
    },
    {
      title: 'Innovation',
      description: 'We embrace innovative approaches to tackle complex social challenges.',
      icon: 'innovation-icon.svg'
    },
    {
      title: 'Sustainability',
      description: 'We develop solutions that are environmentally and socially sustainable.',
      icon: 'sustainability-icon.svg'
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity in all our actions and decisions.',
      icon: 'integrity-icon.svg'
    }
  ];

  return (
    <section className="core-values-section">
      <div className="container">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">
                <img src={`/icons/${value.icon}`} alt={value.title} />
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
