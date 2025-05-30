// Styled component for "View all projects" link with distinct color
const ViewAllLink = styled(Link)`
  color: var(--secondary-color, #EFB000); /* Using the secondary color from the website */
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