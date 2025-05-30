import React from "react";
import styled from "styled-components";
import AppleStyleImpactCards from "../components/sections/AppleStyleImpactCards";

/**
 * OurImpact page to showcase the organization's impact with Apple-style cards
 */
const OurImpact = () => {
  // Set document title directly (simpler approach than using a separate SEO component)
  React.useEffect(() => {
    document.title = "Our Impact | Pathway Foundation";
  }, []);
  
  return (
    <>
      <PageContainer>
        <PageHeader>
          <PageTitle>Our Impact</PageTitle>
          <PageSubtitle>
            Real-world change, measurable results, and lasting impact for communities in Tanzania.
          </PageSubtitle>
        </PageHeader>
        
        {/* Apple-style impact cards */}
        <AppleStyleImpactCards />
        
        {/* Additional sections could go here */}
      </PageContainer>
    </>
  );
};

// Styled components
const PageContainer = styled.main`
  width: 100%;
`;

const PageHeader = styled.div`
  padding: 120px 20px 60px;
  text-align: center;
  background-color: var(--apple-gray);
`;

const PageTitle = styled.h1`
  font-size: 56px;
  font-weight: 600;
  color: var(--apple-black);
  margin-bottom: 16px;
`;

const PageSubtitle = styled.p`
  font-size: 21px;
  line-height: 1.47;
  max-width: 700px;
  margin: 0 auto;
  color: var(--apple-dark-gray);
`;

export default OurImpact;