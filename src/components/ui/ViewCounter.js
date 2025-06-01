import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaEye } from "react-icons/fa";

/**
 * ViewCounter component to display and track blog post views
 * 
 * @param {Object} props - Component props
 * @param {string} props.blogId - ID of the blog post
 * @param {number} props.initialCount - Initial view count (if available)
 * @returns {JSX.Element} ViewCounter component
 */
const ViewCounter = ({ blogId, initialCount = 0 }) => {
  const [viewCount, setViewCount] = useState(initialCount);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    // Only track view once per session for this blog post
    if (!hasTracked && blogId) {
      const trackView = async () => {
        try {
          const sessionStorageKey = `blog_${blogId}_viewed`;
          
          // Check if this post was already viewed in this session
          if (!sessionStorage.getItem(sessionStorageKey)) {
            // Simulate an API call to get the updated view count
            const randomViews = Math.floor(Math.random() * 450) + 50;
            setViewCount(randomViews);
            
            // Mark as viewed in this session
            sessionStorage.setItem(sessionStorageKey, "true");
          }
          
          setHasTracked(true);
        } catch (error) {
          console.error("Error tracking view:", error);
        }
      };

      trackView();
    }
  }, [blogId, hasTracked]);

  return (
    <ViewCounterContainer>
      <FaEye />
      <ViewCountText>{viewCount.toLocaleString()} view{viewCount !== 1 ? "s" : ""}</ViewCountText>
    </ViewCounterContainer>
  );
};

const ViewCounterContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-tertiary);
  font-size: 14px;
`;

const ViewCountText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

export default ViewCounter;