/**
 * Site configuration values
 */
const config = {
  // Site details
  siteName: "Pathway Foundation",
  siteDescription: "Empowering vulnerable communities since 2016",
  siteUrl: "https://www.pathwayfoundation.org",
  
  // Contact information
  contactEmail: "info@pathwayfoundation.org",
  contactPhone: "+255 123 456 789",
  contactAddress: "123 Main Street, Dar es Salaam, Tanzania",
  
  // Social media
  socialMedia: {
    facebook: "https://facebook.com/pathwayfoundation",
    twitter: "https://twitter.com/pathwayfdn",
    instagram: "https://instagram.com/pathwayfoundation",
    linkedin: "https://linkedin.com/company/pathway-foundation",
    youtube: "https://youtube.com/c/pathwayfoundation"
  },
  
  // Organization details
  foundedYear: 2016,
  
  // API endpoints
  apiEndpoints: {
    contactForm: "/api/contact",
    donationForm: "/api/donate",
    newsletterSignup: "/api/newsletter"
  },
  
  // Default meta tags
  defaultMetaTags: {
    title: "Pathway Foundation | Empowering Vulnerable Communities",
    description: "We work to create sustainable change through community-led initiatives focusing on youth development, gender equality, and economic empowerment.",
    keywords: "NGO, nonprofit, Tanzania, community development, youth empowerment, gender equality"
  },
  
  // Google Maps API key (replace with actual key)
  googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  
  // Payment gateway keys (replace with actual keys)
  paymentGateways: {
    paypal: {
      clientId: "YOUR_PAYPAL_CLIENT_ID"
    },
    flutterwave: {
      publicKey: "YOUR_FLUTTERWAVE_PUBLIC_KEY"
    }
  }
};

export default config;