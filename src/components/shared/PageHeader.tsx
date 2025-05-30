import React from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = '/images/default-header-bg.jpg' 
}) => {
  return (
    <div 
      className="page-header" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${backgroundImage})` }}
    >
      <div className="container">
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
