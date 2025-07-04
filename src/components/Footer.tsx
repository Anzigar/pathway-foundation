import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';
// ...existing imports...

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="footer-title">About Us</h3>
              <div className="footer-logo">
                <img src="/logo.svg" alt="Pathways Foundation for the Poor" className="footer-logo-img" />
              </div>
              <p className="footer-description">
                Pathways Foundation for the Poor is dedicated to uplifting vulnerable communities through sustainable development programs since 2006.
              </p>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
                  <div>
                    <strong>Headquarters (USA):</strong><br />
                    Texas, United States of America
                  </div>
                </li>
                <li className="footer-contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
                  <div>
                    <strong>Tanzania Office:</strong><br />
                    P.O. Box 33903, Dar es Salaam, Tanzania
                  </div>
                </li>
                <li className="footer-contact-item">
                  <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                  <div>
                    <strong>USA:</strong> <a href="tel:+13464207021">+1 (346) 420-7021</a><br />
                    <strong>Tanzania:</strong> <a href="tel:+255765363751">+255 765 363 751</a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                  <a href="mailto:info@pathwaysfoundation.org">info@pathwaysfoundation.org</a>
                </li>
                <li className="footer-contact-item">
                  <FontAwesomeIcon icon={faGlobe} className="footer-icon" />
                  <a href="https://www.pathwaysfoundation.org">www.pathwaysfoundation.org</a>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/projects">Our Projects</a></li>
                <li><a href="/our-work">Our Work</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/donate">Donate</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Media & Resources</h3>
              <ul className="footer-links">
                <li><a href="/photos">Photos</a></li>
                <li><a href="/videos">Videos</a></li>
                <li><a href="/reports">Annual Reports</a></li>
                <li><a href="/publications">Publications</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Pathways Foundation for the Poor. All Rights Reserved.
          </p>
          <p className="powered-by">
            Powered by <a href="https://hifagroup.com" target="_blank" rel="noopener noreferrer">HIFA GROUP</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
