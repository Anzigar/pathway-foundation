import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-locations">
          <div className="location-card headquarters">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 
              Headquarters (USA)
            </h3>
            <p>Texas, United States of America</p>
            <div className="map-container">
              <iframe 
                title="USA Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13845.846894772696!2d-97.74311038261719!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a12a3addfd%3A0x326c046be0fa1d66!2sTexas%20Capitol!5e0!3m2!1sen!2sus!4v1655201303844!5m2!1sen!2sus"
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="location-card">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 
              Tanzania Office
            </h3>
            <p>P.O. Box 33903, Dar es Salaam, Tanzania</p>
            <div className="map-container">
              <iframe 
                title="Tanzania Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126834.84180701882!2d39.1711876!3d-6.8222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c1fdb45a68f%3A0xb3c54e9f3c11f0a9!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1655201424510!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="contact-methods">
          <div className="contact-method">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <h3>Phone</h3>
            <p><a href="tel:+255765363751">+255 765 363 751</a></p>
          </div>

          <div className="contact-method">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <h3>Email</h3>
            <p><a href="mailto:info@pathwaysfoundation.org">info@pathwaysfoundation.org</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
