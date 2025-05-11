import React from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

/**
 * Global style component that imports Montserrat font from Google Fonts
 * Uses preload for better performance and follows Google's best practices
 */
const FontStyles = createGlobalStyle`
  /* Define font families */
  :root {
    --font-montserrat: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  
  body {
    font-family: var(--font-montserrat);
  }
`;

/**
 * Fonts component with optimized loading using preload
 * @returns {JSX.Element} Font loading component with Helmet for head management
 */
const Fonts = () => {
  return (
    <>
      <Helmet>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <FontStyles />
    </>
  );
};

export default Fonts;