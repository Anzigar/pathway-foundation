import React from "react";
import { Helmet } from "react-helmet";

/**
 * SEO component to manage page meta tags
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} [props.keywords] - Page keywords
 * @param {string} [props.ogImage] - Open Graph image URL
 * @param {string} [props.canonicalUrl] - Canonical URL
 * @returns {React.ReactElement} SEO component with Helmet
 */
const SEO = ({ title, description, keywords, ogImage, canonicalUrl }) => {
  const siteTitle = "Pathway Foundation";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Pathway Foundation helps create sustainable change in Tanzania through education, clean water, healthcare and sustainability initiatives.";
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || "Pathway Foundation, Tanzania, education, sustainability, clean water, healthcare";
  const defaultOgImage = "/images/og-image.jpg";
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      
      {/* Primary Meta Tags */}
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEO;