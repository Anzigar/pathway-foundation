import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Event } from '../types/api';
import { EventService } from '../services/api';
import { formatDate } from '../utils/dateFormatter';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';
import { Helmet } from 'react-helmet';

interface EventParams {
  eventId: string;
}

const EventDetail: React.FC = () => {
  const { eventId } = useParams<EventParams>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEventDetail = async () => {
    if (!eventId) {
      setError('No event ID provided');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await EventService.getEvent(eventId);
      
      if (response.status === 200) {
        setEvent(response.data);
        setError(null);
      } else {
        setError(response.message || 'Failed to load event details. Please try again later.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('Event detail fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventDetail();
  }, [eventId]);

  if (loading) {
    return <LoadingSpinner message="Loading event details..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchEventDetail} />;
  }

  if (!event) {
    return <div className="not-found">Event not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{event.title} | Pathways Foundation for the Poor</title>
        <meta name="description" content={event.summary} />
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content={event.summary} />
        {typeof event.featured_image === 'string' && (
          <meta property="og:image" content={event.featured_image} />
        )}
      </Helmet>
      
      <div className="event-detail">
        <div className="event-header">
          <h1>{event.title}</h1>
          {event.category && (
            <span className="event-category">{event.category.name}</span>
          )}
        </div>

        {event.featured_image && Object.keys(event.featured_image).length > 0 && (
          <div className="event-featured-image">
            <img 
              src={typeof event.featured_image === 'string' 
                ? event.featured_image 
                : event.featured_image.public_url || ''}
              alt={event.title} 
            />
          </div>
        )}

        <div className="event-info">
          <div className="event-dates">
            <strong>When:</strong> {formatDate(event.start_date)} - {formatDate(event.end_date)}
          </div>
          
          <div className="event-location">
            <strong>Where:</strong> {event.venue}, {event.location_address}
          </div>
          
          <div className="event-organizer">
            <strong>Organized by:</strong> {event.organizer}
          </div>
          
          <div className="event-pricing">
            <strong>Price:</strong> {event.is_free ? 'Free' : `$${event.ticket_price.toFixed(2)}`}
          </div>
        </div>

        <div className="event-description">
          <h2>About this Event</h2>
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
        </div>

        {event.registration_link && (
          <div className="event-registration">
            <a 
              href={event.registration_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="register-button"
            >
              {event.has_registration_form ? 'Register Now' : 'Learn More'}
            </a>
          </div>
        )}

        {event.contact_info && (
          <div className="event-contact">
            <h3>Contact Information</h3>
            <p>{event.contact_info}</p>
          </div>
        )}

        {event.tags && event.tags.length > 0 && (
          <div className="event-tags">
            <h3>Tags</h3>
            <div className="tags-container">
              {event.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EventDetail;
