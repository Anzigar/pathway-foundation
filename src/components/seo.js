import React from "react";
import { Helmet } from "react-helmet";

/**
 * Enhanced SEO component to manage page meta tags
 * @param {Object} props - Component properties
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} [props.keywords] - Comma-separated keywords for SEO
 * @param {string} [props.ogImage] - URL of the image for Open Graph
 * @param {string} [props.canonicalUrl] - Canonical URL of the page
 * @param {string} [props.lang] - Language of the page (default: "en")
 * @param {string} [props.author] - Author of the page
 * @param {string} [props.type] - page type for Open Graph (default: "website")
 * @param {string} [props.publishedTime] - Time when the page was published
 * @param {string} [props.modifiedTime] - Time when the page was last modified
 * @param {string} [props.tags] - Character set of the page (default: "UTF-8")
 * @param {Array} [props.additionalMetaTags] - Additional meta tags to include
 * @returns {React.ReactElement} - Rendered SEO component
  */

const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  type = "website",
  author,
  image,
  publishedTime,
  modifiedTime,
  tags=[]

}) => {
  const siteTitle = "Pathways Foundation for the Poor";
  const siteName = "Pathways Foundation for the Poor";
  const siteUrl = "https://pathwaysfoundation.org";

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Pathways Foundation for the Poor (PFP) is committed to uplifting the lives of impoverished and vulnerable communities in Tanzania through education, clean water, healthcare and sustainability initiatives.";
  const metaKeywords = keywords || "Pathways Foundation for the Poor, Tanzania, education, sustainability, clean water, healthcare, poverty alleviation, youth empowerment, community development, NGO";
  const metaDescription = description || defaultDescription;
  const defaultOgImage = `${siteUrl}/images/og-image.jpg`;
  const fullCanonicalUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="author" content={author || "Pathways Foundation for the Poor"} />

      {/* canonical url */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:image:alt" content={metaDescription} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter tags */}  
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      <meta name="twitter:site" content="@pfptanzania" />
      <meta name="twitter:creator" content="@pfptanzania" />  

      {/* Article specific meta tags */}
       {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && tags.length > 0 && 
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      }

       {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      <meta name="twitter:creator" content="@pfptanzania" />
      <meta name="twitter:site" content="@pfptanzania" />

      {/* Additional meta tags */}
      <meta name="theme-color" content="#087FAE" />
      <meta name="msapplication-TileColor" content="#087FAE" />

      {/* Character set */}
      <script type="application/ld+json">
      {JSON.stringify({
         "@context": "https://schema.org",
          "@type": type === "article" ? "Article" : "Organization",
          ...(type === "article" ? {
            "headline": title,
            "description": metaDescription,
            "image": ogImage || defaultOgImage,
            "author": {
              "@type": "Organization",
              "name": author || "Pathways Foundation for the Poor"
            },
            "publisher": {
              "@type": "Organization",
              "name": siteName,
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/images/Asset.png`
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": fullCanonicalUrl
            }
          } : {
            "name": siteName,
            "alternateName": "PFP Tanzania",
            "url": siteUrl,
            "logo": `${siteUrl}/images/Asset.png`,
            "description": metaDescription,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dar es Salaam",
              "addressCountry": "Tanzania"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+255678495109",
              "contactType": "customer service",
              "email": "info@pathwaysfoundation.org"
            },
            "sameAs": [
              "https://www.instagram.com/pfptanzania",
              "https://www.linkedin.com/in/pfp-tanzania-183bb6369",
              "https://youtube.com/@pfp_tanzania"
            ]
          })
      })}
      </script> 
    </Helmet>
  );
};

export default SEO;