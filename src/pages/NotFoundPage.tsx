import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <FontAwesomeIcon icon={faExclamationTriangle} className="not-found-icon" />
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist or has been moved.</p>
          <Link to="/" className="home-button">Return to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
