import React from 'react';
import styled, { keyframes } from 'styled-components';

// Shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

// Base shimmer element
const ShimmerElement = styled.div`
  background: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s linear infinite;
  border-radius: 8px;
`;

// Shimmer container
const ShimmerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// News/Event detail shimmer components
const ShimmerHeader = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ShimmerImage = styled(ShimmerElement)`
  flex: 1;
  height: 300px;
  max-width: 500px;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ShimmerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ShimmerTitle = styled(ShimmerElement)`
  height: 40px;
  width: 80%;
  margin-bottom: 10px;
`;

const ShimmerMeta = styled(ShimmerElement)`
  height: 20px;
  width: 60%;
`;

const ShimmerDescription = styled(ShimmerElement)`
  height: 16px;
  width: 100%;
  margin-bottom: 8px;
`;

const ShimmerButton = styled(ShimmerElement)`
  height: 40px;
  width: 150px;
  margin-top: 20px;
`;

const ShimmerArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ShimmerParagraph = styled(ShimmerElement)`
  height: 16px;
  width: 100%;
  
  &:nth-child(2) {
    width: 95%;
  }
  
  &:nth-child(3) {
    width: 90%;
  }
  
  &:nth-child(4) {
    width: 85%;
  }
  
  &:nth-child(5) {
    width: 92%;
  }
`;

// News Detail Shimmer
export const NewsDetailShimmer: React.FC = () => {
  return (
    <ShimmerContainer>
      <ShimmerHeader>
        <ShimmerImage />
        <ShimmerContent>
          <ShimmerTitle />
          <ShimmerMeta />
          <ShimmerMeta />
          <ShimmerMeta />
          <ShimmerDescription />
          <ShimmerDescription />
          <ShimmerDescription />
        </ShimmerContent>
      </ShimmerHeader>
      
      <ShimmerArticleContent>
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
      </ShimmerArticleContent>
    </ShimmerContainer>
  );
};

// Event Detail Shimmer
export const EventDetailShimmer: React.FC = () => {
  return (
    <ShimmerContainer>
      <ShimmerHeader>
        <ShimmerImage />
        <ShimmerContent>
          <ShimmerTitle />
          <ShimmerMeta />
          <ShimmerMeta />
          <ShimmerMeta />
          <ShimmerMeta />
          <ShimmerDescription />
          <ShimmerDescription />
          <ShimmerButton />
        </ShimmerContent>
      </ShimmerHeader>
      
      <ShimmerArticleContent>
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
      </ShimmerArticleContent>
      
      {/* Map section shimmer */}
      <ShimmerElement style={{ height: '400px', marginTop: '40px' }} />
    </ShimmerContainer>
  );
};

// News and Events Listing Shimmer
export const NewsEventsListingShimmer: React.FC = () => {
  const newsItems = Array.from({ length: 6 }, (_, i) => `news-shimmer-${Date.now()}-${i}`);
  const eventItems = Array.from({ length: 4 }, (_, i) => `event-shimmer-${Date.now()}-${i}`);
  
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Featured News Shimmer */}
      <ShimmerElement style={{ height: '30px', width: '250px', marginBottom: '30px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '60px', backgroundColor: '#f6f7f8', borderRadius: '12px', overflow: 'hidden' }}>
        <ShimmerElement style={{ height: '300px' }} />
        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ShimmerElement style={{ height: '14px', width: '100px' }} />
          <ShimmerElement style={{ height: '32px', width: '90%' }} />
          <ShimmerElement style={{ height: '16px', width: '100%' }} />
          <ShimmerElement style={{ height: '16px', width: '95%' }} />
          <ShimmerElement style={{ height: '16px', width: '85%' }} />
          <ShimmerElement style={{ height: '20px', width: '120px', marginTop: '20px' }} />
        </div>
      </div>
      
      {/* News Grid Shimmer */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '80px' }}>
        {newsItems.map((itemId) => (
          <div key={itemId} style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <ShimmerElement style={{ height: '200px' }} />
            <div style={{ padding: '20px' }}>
              <ShimmerElement style={{ height: '20px', width: '100%', marginBottom: '12px' }} />
              <ShimmerElement style={{ height: '16px', width: '100%', marginBottom: '8px' }} />
              <ShimmerElement style={{ height: '16px', width: '80%', marginBottom: '16px' }} />
              <ShimmerElement style={{ height: '14px', width: '60px' }} />
            </div>
          </div>
        ))}
      </div>
      
      {/* Events Section Shimmer */}
      <ShimmerElement style={{ height: '30px', width: '200px', marginBottom: '30px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        {eventItems.map((itemId) => (
          <div key={itemId} style={{ display: 'flex', backgroundColor: '#f6f7f8', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#087FAE', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '100px' }}>
              <ShimmerElement style={{ height: '32px', width: '40px', marginBottom: '8px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
              <ShimmerElement style={{ height: '16px', width: '50px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
            </div>
            <div style={{ padding: '20px', flex: 1 }}>
              <ShimmerElement style={{ height: '24px', width: '70%', marginBottom: '12px' }} />
              <ShimmerElement style={{ height: '14px', width: '50%', marginBottom: '6px' }} />
              <ShimmerElement style={{ height: '14px', width: '60%', marginBottom: '12px' }} />
              <ShimmerElement style={{ height: '16px', width: '100%', marginBottom: '8px' }} />
              <ShimmerElement style={{ height: '16px', width: '90%', marginBottom: '16px' }} />
              <ShimmerElement style={{ height: '20px', width: '100px' }} />
            </div>
            <ShimmerElement style={{ width: '200px', height: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Generic shimmer loader
const ShimmerLoader: React.FC = () => {
  return (
    <ShimmerContainer>
      <ShimmerArticleContent>
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
        <ShimmerParagraph />
      </ShimmerArticleContent>
    </ShimmerContainer>
  );
};

export default ShimmerLoader;
