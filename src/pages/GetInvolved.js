import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import { FaHandsHelping, FaHandHoldingHeart, FaBriefcase } from "react-icons/fa";

const GetInvolvedSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 80px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OptionCard = styled.div`
  background-color: var(--background-light);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const OptionHeader = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 30px;
  text-align: center;
`;

const OptionIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const OptionTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const OptionBody = styled.div`
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const OptionDescription = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
`;

const OptionButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    color: white;
  }
`;

const TabsContainer = styled.div`
  margin-bottom: 40px;
`;

const TabsNav = styled.div`
  display: flex;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 40px;
`;

const TabButton = styled.button`
  padding: 16px 24px;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: -2px;
  
  &:hover {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 16px;
  }
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
  min-height: 120px;
  transition: border 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const FormSelect = styled.select`
  padding: 14px 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 16px;
  color: var(--text-primary);
  background-color: white;
  transition: border 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--text-secondary);
  cursor: pointer;
  
  input {
    margin-right: 8px;
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

const SectionTitle = styled.h2`
  font-size: 36px;
  color: var(--text-primary);
  margin-bottom: 24px;
  text-align: center;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState("volunteer");
  const [formSuccess, setFormSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormSuccess(true);
      e.target.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      <PageBanner 
        title="Get Involved" 
        subtitle="Join us in our mission to create sustainable change in vulnerable communities" 
      />
      
      <GetInvolvedSection>
        <SectionContent>
          <SectionTitle>How You Can Help</SectionTitle>
          <SectionDescription>
            There are many ways you can support our work and help create a positive impact in vulnerable communities. Choose the option that best suits your interests and capacity.
          </SectionDescription>
          
          <OptionsGrid>
            <OptionCard>
              <OptionHeader>
                <OptionIcon>
                  <FaHandHoldingHeart />
                </OptionIcon>
                <OptionTitle>Donate</OptionTitle>
              </OptionHeader>
              <OptionBody>
                <OptionDescription>
                  Your financial contribution directly supports our programs and helps us create sustainable change in vulnerable communities. Every donation, big or small, makes a difference.
                </OptionDescription>
                <OptionButton to="/donate">Donate Now</OptionButton>
              </OptionBody>
            </OptionCard>
            
            <OptionCard>
              <OptionHeader>
                <OptionIcon>
                  <FaHandsHelping />
                </OptionIcon>
                <OptionTitle>Volunteer</OptionTitle>
              </OptionHeader>
              <OptionBody>
                <OptionDescription>
                  Share your skills and time to support our work. Whether you&apos;re in Tanzania or abroad, there are many ways you can contribute as a volunteer.
                </OptionDescription>
                <OptionButton to="#volunteer-form" onClick={() => setActiveTab("volunteer")}>Volunteer With Us</OptionButton>
              </OptionBody>
            </OptionCard>
            
            <OptionCard>
              <OptionHeader>
                <OptionIcon>
                  <FaBriefcase />
                </OptionIcon>
                <OptionTitle>Partner</OptionTitle>
              </OptionHeader>
              <OptionBody>
                <OptionDescription>
                  We believe in the power of collaboration. Partner with us to leverage resources, expertise, and networks to create greater impact in the communities we serve.
                </OptionDescription>
                <OptionButton to="#partner-form" onClick={() => setActiveTab("partner")}>Become a Partner</OptionButton>
              </OptionBody>
            </OptionCard>
          </OptionsGrid>
          
          <div id="volunteer-form">
            <TabsContainer>
              <TabsNav>
                <TabButton 
                  active={activeTab === "volunteer"} 
                  onClick={() => setActiveTab("volunteer")}
                >
                  Volunteer Application
                </TabButton>
                <TabButton 
                  active={activeTab === "partner"} 
                  onClick={() => setActiveTab("partner")}
                >
                  Partnership Inquiry
                </TabButton>
              </TabsNav>
              
              {formSuccess && (
                <FormSuccess>
                  Thank you for your submission! We will review your information and get back to you soon.
                </FormSuccess>
              )}
              
              {activeTab === "volunteer" && (
                <Form onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="firstName">First Name*</FormLabel>
                      <FormInput type="text" id="firstName" name="firstName" required />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="lastName">Last Name*</FormLabel>
                      <FormInput type="text" id="lastName" name="lastName" required />
                    </FormGroup>
                  </FormRow>
                  
                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="email">Email Address*</FormLabel>
                      <FormInput type="email" id="email" name="email" required />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="phone">Phone Number</FormLabel>
                      <FormInput type="tel" id="phone" name="phone" />
                    </FormGroup>
                  </FormRow>
                  
                  <FormGroup>
                    <FormLabel htmlFor="location">Location*</FormLabel>
                    <FormInput 
                      type="text" 
                      id="location" 
                      name="location" 
                      placeholder="City, Country" 
                      required 
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Areas of Interest*</FormLabel>
                    <CheckboxGroup>
                      <CheckboxLabel>
                        <input type="checkbox" name="interests" value="economic-empowerment" />
                        Economic Empowerment
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="interests" value="gender-equality" />
                        Gender Equality
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="interests" value="youth-development" />
                        Youth Development
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="interests" value="wash-health" />
                        WASH & Health
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="interests" value="climate-resilience" />
                        Climate Resilience
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="interests" value="emergency-response" />
                        Emergency Response
                      </CheckboxLabel>
                    </CheckboxGroup>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="skills">Skills & Expertise*</FormLabel>
                    <FormTextarea 
                      id="skills" 
                      name="skills" 
                      placeholder="Please describe your relevant skills, experience, and qualifications." 
                      required 
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="availability">Availability*</FormLabel>
                    <FormSelect id="availability" name="availability" required>
                      <option value="">Select your availability</option>
                      <option value="part-time">Part-time (1-10 hours/week)</option>
                      <option value="half-time">Half-time (10-20 hours/week)</option>
                      <option value="full-time">Full-time (20+ hours/week)</option>
                      <option value="one-time">One-time project</option>
                      <option value="flexible">Flexible</option>
                    </FormSelect>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="motivation">Why do you want to volunteer with us?*</FormLabel>
                    <FormTextarea 
                      id="motivation" 
                      name="motivation" 
                      placeholder="Please share your motivation for volunteering with Pathway Foundation." 
                      required 
                    />
                  </FormGroup>
                  
                  <SubmitButton type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Application"}
                  </SubmitButton>
                </Form>
              )}
              
              {activeTab === "partner" && (
                <Form onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="orgName">Organization Name*</FormLabel>
                      <FormInput type="text" id="orgName" name="orgName" required />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="orgType">Organization Type*</FormLabel>
                      <FormSelect id="orgType" name="orgType" required>
                        <option value="">Select organization type</option>
                        <option value="nonprofit">Nonprofit / NGO</option>
                        <option value="corporate">Corporate / Business</option>
                        <option value="government">Government Agency</option>
                        <option value="foundation">Foundation</option>
                        <option value="academic">Academic Institution</option>
                        <option value="other">Other</option>
                      </FormSelect>
                    </FormGroup>
                  </FormRow>
                  
                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="contactName">Contact Person*</FormLabel>
                      <FormInput type="text" id="contactName" name="contactName" required />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="contactTitle">Job Title*</FormLabel>
                      <FormInput type="text" id="contactTitle" name="contactTitle" required />
                    </FormGroup>
                  </FormRow>
                  
                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="contactEmail">Email Address*</FormLabel>
                      <FormInput type="email" id="contactEmail" name="contactEmail" required />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="contactPhone">Phone Number*</FormLabel>
                      <FormInput type="tel" id="contactPhone" name="contactPhone" required />
                    </FormGroup>
                  </FormRow>
                  
                  <FormGroup>
                    <FormLabel htmlFor="website">Website</FormLabel>
                    <FormInput type="url" id="website" name="website" placeholder="https://" />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="partnershipType">Partnership Type*</FormLabel>
                    <FormSelect id="partnershipType" name="partnershipType" required>
                      <option value="">Select partnership type</option>
                      <option value="funding">Funding / Grants</option>
                      <option value="technical">Technical Support</option>
                      <option value="implementation">Project Implementation</option>
                      <option value="research">Research Collaboration</option>
                      <option value="advocacy">Advocacy Partnership</option>
                      <option value="other">Other</option>
                    </FormSelect>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Areas of Interest*</FormLabel>
                    <CheckboxGroup>
                      <CheckboxLabel>
                        <input type="checkbox" name="partnerInterests" value="economic-empowerment" />
                        Economic Empowerment
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="partnerInterests" value="gender-equality" />
                        Gender Equality
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="partnerInterests" value="youth-development" />
                        Youth Development
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="partnerInterests" value="wash-health" />
                        WASH & Health
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="partnerInterests" value="climate-resilience" />
                        Climate Resilience
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input type="checkbox" name="partnerInterests" value="emergency-response" />
                        Emergency Response
                      </CheckboxLabel>
                    </CheckboxGroup>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="partnershipProposal">Partnership Proposal*</FormLabel>
                    <FormTextarea 
                      id="partnershipProposal" 
                      name="partnershipProposal" 
                      placeholder="Please describe your proposed partnership and how it aligns with our mission." 
                      required 
                    />
                  </FormGroup>
                  
                  <SubmitButton type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Inquiry"}
                  </SubmitButton>
                </Form>
              )}
            </TabsContainer>
          </div>
        </SectionContent>
      </GetInvolvedSection>
    </>
  );
};

export default GetInvolved;