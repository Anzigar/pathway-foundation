import React, { useState } from 'react';
import { Event } from '../types/api';
import { formatDateShort } from '../utils/dateFormatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';
import { useEvents, NotificationState } from '../hooks/useNewsAndEvents.jsx';

const EventsList: React.FC = () => {
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const { 
    events, 
    isLoading: loading, 
    error 
  } = useEvents({
    filters: {},
    onNotificationChange: setNotification
  });

  if (loading) {
    return <LoadingSpinner message="Loading events..." />;
  }

  if (error) {
    return <ErrorMessage message={error.message || 'Failed to load events'} onRetry={() => window.location.reload()} />;
  }

  if (events.length === 0) {
    return (
      <div className="no-events-container">
        <div className="no-events">
          <FontAwesomeIcon icon={faCalendarXmark} className="no-data-icon" />
          <h3>No Events Available</h3>
          <p>There are currently no upcoming events scheduled. Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="events-list">
      <h2>Upcoming Events</h2>
      {events.map((event: Event) => (
        <div key={event.id} className="event-card">
          {event.featured_image && Object.keys(event.featured_image).length > 0 && (
            <div className="event-image">
              <img 
                src={typeof event.featured_image === 'string' 
                  ? event.featured_image 
                  : event.featured_image.public_url || ''}
                alt={event.title} 
              />
            </div>
          )}
          <div className="event-details">
            <h3>{event.title}</h3>
            <p className="event-summary">{event.summary}</p>
            <div className="event-meta">
              <span className="event-date">
                {formatDateShort(event.start_date)} - {formatDateShort(event.end_date)}
              </span>
              {event.venue && <span className="event-venue">{event.venue}</span>}
              {event.location_address && <span className="event-location">{event.location_address}</span>}
            </div>
            <div className="event-price">
              {event.is_free ? 'Free' : `$${event.ticket_price.toFixed(2)}`}
            </div>
            <a href={`/events/${event.slug}`} className="event-link">
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
