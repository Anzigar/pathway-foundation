import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import EventsList from '../components/EventsList';

const EventsPage: React.FC = () => {
  return (
    <div className="events-page">
      <PageHeader 
        title="Events" 
        subtitle="Join us at our upcoming events and be part of our community initiatives"
      />
      <div className="container">
        <EventsList />
      </div>
    </div>
  );
};

export default EventsPage;
