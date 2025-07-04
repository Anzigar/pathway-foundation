import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import Card from "../components/ui/Card";
import CallToAction from "../components/sections/CallToAction";
import ViewCounter from "../components/ui/ViewCounter";
import { useNews, useEvents } from "../hooks/useNewsAndEvents.jsx";

/**
 * NewsEvents - Component for displaying news and events
 * @returns {JSX.Element} The NewsEvents component
 */
const NewsEvents = () => {
  const [notification, setNotification] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Use the hooks to fetch news and events data
  const { 
    news: newsItems, 
    isLoading: newsLoading, 
    error: newsError 
  } = useNews({
    filters: {},
    onNotificationChange: setNotification
  });

  const { 
    events, 
    isLoading: eventsLoading, 
    error: eventsError 
  } = useEvents({
    filters: {},
    onNotificationChange: setNotification
  });

  // Combine loading states
  const loading = newsLoading || eventsLoading;
  const error = newsError || eventsError;

  // Filter data based on active filter
  const getFilteredData = () => {
    switch(activeFilter) {
      case 'news':
        return { news: newsItems, events: [] };
      case 'events':
        return { news: [], events: events };
      default:
        return { news: newsItems, events: events };
    }
  };

  const { news: filteredNews, events: filteredEvents } = getFilteredData();

  // Get featured news (first item or find featured)
  const featuredNews = filteredNews.find(item => item.featured) || filteredNews[0];
  
  // Get regular news items (excluding featured)
  const regularNews = filteredNews.filter(item => item.id !== featuredNews?.id).slice(0, 5);
  
  // Get upcoming events (sorted by date)
  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.start_date || event.date) >= new Date())
    .sort((a, b) => new Date(a.start_date || a.date) - new Date(b.start_date || b.date))
    .slice(0, 6);

  // Format date helper function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <>
      <PageBanner 
        title="News & Events" 
        subtitle="Stay updated with our latest news, events, and stories from the field" 
      />
      
      <NewsEventsSection>
        <SectionContent>
          {notification && (
            <NotificationBar type={notification.type}>
              {notification.message}
            </NotificationBar>
          )}
          {loading ? (
            <LoadingIndicator>Loading news and events...</LoadingIndicator>
          ) : error ? (
            <ErrorMessage>Failed to load content. Please try again later.</ErrorMessage>
          ) : (
            <>
              <TabsContainer>
                <TabButton 
                  active={activeFilter === 'all'} 
                  onClick={() => setActiveFilter('all')}
                >
                  All
                </TabButton>
                <TabButton 
                  active={activeFilter === 'news'} 
                  onClick={() => setActiveFilter('news')}
                >
                  News
                </TabButton>
                <TabButton 
                  active={activeFilter === 'events'} 
                  onClick={() => setActiveFilter('events')}
                >
                  Events
                </TabButton>
                <TabLink to="/news-events/announcements">Announcements</TabLink>
                <TabLink to="/news-events/gallery">Photo Gallery</TabLink>
              </TabsContainer>
              
              {/* News Section */}
              {(activeFilter === 'all' || activeFilter === 'news') && filteredNews.length > 0 && (
                <>
                  <SectionTitle>Latest News & Updates</SectionTitle>
                  
                  {featuredNews && (
                    <FeaturedNews>
                      <FeaturedImage style={{ backgroundImage: `url(${featuredNews.image_url || featuredNews.image || (featuredNews.featured_image?.public_url)})` }}>
                        {featuredNews.categories && featuredNews.categories.length > 0 && (
                          <FeaturedCategory>{featuredNews.categories[0]}</FeaturedCategory>
                        )}
                        {featuredNews.category && (
                          <FeaturedCategory>{featuredNews.category.name}</FeaturedCategory>
                        )}
                      </FeaturedImage>
                      <FeaturedContent>
                        <FeaturedDate>{formatDate(featuredNews.published_at || featuredNews.publish_date || featuredNews.createdAt)}</FeaturedDate>
                        <FeaturedTitle>{featuredNews.title}</FeaturedTitle>
                        <FeaturedDescription>{featuredNews.excerpt || featuredNews.introduction}</FeaturedDescription>
                        <ViewWrapper>
                          <ViewCounter blogId={featuredNews.id} initialCount={featuredNews.view_count || 0} />
                        </ViewWrapper>
                        <ReadMoreLink to={`/news-events/news/${featuredNews.slug}`}>
                          Read More
                        </ReadMoreLink>
                      </FeaturedContent>
                    </FeaturedNews>
                  )}
                  
                  <NewsGrid>
                    {regularNews.map((item) => (
                      <Card 
                        key={item.id}
                        title={item.title}
                        description={item.excerpt || item.introduction}
                        image={item.image_url || item.image || (item.featured_image?.public_url)}
                        imageAlt={`Image for ${item.title}`}
                        link={`/news-events/news/${item.slug}`}
                        footer={
                          <CardFooter>
                            <CardDate>{formatDate(item.published_at || item.publish_date || item.createdAt)}</CardDate>
                            <ViewCounter blogId={item.id} initialCount={item.view_count || 0} />
                          </CardFooter>
                        }
                      />
                    ))}
                  </NewsGrid>
                </>
              )}
              
              {/* Events Section */}
              {(activeFilter === 'all' || activeFilter === 'events') && filteredEvents.length > 0 && (
                <UpcomingEventsSection>
                  <SectionTitle>Upcoming Events</SectionTitle>
                  <EventsGrid>
                    {upcomingEvents.map((event) => {
                      const eventDate = new Date(event.start_date || event.date);
                      const day = eventDate.getDate();
                      const month = eventDate.toLocaleString('default', { month: 'short' }).toUpperCase();
                      
                      return (
                        <EventCard key={event.id}>
                          <EventDate>
                            <EventDay>{day}</EventDay>
                            <EventMonth>{month}</EventMonth>
                          </EventDate>
                          <EventDetails>
                            <EventTitle>{event.title}</EventTitle>
                            <EventMeta>
                              <EventTime>
                                {new Date(event.start_date || event.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                {event.end_date && ` - ${new Date(event.end_date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`}
                              </EventTime>
                              <EventLocation>{event.location || event.venue || event.location_address}</EventLocation>
                            </EventMeta>
                            <EventDescription>{event.excerpt || event.description || event.summary}</EventDescription>
                            <EventLink to={`/events/${event.slug}`}>Learn More</EventLink>
                          </EventDetails>
                          {(event.image_url || event.image || event.featured_image?.public_url) && (
                            <EventImage>
                              <img src={event.image_url || event.image || event.featured_image?.public_url} alt={event.title} />
                            </EventImage>
                          )}
                        </EventCard>
                      );
                    })}
                  </EventsGrid>
                </UpcomingEventsSection>
              )}
              
              {/* No Content Message */}
              {((activeFilter === 'news' && filteredNews.length === 0) || 
                (activeFilter === 'events' && filteredEvents.length === 0)) && (
                <NoContentMessage>
                  <h3>No {activeFilter} available</h3>
                  <p>There are currently no {activeFilter} to display. Please check back later or try a different filter.</p>
                </NoContentMessage>
              )}
            </>
          )}
        </SectionContent>
      </NewsEventsSection>
      
      <CallToAction />
    </>
  );
};

