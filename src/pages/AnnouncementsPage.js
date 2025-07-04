import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import Card from "../components/ui/Card";
import CallToAction from "../components/sections/CallToAction";
import ViewCounter from "../components/ui/ViewCounter";
import { useNews } from "../hooks/useNewsAndEvents.jsx";

/**
 * AnnouncementsPage - Component for displaying announcements
 * @returns {JSX.Element} The AnnouncementsPage component
 */
const AnnouncementsPage = () => {
  const [notification, setNotification] = useState(null);

  // Use the hooks to fetch news data filtered for announcements
  const { 
    news: announcements, 
    isLoading: loading, 
    error 
  } = useNews({
    filters: { category: 'announcements' },
    onNotificationChange: setNotification
  });

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
        title="Announcements" 
        subtitle="Stay informed with our latest announcements and important updates" 
      />
      
      <AnnouncementsSection>
        <SectionContent>
          {notification && (
            <NotificationBar type={notification.type}>
              {notification.message}
            </NotificationBar>
          )}
          
          <TabsContainer>
            <TabLink to="/news-events">All</TabLink>
            <TabLink to="/news-events/announcements" active={true}>Announcements</TabLink>
            <TabLink to="/news-events/gallery">Photo Gallery</TabLink>
          </TabsContainer>
          
          {loading ? (
            <LoadingIndicator>Loading announcements...</LoadingIndicator>
          ) : error ? (
            <ErrorMessage>Failed to load announcements. Please try again later.</ErrorMessage>
          ) : announcements.length === 0 ? (
            <EmptyState>
              <EmptyStateIcon>📢</EmptyStateIcon>
              <EmptyStateTitle>No Announcements</EmptyStateTitle>
              <EmptyStateText>There are no announcements at the moment. Please check back later.</EmptyStateText>
            </EmptyState>
          ) : (
            <>
              <SectionTitle>Latest Announcements</SectionTitle>
              <AnnouncementsGrid>
                {announcements.map((announcement) => (
                  <Card 
                    key={announcement.id}
                    title={announcement.title}
                    description={announcement.excerpt || announcement.introduction}
                    image={announcement.image_url || announcement.image || (announcement.featured_image?.public_url)}
                    imageAlt={`Image for ${announcement.title}`}
                    link={`/news-events/news/${announcement.slug}`}
                    footer={
                      <CardFooter>
                        <CardDate>{formatDate(announcement.published_at || announcement.publish_date || announcement.createdAt)}</CardDate>
                        <ViewCounter blogId={announcement.id} initialCount={announcement.view_count || 0} />
                      </CardFooter>
                    }
                  />
                ))}
              </AnnouncementsGrid>
            </>
          )}
        </SectionContent>
      </AnnouncementsSection>
      
      <CallToAction />
    </>
  );
};

// Styled components
const AnnouncementsSection = styled.section`
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
  padding: 15px 30px;
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    color: var(--primary-color);
    border-bottom-color: var(--primary-light);
  }
  
  ${props => props.active && `
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
  `}
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 40px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AnnouncementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 60px 20px;
  font-size: 1.2rem;
  color: var(--text-secondary);
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  font-size: 1.2rem;
  color: var(--error-color);
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
`;

const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const EmptyStateTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 10px;
`;

const EmptyStateText = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const CardDate = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
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

export default AnnouncementsPage;
