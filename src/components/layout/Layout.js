import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default Layout;