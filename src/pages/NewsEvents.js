import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import Card from "../components/ui/Card";
import CallToAction from "../components/sections/CallToAction";
import { newsService } from "../services/api";
import ViewCounter from "../components/ui/ViewCounter";

/**
 * NewsEvents - Component for displaying news and events
 * @returns {JSX.Element} The NewsEvents component
 */
const NewsEvents = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [featuredNews, setFeaturedNews] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news and events on component mount
  useEffect(() => {
    const fetchNewsAndEvents = async () => {
      try {
        setLoading(true);
        
        // Fetch news items
        const newsResponse = await newsService.getNewsItems(1, 6);
        
        if (newsResponse.data.length > 0) {
          // Set the first item as featured news
          setFeaturedNews(newsResponse.data[0]);
          // Set the rest as regular news items
          setNewsItems(newsResponse.data.slice(1));
        }
        
        // Fetch upcoming events
        const eventsResponse = await newsService.getUpcomingEvents(3);
        setEvents(eventsResponse);
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news and events:", err);
        setError("Failed to load content. Please try again later.");
        setLoading(false);
      }
    };
    
    fetchNewsAndEvents();
  }, []);

  return (
    <>
      <PageBanner 
        title="News & Events" 
        subtitle="Stay updated with our latest news, events, and stories from the field" 
      />
      
      <NewsEventsSection>
        <SectionContent>
          {loading ? (
            <LoadingIndicator>Loading news and events...</LoadingIndicator>
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <>
              <TabsContainer>
                <TabLink to="/news-events" active={true}>All</TabLink>
                <TabLink to="/news-events/blog">Blog</TabLink>
                <TabLink to="/news-events/announcements">Announcements</TabLink>
                <TabLink to="/news-events/gallery">Photo Gallery</TabLink>
              </TabsContainer>
              
              <SectionTitle>Latest News & Updates</SectionTitle>
              
              {featuredNews && (
                <FeaturedNews>
                  <FeaturedImage style={{ backgroundImage: `url(${featuredNews.image})` }}>
                    <FeaturedCategory>{featuredNews.type}</FeaturedCategory>
                  </FeaturedImage>
                  <FeaturedContent>
                    <FeaturedDate>{featuredNews.date}</FeaturedDate>
                    <FeaturedTitle>{featuredNews.title}</FeaturedTitle>
                    <FeaturedDescription>{featuredNews.excerpt}</FeaturedDescription>
                    <ViewWrapper>
                      <ViewCounter blogId={featuredNews.id} initialCount={featuredNews.viewCount || 0} />
                    </ViewWrapper>
                    <ReadMoreLink to={`/news-events/${featuredNews.type.toLowerCase()}s/${featuredNews.slug}`}>
                      Read More
                    </ReadMoreLink>
                  </FeaturedContent>
                </FeaturedNews>
              )}
              
              <NewsGrid>
                {newsItems.map((item) => (
                  <Card 
                    key={item.id}
                    title={item.title}
                    description={item.excerpt}
                    image={item.image}
                    imageAlt={`Image for ${item.title}`}
                    link={`/news-events/${item.type.toLowerCase()}s/${item.slug}`}
                    footer={
                      <CardFooter>
                        <CardDate>{item.date}</CardDate>
                        <ViewCounter blogId={item.id} initialCount={item.viewCount || 0} />
                      </CardFooter>
                    }
                  />
                ))}
              </NewsGrid>
              
              <UpcomingEventsSection>
                <SectionTitle>Upcoming Events</SectionTitle>
                <EventsGrid>
                  {events.map((event) => {
                    const eventDate = new Date(event.startDate);
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
                            <EventTime>{event.time}</EventTime>
                            <EventLocation>{event.location}</EventLocation>
                          </EventMeta>
                          <EventDescription>{event.description}</EventDescription>
                          <EventLink to={`/events/${event.slug}`}>Learn More</EventLink>
                        </EventDetails>
                      </EventCard>
                    );
                  })}
                </EventsGrid>
              </UpcomingEventsSection>
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

export default NewsEvents;