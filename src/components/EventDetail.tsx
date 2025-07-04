import React from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from '../utils/dateFormatter';
import LoadingSpinner from './shared/LoadingSpinner';
import { EventDetailShimmer } from './shared/ShimmerLoader';
import ErrorMessage from './shared/ErrorMessage';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useEvents } from '../hooks/useNewsAndEvents.jsx';

// Define types for the event item since JSX hooks don't export types
interface EventItem {
  id: string;
  title: string;
  description: string;
  excerpt?: string;
  location: string;
  venue_details?: string;
  map_embed_url?: string;
  start_date: string;
  end_date?: string;
  image_url?: string;
  ticket_price?: string;
  registration_link?: string;
  rsvp_enabled?: boolean;
  contact_info?: string;
  tags?: string;
  published?: boolean;
  featured?: boolean;
  slug: string;
  organizer_id?: number;
  published_at?: string;
  created_at: string;
  updated_at: string;
  view_count?: number;
  share_count?: number;
  comment_count?: number;
  categories?: any[];
  related_events?: any[];
}

interface NotificationState {
  type: 'success' | 'error' | 'info';
  message: string;
  isVisible: boolean;
}

const EventDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Get the hook functions from useEvents
  const eventsHookData = useEvents();
  
  // Get the useEventBySlug function from the hook
  const useEventBySlug = (eventsHookData as any).useEventBySlug;
  
  // Fetch the event by slug using the hook
  const { 
    data: event, 
    isLoading: loading, 
    error 
  } = useEventBySlug(slug ?? '', !!slug);
  
  if (loading) {
    return <EventDetailShimmer />;
  }

  if (error) {
    return <ErrorMessage message="Failed to load event. Please try again later." onRetry={() => window.location.reload()} />;
  }

  if (!event) {
    return <NotFoundContainer>Event not found.</NotFoundContainer>;
  }

  const eventItem = event as EventItem;

  return (
    <>
      <Helmet>
        <title>{eventItem.title} - Pathways Foundation</title>
        <meta name="description" content={eventItem.excerpt ?? eventItem.description} />
        <meta property="og:title" content={eventItem.title} />
        <meta property="og:description" content={eventItem.excerpt ?? eventItem.description} />
        <meta property="og:type" content="article" />
        {eventItem.image_url && <meta property="og:image" content={eventItem.image_url} />}
      </Helmet>
      
      <Container>
        <EventHeader>
          {eventItem.image_url && (
            <EventImage>
              <img src={eventItem.image_url} alt={eventItem.title} />
            </EventImage>
          )}
          <EventMeta>
            <EventTitle>{eventItem.title}</EventTitle>
            <EventDetails>
              <EventDate>
                <strong>Date:</strong> {formatDate(eventItem.start_date)}
                {eventItem.end_date && ` - ${formatDate(eventItem.end_date)}`}
              </EventDate>
              <EventLocation>
                <strong>Location:</strong> {eventItem.location}
              </EventLocation>
              {eventItem.venue_details && (
                <EventVenue>
                  <strong>Venue:</strong> {eventItem.venue_details}
                </EventVenue>
              )}
              {eventItem.ticket_price && (
                <EventPrice>
                  <strong>Price:</strong> {eventItem.ticket_price}
                </EventPrice>
              )}
            </EventDetails>
          </EventMeta>
        </EventHeader>
        
        <EventContent>
          <EventDescription>
            {eventItem.description}
          </EventDescription>
          
          {eventItem.registration_link && (
            <RegistrationSection>
              <RegistrationButton href={eventItem.registration_link} target="_blank" rel="noopener noreferrer">
                Register for Event
              </RegistrationButton>
            </RegistrationSection>
          )}
          
          {eventItem.contact_info && (
            <ContactSection>
              <ContactTitle>Contact Information</ContactTitle>
              <ContactInfo>{eventItem.contact_info}</ContactInfo>
            </ContactSection>
          )}
          
          {eventItem.map_embed_url && (
            <MapSection>
              <MapTitle>Event Location</MapTitle>
              <MapEmbed
                src={eventItem.map_embed_url}
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapSection>
          )}
          
          {eventItem.related_events && eventItem.related_events.length > 0 && (
            <RelatedSection>
              <RelatedTitle>Related Events</RelatedTitle>
              <RelatedGrid>
                {eventItem.related_events.map((relatedEvent: any) => (
                  <RelatedItem key={relatedEvent.id}>
                    <RelatedLink href={`/events/${relatedEvent.slug}`}>
                      {relatedEvent.title}
                    </RelatedLink>
                  </RelatedItem>
                ))}
              </RelatedGrid>
            </RelatedSection>
          )}
        </EventContent>
      </Container>
    </>
  );
};

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const EventHeader = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const EventImage = styled.div`
  flex: 1;
  max-width: 500px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const EventMeta = styled.div`
  flex: 1;
  min-width: 0;
`;

const EventTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const EventDate = styled.div`
  font-size: 1.1rem;
  color: var(--text-secondary);
`;

const EventLocation = styled.div`
  font-size: 1.1rem;
  color: var(--text-secondary);
`;

const EventVenue = styled.div`
  font-size: 1.1rem;
  color: var(--text-secondary);
`;

const EventPrice = styled.div`
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 600;
`;

const EventContent = styled.div`
  line-height: 1.8;
`;

const EventDescription = styled.div`
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 40px;
  
  p {
    margin-bottom: 20px;
  }
  
  h2, h3, h4 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: var(--text-primary);
  }
  
  ul, ol {
    margin-bottom: 20px;
    padding-left: 30px;
  }
  
  li {
    margin-bottom: 8px;
  }
`;

const RegistrationSection = styled.div`
  margin: 40px 0;
  text-align: center;
`;

const RegistrationButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

const ContactSection = styled.div`
  margin: 40px 0;
  padding: 20px;
  background-color: var(--background-light);
  border-radius: 8px;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 15px;
`;

const ContactInfo = styled.div`
  font-size: 1.1rem;
  color: var(--text-secondary);
`;

const MapSection = styled.div`
  margin: 40px 0;
`;

const MapTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 20px;
`;

const MapEmbed = styled.iframe`
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RelatedSection = styled.div`
  margin: 40px 0;
`;

const RelatedTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 20px;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const RelatedItem = styled.div`
  padding: 20px;
  background-color: var(--background-light);
  border-radius: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const RelatedLink = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 80px 20px;
  font-size: 1.2rem;
  color: var(--text-secondary);
`;

export default EventDetail;
