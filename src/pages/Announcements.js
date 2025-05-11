import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";

/**
 * Announcements - Component for displaying organization announcements
 * @returns {JSX.Element} The Announcements component
 */
const Announcements = () => {
  // Mock data for announcements
  const announcements = [
    {
      id: 1,
      title: "Pathway Foundation Launches New Youth Leadership Program",
      content: "We are excited to announce the launch of our new Youth Leadership Program, aimed at empowering young people with the skills and opportunities to become effective leaders in their communities.",
      date: "June 15, 2023",
      slug: "youth-leadership-program"
    },
    {
      id: 2,
      title: "Partnership with Global Water Initiative Announced",
      content: "Pathway Foundation is proud to announce a new partnership with the Global Water Initiative to expand clean water access in rural communities across Tanzania.",
      date: "May 30, 2023",
      slug: "global-water-initiative-partnership"
    },
    {
      id: 3,
      title: "Annual Report 2022 Now Available",
      content: "Our Annual Report for 2022 is now available, detailing our achievements, challenges, and financial transparency for the past year.",
      date: "May 10, 2023",
      slug: "annual-report-2022"
    },
    {
      id: 4,
      title: "Pathway Foundation Receives Excellence in Community Development Award",
      content: "We are honored to have received the 2023 Excellence in Community Development Award from the Tanzania NGO Coalition for our work in sustainable community development.",
      date: "April 22, 2023",
      slug: "excellence-award-2023"
    },
    {
      id: 5,
      title: "New Board Members Appointed",
      content: "Pathway Foundation is pleased to announce the appointment of three new board members who bring diverse expertise and experience to our organization.",
      date: "April 5, 2023",
      slug: "new-board-members-2023"
    },
    {
      id: 6,
      title: "Position Opening: Program Manager",
      content: "We are seeking a dedicated Program Manager to join our team and lead our youth development initiatives. Applications are open until April 30, 2023.",
      date: "March 20, 2023",
      slug: "job-opening-program-manager"
    }
  ];

  return (
    <>
      <PageBanner 
        title="Announcements" 
        subtitle="Official announcements and updates from Pathway Foundation" 
      />
      
      <AnnouncementsSection>
        <SectionContent>
          <AnnouncementsList>
            {announcements.map(announcement => (
              <AnnouncementItem key={announcement.id}>
                <AnnouncementDate>{announcement.date}</AnnouncementDate>
                <AnnouncementTitle>
                  <Link to={`/news-events/announcements/${announcement.slug}`}>
                    {announcement.title}
                  </Link>
                </AnnouncementTitle>
                <AnnouncementContent>
                  {announcement.content}
                </AnnouncementContent>
                <ReadMoreLink to={`/news-events/announcements/${announcement.slug}`}>
                  Read Full Announcement
                </ReadMoreLink>
              </AnnouncementItem>
            ))}
          </AnnouncementsList>
          
          <Pagination>
            <PaginationButton>&laquo; Previous</PaginationButton>
            <PageNumber active>1</PageNumber>
            <PageNumber>2</PageNumber>
            <PaginationButton>Next &raquo;</PaginationButton>
          </Pagination>
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
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AnnouncementsList = styled.div`
  margin-bottom: 60px;
`;

const AnnouncementItem = styled.article`
  padding: 30px;
  margin-bottom: 30px;
  background-color: var(--background-light);
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

const AnnouncementDate = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
`;

const AnnouncementTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 16px;
  
  a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const AnnouncementContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 20px;
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`;

const PageNumber = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.active ? "var(--primary-color)" : "var(--border-color)"};
  border-radius: 4px;
  background-color: ${props => props.active ? "var(--primary-color)" : "transparent"};
  color: ${props => props.active ? "white" : "var(--text-secondary)"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: ${props => props.active ? "white" : "var(--primary-color)"};
  }
`;

export default Announcements;