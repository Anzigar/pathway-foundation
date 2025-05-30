This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Pathway Foundation Website

## Typography Guide

This project uses the Montserrat typeface from Google Fonts as its primary font family. Montserrat provides excellent readability and a modern, clean aesthetic that aligns with our Meta-inspired design system.

### Font Usage

#### Font Weights

- **Light (300)**: Used for secondary text and subtle elements
- **Regular (400)**: Default for body text
- **Medium (500)**: Used for emphasis and links
- **Semibold (600)**: Used for subheadings
- **Bold (700)**: Used for headings and CTAs

#### CSS Variables

The font is available through CSS variables:

```css
/* Primary font for most text */
var(--font-primary)

/* Secondary font (also Montserrat in this design) */
var(--font-secondary)
```

### Usage Examples

#### React Component

```jsx
import styled from "styled-components";

const Heading = styled.h2`
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 2.5rem;
`;
```

#### Styled Components

```jsx
const Paragraph = styled.p`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
`;
```

### Performance Optimization

The font is preloaded using React Helmet to optimize performance. This approach:

1. Establishes early connections to Google Fonts
2. Preloads the font to prevent layout shifts
3. Provides a smooth rendering experience

## Design System

Our design system follows Meta's modern aesthetic with:

- Clean, minimal interfaces
- Ample white space
- Consistent rounded corners
- Subtle shadows and hover effects
- Card-based layouts
- Smooth animations and transitions

See the `GlobalStyles.js` file for our complete design token definitions.

## Development

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

### Building for Production

```bash
npm run build
```
