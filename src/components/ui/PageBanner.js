import React from "react";
import styled from "styled-components";

const PageBannerContainer = styled.div`
  background: linear-gradient(135deg, #087FAE 0%, #065e80 100%);
  color: #FFFFFF;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(to bottom right, transparent 0%, transparent 50%, white 50%, white 100%);
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const BannerHighlight = styled.span`
  color: #087FAE;
`;

const PageBanner = ({ title, subtitle }) => {
  return (
    <PageBannerContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </PageBannerContainer>
  );
};

export default PageBanner;