import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";
import { useNews } from "../hooks/useNewsAndEvents.jsx";

/**
 * PhotoGalleryPage - Component for displaying photo gallery
 * @returns {JSX.Element} The PhotoGalleryPage component
 */
const PhotoGalleryPage = () => {
  const [notification, setNotification] = useState(null);

  // Use the hooks to fetch news data filtered for gallery items
  const { 
    news: galleryItems, 
    isLoading: loading, 
    error 
  } = useNews({
    filters: { category: 'gallery' },
    onNotificationChange: setNotification
  });

  return (
    <>
      <PageBanner 
        title="Photo Gallery" 
        subtitle="Explore our visual stories and moments captured from our projects and events" 
      />
      
      <GallerySection>
        <SectionContent>
          {notification && (
            <NotificationBar type={notification.type}>
              {notification.message}
            </NotificationBar>
          )}
          
          <TabsContainer>
            <TabLink to="/news-events">All</TabLink>
            <TabLink to="/news-events/announcements">Announcements</TabLink>
            <TabLink to="/news-events/gallery" active={true}>Photo Gallery</TabLink>
          </TabsContainer>
          
          {loading ? (
            <LoadingIndicator>Loading gallery...</LoadingIndicator>
          ) : error ? (
            <ErrorMessage>Failed to load gallery. Please try again later.</ErrorMessage>
          ) : galleryItems.length === 0 ? (
            <EmptyState>
              <EmptyStateIcon>📸</EmptyStateIcon>
              <EmptyStateTitle>No Photos Available</EmptyStateTitle>
              <EmptyStateText>There are no photos in the gallery at the moment. Please check back later.</EmptyStateText>
            </EmptyState>
          ) : (
            <>
              <SectionTitle>Photo Gallery</SectionTitle>
              <GalleryGrid>
                {galleryItems.map((item) => (
                  <GalleryItem key={item.id}>
                    <GalleryImage>
                      <img 
                        src={item.image_url || item.image || (item.featured_image?.public_url)} 
                        alt={item.title}
                      />
                      <GalleryOverlay>
                        <GalleryTitle>{item.title}</GalleryTitle>
                        <GalleryDate>
                          {new Date(item.published_at || item.publish_date || item.createdAt).toLocaleDateString()}
                        </GalleryDate>
                      </GalleryOverlay>
                    </GalleryImage>
                  </GalleryItem>
                ))}
              </GalleryGrid>
            </>
          )}
        </SectionContent>
      </GallerySection>
      
      <CallToAction />
    </>
  );
};

// Styled components
const GallerySection = styled.section`
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
`;

const GalleryItem = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

const GalleryImage = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 20px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const GalleryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const GalleryDate = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
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

export default PhotoGalleryPage;
