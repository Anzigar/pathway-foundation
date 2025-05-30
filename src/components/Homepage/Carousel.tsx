import React from 'react';
import './Carousel.css';

const Carousel: React.FC = () => {
  const slides = [
    {
      image: '/images/football-project.jpg',
      title: 'Empowering Youth Through Football',
      description: 'Building leadership and teamwork skills through sports',
      buttonLabel1: 'Donate',
      buttonUrl1: '/donate',
      buttonLabel2: 'Learn More',
      buttonUrl2: '/projects/empowering-youth-through-football'
    },
    {
      image: '/images/boeyp-project.jpg',
      title: 'Bodaboda Youth Empowerment Project',
      description: 'Creating sustainable livelihoods for young motorcycle taxi operators',
      buttonLabel1: 'Donate',
      buttonUrl1: '/donate',
      buttonLabel2: 'Learn More',
      buttonUrl2: '/projects/bodaboda-youth-empowerment-project'
    },
    {
      image: '/images/mtambani-project.jpg',
      title: 'Mtambani WASH Project',
      description: 'Improving water, sanitation, and hygiene in rural communities',
      buttonLabel1: 'Donate',
      buttonUrl1: '/donate',
      buttonLabel2: 'Learn More',
      buttonUrl2: '/projects/mtambani-water-sanitation-hygiene-project'
    }
  ];

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
              <div className="slide-buttons">
                <a href={slide.buttonUrl1} className="btn btn-primary">{slide.buttonLabel1}</a>
                <a href={slide.buttonUrl2} className="btn btn-secondary">{slide.buttonLabel2}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;