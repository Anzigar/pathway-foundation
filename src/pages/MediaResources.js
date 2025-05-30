import React from "react";
import styled from "styled-components";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";

/**
 * MediaResources - Component for displaying media resources and press kits
 * @returns {JSX.Element} The MediaResources component
 */
const MediaResources = () => {
  // Mock data for media resources
  const resources = [
    {
      id: 1,
      title: "Organization Logo Package",
      description: "Download our logo in various formats (PNG, SVG, PDF) for both light and dark backgrounds.",
      fileType: "ZIP",
      fileSize: "2.5 MB",
      downloadLink: "/resources/pathway-foundation-logos.zip",
      resourceType: "branding"
    },
    {
      id: 2,
      title: "2023 Annual Report",
      description: "Our annual report detailing our activities, impact, and financial information for the year 2023.",
      fileType: "PDF",
      fileSize: "4.8 MB",
      downloadLink: "/resources/annual-report-2023.pdf",
      resourceType: "reports"
    },
    {
      id: 3,
      title: "Project Photos - High Resolution",
      description: "A collection of high-resolution photos from our various projects for media use. All photos are credited to Pathway Foundation.",
      fileType: "ZIP",
      fileSize: "15 MB",
      downloadLink: "/resources/project-photos-high-res.zip",
      resourceType: "media"
    },
    {
      id: 4,
      title: "Press Release - Youth Leadership Program Launch",
      description: "Press release announcing the launch of our new Youth Leadership Program in Tanzania.",
      fileType: "PDF",
      fileSize: "1.2 MB",
      downloadLink: "/resources/press-release-youth-leadership.pdf",
      resourceType: "press"
    },
    {
      id: 5,
      title: "Organization Fact Sheet",
      description: "Key information about Pathway Foundation, including our mission, vision, programs, and impact statistics.",
      fileType: "PDF",
      fileSize: "1.5 MB",
      downloadLink: "/resources/pathway-foundation-fact-sheet.pdf",
      resourceType: "branding"
    },
    {
      id: 6,
      title: "Executive Director Biography",
      description: "Professional biography and high-resolution photos of our Executive Director for media use.",
      fileType: "PDF",
      fileSize: "2.1 MB",
      downloadLink: "/resources/executive-director-bio.pdf",
      resourceType: "press"
    },
    {
      id: 7,
      title: "Impact Assessment Report - WASH Program",
      description: "Detailed report on the impact of our Water, Sanitation, and Hygiene programs in rural Tanzania.",
      fileType: "PDF",
      fileSize: "5.2 MB",
      downloadLink: "/resources/wash-impact-assessment.pdf",
      resourceType: "reports"
    },
    {
      id: 8,
      title: "Program Videos - High Resolution",
      description: "High-resolution videos showcasing our programs and impact for media use.",
      fileType: "ZIP",
      fileSize: "75 MB",
      downloadLink: "/resources/program-videos-high-res.zip",
      resourceType: "media"
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.resourceType === activeCategory);

  return (
    <>
      <PageBanner 
        title="Media Resources" 
        subtitle="Download press kits, logos, and other media resources for publications and press coverage" 
      />
      
      <MediaSection>
        <SectionContent>
          <CategoryFilter>
            <CategoryButton 
              active={activeCategory === "all"} 
              onClick={() => setActiveCategory("all")}
            >
              All Resources
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === "branding"} 
              onClick={() => setActiveCategory("branding")}
            >
              Branding Materials
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === "press"} 
              onClick={() => setActiveCategory("press")}
            >
              Press Releases
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === "reports"} 
              onClick={() => setActiveCategory("reports")}
            >
              Reports
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === "media"} 
              onClick={() => setActiveCategory("media")}
            >
              Photos & Videos
            </CategoryButton>
          </CategoryFilter>

          <ResourcesGrid>
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id}>
                <ResourceHeader>
                  <FileType>{resource.fileType}</FileType>
                  <FileSize>{resource.fileSize}</FileSize>
                </ResourceHeader>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
                <ResourceFooter>
                  <DownloadButton href={resource.downloadLink}>
                    <FaDownload /> Download
                  </DownloadButton>
                </ResourceFooter>
              </ResourceCard>
            ))}
          </ResourcesGrid>
          
          <MediaInquiries>
            <InquiriesTitle>Media Inquiries</InquiriesTitle>
            <InquiriesContent>
              <p>
                For media inquiries, interview requests, or additional resources, please contact our Communications Department:
              </p>
              <ContactDetails>
                <ContactItem>
                  <strong>Email:</strong> media@pathwayfoundation.org
                </ContactItem>
                <ContactItem>
                  <strong>Phone:</strong> +255 755 123 456
                </ContactItem>
                <ContactItem>
                  <strong>Response Time:</strong> We aim to respond to all media inquiries within 24-48 hours.
                </ContactItem>
              </ContactDetails>
              <MediaPolicyLink href="/media-policy">
                <FaExternalLinkAlt /> View our Media Policy
              </MediaPolicyLink>
            </InquiriesContent>
          </MediaInquiries>
        </SectionContent>
      </MediaSection>
      
      <CallToAction />
    </>
  );
};

// Styled components
const MediaSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CategoryFilter = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? "var(--primary-color)" : "transparent"};
  color: ${props => props.active ? "white" : "var(--text-secondary)"};
  border: 2px solid ${props => props.active ? "var(--primary-color)" : "var(--border-color)"};
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: ${props => props.active ? "white" : "var(--primary-color)"};
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResourceCard = styled.div`
  background-color: var(--background-light);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const ResourceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const FileType = styled.span`
  background-color: var(--primary-color);
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

const FileSize = styled.span`
  color: var(--text-secondary);
  font-size: 14px;
`;

const ResourceTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--text-primary);
`;

const ResourceDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
  margin-bottom: 24px;
`;

const ResourceFooter = styled.div`
  margin-top: auto;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    text-decoration: none;
    color: white;
  }
`;

const MediaInquiries = styled.div`
  background-color: var(--background-light);
  border-radius: 12px;
  padding: 40px;
  margin-top: 60px;
`;

const InquiriesTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--text-primary);
`;

const InquiriesContent = styled.div`
  p {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 20px;
  }
`;

const ContactDetails = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
  
  strong {
    color: var(--text-primary);
    margin-right: 8px;
  }
`;

const MediaPolicyLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default MediaResources;