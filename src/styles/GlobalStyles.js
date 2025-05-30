import { createGlobalStyle } from "styled-components";

/**
 * Global styles with Meta-inspired design system variables
 */
const GlobalStyles = createGlobalStyle`
  :root {
    /* Typography */
    --font-primary: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --font-secondary: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    
    /* Primary colors */
    --primary-color: #087FAE;
    --secondary-color: #EFB000;
    --accent-color: #00B5E2;
    
    /* Text colors */
    --text-primary: #333333;
    --text-secondary: #666666;
    --text-tertiary: #999999;
    --text-light: #FFFFFF;
    
    /* Background colors */
    --background-white: #FFFFFF;
    --background-light: #F9F9F9;
    --background-medium: #E4E6EB;
    --background-dark: #1C2B33;
    
    /* Border colors */
    --border-color: #EEEEEE;
    --border-light: #F0F2F5;
    
    /* Spacing variables - using 4px as base unit */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 48px;
    
    /* Border radius */
    --border-radius-sm: 6px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-radius-xl: 16px;
    --border-radius-pill: 100px;
    
    /* Shadows */
    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.12);
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: var(--font-primary);
    font-size: 16px;
    line-height: 1.5;
    color: var(--text-primary);
    background-color: var(--background-white);
  }
  
  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--secondary-color);
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: var(--spacing-md);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
  
  h1 {
    font-size: 42px;
    letter-spacing: -0.02em;
  }
  
  h2 {
    font-size: 36px;
  }
  
  h3 {
    font-size: 24px;
  }
  
  p {
    margin-bottom: var(--spacing-md);
    font-weight: 400;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;