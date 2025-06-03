import React, { useState } from "react";
import styled from "styled-components";
import PageBanner from "../components/ui/PageBanner";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import axios from "axios";

const ContactSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoTitle = styled.h2`
  font-size: 36px;
  color: var(--text-primary);
  margin-bottom: 30px;
`;

const ContactInfoText = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ContactDetails = styled.div`
  margin-bottom: 40px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const ContactIcon = styled.div`
  color: var(--primary-color);
  font-size: 24px;
  margin-right: 20px;
  margin-top: 4px;
`;

const ContactText = styled.div``;

const ContactItemTitle = styled.h3`
  font-size: 20px;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const ContactItemContent = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const MapContainer = styled.div`
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ContactForm = styled.div``;

const FormTitle = styled.h2`
  font-size: 36px;
  color: var(--text-primary);
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: grid;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FormLabel = styled.label`
  font-size: 16px;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 14px 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 16px;
  color: var(--text-primary);
  transition: border 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const FormTextarea = styled.textarea`
  padding: 14px 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 16px;
  color: var(--text-primary);
  resize: vertical;
  min-height: 150px;
  transition: border 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 16px 32px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-4px);
  }
  
  &:disabled {
    background-color: var(--text-secondary);
    cursor: not-allowed;
    transform: none;
  }
`;

const FormSuccess = styled.div`
  background-color: var(--success-color);
  color: white;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 24px;
`;

const FormError = styled.div`
  background-color: var(--error-color);
  color: white;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 24px;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Map the form data to match the API payload format
      const payloadData = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phone, // Map 'phone' to 'phoneNumber' as per API
        subject: formData.subject,
        message: formData.message
      };
      
      // Send data to the API endpoint
      const response = await axios.post("http://127.0.0.1:5001/api/contacts/", payloadData);
      
      setFormStatus({
        submitted: true,
        success: true,
        error: false,
        message: "Thank you for your message! We will get back to you soon."
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        submitted: true,
        success: false,
        error: true,
        message: error.response?.data?.message || "Failed to send message. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, partnerships, or to learn more about our work" 
      />
      
      <ContactSection>
        <ContactContent>
          <ContactGrid>
            <ContactInfo>
              <ContactInfoTitle>Get In Touch</ContactInfoTitle>
              <ContactInfoText>
                We&apos;d love to hear from you! Whether you have a question about our work, partnership opportunities, or how you can get involved, our team is ready to help.
              </ContactInfoText>
              
              <ContactDetails>
                <ContactItem>
                  <ContactIcon>
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <ContactText>
                    <ContactItemTitle>Tanzania Office</ContactItemTitle>
                    <ContactItemContent>
                      Mabwepande, Bunju B, Kinondoni Municipal<br />
                      Dar es Salaam, Tanzania
                    </ContactItemContent>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <ContactText>
                    <ContactItemTitle>USA Headquarters</ContactItemTitle>
                    <ContactItemContent>
                      Texas, United States of America
                    </ContactItemContent>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <FaPhone />
                  </ContactIcon>
                  <ContactText>
                    <ContactItemTitle>Phone</ContactItemTitle>
                    <ContactItemContent>
                      +255 684 412 476
                    </ContactItemContent>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <FaEnvelope />
                  </ContactIcon>
                  <ContactText>
                    <ContactItemTitle>Email</ContactItemTitle>
                    <ContactItemContent>
                      info@pathwaysfoundationforthepoor.org
                    </ContactItemContent>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <FaClock />
                  </ContactIcon>
                  <ContactText>
                    <ContactItemTitle>Office Hours</ContactItemTitle>
                    <ContactItemContent>
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Weekends: Closed
                    </ContactItemContent>
                  </ContactText>
                </ContactItem>
              </ContactDetails>
              
              <MapContainer>
                <iframe 
                  title="Pathway Foundation Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63534.80873307668!2d39.2383820242898!3d-6.776241664717426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b03a7a0c9bb%3A0xf36189422128e1a9!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1623396204712!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </MapContainer>
            </ContactInfo>
            
            <ContactForm>
              <FormTitle>Send Us a Message</FormTitle>
              
              {formStatus.success && (
                <FormSuccess>{formStatus.message}</FormSuccess>
              )}
              
              {formStatus.error && (
                <FormError>{formStatus.message}</FormError>
              )}
              
              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="name">Full Name*</FormLabel>
                    <FormInput 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="email">Email Address*</FormLabel>
                    <FormInput 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </FormGroup>
                </FormRow>
                
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <FormInput 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="subject">Subject*</FormLabel>
                    <FormInput 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <FormLabel htmlFor="message">Message*</FormLabel>
                  <FormTextarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  ></FormTextarea>
                </FormGroup>
                
                <SubmitButton type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </SubmitButton>
              </Form>
            </ContactForm>
          </ContactGrid>
        </ContactContent>
      </ContactSection>
    </>
  );
};

export default ContactUs;