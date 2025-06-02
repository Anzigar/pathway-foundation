import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

// Styled components
const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 98%;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const LocationCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const LocationHeader = styled.div`
  background: var(--primary-color);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const LocationIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const LocationTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0;
`;

const LocationAddress = styled.p`
  padding: 1rem;
  margin: 0;
  background: #f9f9f9;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 250px;
`;

const ContactInfoSection = styled.section`
  margin-top: 3rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const ContactInfoCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 0.75rem;
`;

const ContactInfoContent = styled.div`
  flex: 1;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #333;
`;

const ContactInfoText = styled.p`
  margin: 0;
  color: #666;
`;

// Contact page component
const ContactPage = () => {
  return (
    <div>
      {/* PageHeader if exists */}
      
      <ContactContainer>
        <SectionTitle>Contact Us</SectionTitle>
        
        <LocationsGrid>
          <LocationCard>
            <LocationHeader>
              <LocationIcon>
                <FaMapMarkerAlt />
              </LocationIcon>
              <LocationTitle>USA Headquarters</LocationTitle>
            </LocationHeader>
            <LocationAddress>
              Texas, United States of America
            </LocationAddress>
            <MapContainer>
              <iframe 
                title="USA Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13803.593863605938!2d-97.74311!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50a22a9459d%3A0x3d57b13d34de38ce!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1649854345012!5m2!1sen!2sus" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </MapContainer>
          </LocationCard>

          <LocationCard>
            <LocationHeader>
              <LocationIcon>
                <FaMapMarkerAlt />
              </LocationIcon>
              <LocationTitle>Tanzania Office</LocationTitle>
            </LocationHeader>
            <LocationAddress>
              Dar es Salaam, Tanzania
            </LocationAddress>
            <MapContainer>
              <iframe 
                title="Tanzania Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.694040822547!2d39.2733254!3d-6.8222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0a4f6d0c3b%3A0x725fae3baf9a0744!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1649854421397!5m2!1sen!2sus" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </MapContainer>
          </LocationCard>
        </LocationsGrid>
        
        <ContactInfoSection>
          <InfoTitle>Get in Touch</InfoTitle>
          <ContactInfoGrid>
            <ContactInfoCard>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactInfoContent>
                <ContactInfoTitle>Phone</ContactInfoTitle>
                <ContactInfoText>+255 678 495 109</ContactInfoText>
              </ContactInfoContent>
            </ContactInfoCard>
            
            <ContactInfoCard>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactInfoContent>
                <ContactInfoTitle>Email</ContactInfoTitle>
                <ContactInfoText>info@pathwaysfoundation.org</ContactInfoText>
              </ContactInfoContent>
            </ContactInfoCard>
            
            <ContactInfoCard>
              <ContactIcon>
                <FaGlobe />
              </ContactIcon>
              <ContactInfoContent>
                <ContactInfoTitle>Website</ContactInfoTitle>
                <ContactInfoText>www.pathwaysfoundation.org</ContactInfoText>
              </ContactInfoContent>
            </ContactInfoCard>
          </ContactInfoGrid>
        </ContactInfoSection>

        {/* Contact form if exists */}
      </ContactContainer>
    </div>
  );
};

export default ContactPage;