// Styled components
const NewsEventsSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 40px;
  overflow-x: auto;
  
  @media (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

const TabLink = styled(Link)`
  padding: 12px 24px;
  color: ${props => props.active ? "var(--primary-color)" : "var(--text-secondary)"};
  font-weight: ${props => props.active ? "600" : "400"};
  border-bottom: 3px solid ${props => props.active ? "var(--primary-color)" : "transparent"};
  margin-bottom: -1px;
  white-space: nowrap;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const TabButton = styled.button`
  padding: 12px 24px;
  color: ${props => props.active ? "var(--primary-color)" : "var(--text-secondary)"};
  font-weight: ${props => props.active ? "600" : "400"};
  border: none;
  background: none;
  border-bottom: 3px solid ${props => props.active ? "var(--primary-color)" : "transparent"};
  margin-bottom: -1px;
  white-space: nowrap;
  cursor: pointer;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  color: var(--text-primary);
`;

const FeaturedNews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 60px;
  background-color: var(--background-light);
  border-radius: 12px;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  height: 100%;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  @media (max-width: 1024px) {
    height: 300px;
  }
`;

const FeaturedCategory = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: var(--primary-color);
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`;

const FeaturedContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const FeaturedDate = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
`;

const FeaturedTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--text-primary);
`;

const FeaturedDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 24px;
  flex-grow: 1;
`;

const ReadMoreLink = styled(Link)`
  color: var(--primary-color);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &::after {
    content: "→";
    margin-left: 6px;
    transition: transform 0.2s ease;
  }
  
  &:hover::after {
    transform: translateX(4px);
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 80px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const UpcomingEventsSection = styled.div`
  margin-top: 80px;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const EventCard = styled.div`
  display: flex;
  background-color: var(--background-light);
  border-radius: 12px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventDate = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  
  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: row;
    gap: 10px;
  }
`;

const EventDay = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const EventMonth = styled.div`
  font-size: 16px;
  text-transform: uppercase;
`;

const EventDetails = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

const EventTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--text-primary);
`;

const EventMeta = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
  color: var(--text-secondary);
  font-size: 14px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 6px;
  }
`;

const EventTime = styled.span``;

const EventLocation = styled.span``;

const EventDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 16px;
`;

const EventLink = styled(Link)`
  color: var(--primary-color);
  font-weight: 500;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 40px 0;
  font-size: 18px;
  color: var(--text-secondary);
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px 0;
  font-size: 18px;
  color: #e53e3e;
  background-color: #fff5f5;
  border-radius: 8px;
  margin: 20px 0;
  padding: 20px;
`;

const ViewWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--border-light);
`;

const CardDate = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
`;

const EventImage = styled.div`
  flex: 0 0 180px;
  background-color: #f3f4f6;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 200px;
    flex: unset;
  }
`;

const NotificationBar = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-weight: 500;
  
  ${props => props.type === 'error' && `
    background-color: #fee2e2;
    border: 1px solid #fecaca;
    color: #dc2626;
  `}
  
  ${props => props.type === 'success' && `
    background-color: #d1fae5;
    border: 1px solid #a7f3d0;
    color: #065f46;
  `}
  
  ${props => props.type === 'info' && `
    background-color: #dbeafe;
    border: 1px solid #bfdbfe;
    color: #1e40af;
  `}
`;

const NoContentMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: var(--background-light);
  border-radius: 12px;
  margin: 40px 0;
  
  h3 {
    color: var(--text-primary);
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 16px;
    line-height: 1.6;
  }
`;

export default NewsEvents;