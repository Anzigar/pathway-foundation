import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import ViewAllLink from "../common/ViewAllLink";

// Styled component for "View all projects" link with distinct color
const CustomViewAllLink = styled(ViewAllLink)`
  color: var(--secondary-color, #efb000); /* Using the secondary color from the website */
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  margin-top: 30px;

  &:hover {
    color: var(--secondary-color-dark, #d9a000);
    transform: translateX(5px);
  }

  svg {
    margin-left: 8px;
    font-size: 14px;
  }
`;

// Usage in JSX
<CustomViewAllLink to="/projects" text="View all projects" />;