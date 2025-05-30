import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with us for inquiries, partnerships, or to learn more about our work"
      />
      <div className="container">
        <div className="contact-layout">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
