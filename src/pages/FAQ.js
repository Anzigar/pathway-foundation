import React, { useState } from "react";
import styled from "styled-components";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";

const FAQSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FAQContainer = styled.div`
  margin-bottom: 60px;
`;

const FAQItem = styled.div`
  margin-bottom: 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: 20px;
  background-color: var(--background-light);
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background-color: rgba(6, 104, 225, 0.05);
  }
`;

const FAQAnswer = styled.div`
  padding: ${props => props.isOpen ? "20px" : "0 20px"};
  max-height: ${props => props.isOpen ? "1000px" : "0"};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const ToggleIcon = styled.span`
  font-size: 20px;
  color: var(--primary-color);
`;

const ContactBox = styled.div`
  background-color: var(--background-light);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--text-primary);
`;

const ContactText = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.6;
`;

const ContactButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    color: white;
  }
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqItems = [
    {
      question: "How can I donate to Pathway Foundation?",
      answer: "You can donate to Pathway Foundation through our online donation platform which accepts credit/debit cards, PayPal, and mobile money transfers. We offer options for one-time and recurring donations. All donations are securely processed and you'll receive a confirmation receipt via email."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, Pathway Foundation is a registered non-profit organization, and donations are tax-deductible to the extent allowed by law. You will receive a donation receipt that can be used for tax purposes."
    },
    {
      question: "How can I volunteer with Pathway Foundation?",
      answer: "We have various volunteering opportunities both on-site in Tanzania and remotely. To volunteer, visit our 'Get Involved' page and fill out the volunteer application form. Our team will review your application and contact you to discuss opportunities that match your skills and interests."
    },
    {
      question: "What percentage of my donation goes directly to programs?",
      answer: "At Pathway Foundation, we maintain a commitment to financial transparency and efficiency. Currently, approximately 85% of all donations go directly to our programs and services, with the remaining 15% covering essential administrative and fundraising costs."
    },
    {
      question: "Can I specify which project I'd like my donation to support?",
      answer: "Yes, during the donation process, you can select a specific project or program you'd like to support. If you have a particular area of interest not listed, please contact us, and we'll do our best to accommodate your request."
    },
    {
      question: "Does Pathway Foundation accept in-kind donations?",
      answer: "Yes, we accept in-kind donations that align with our current program needs. Please contact us beforehand to discuss your proposed donation to ensure it matches our current needs and to arrange logistics."
    },
    {
      question: "How can my organization partner with Pathway Foundation?",
      answer: "We welcome partnerships with organizations that share our vision and values. Please visit our 'Get Involved' page and fill out the partnership inquiry form. Our team will review your inquiry and contact you to discuss potential collaboration opportunities."
    },
    {
      question: "Where does Pathway Foundation operate?",
      answer: "Pathway Foundation primarily operates in Tanzania, with a focus on underserved communities. Our headquarters are in Dar es Salaam, but our programs extend to various regions throughout the country."
    }
  ];
  
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  return (
    <>
      <PageBanner 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our work, donations, and how you can get involved"
      />
      
      <FAQSection>
        <SectionContent>
          <FAQContainer>
            {faqItems.map((item, index) => (
              <FAQItem key={index}>
                <FAQQuestion onClick={() => toggleFAQ(index)}>
                  {item.question}
                  <ToggleIcon>{activeIndex === index ? "−" : "+"}</ToggleIcon>
                </FAQQuestion>
                <FAQAnswer isOpen={activeIndex === index}>
                  {item.answer}
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQContainer>
          
          <ContactBox>
            <ContactTitle>Didn&apos;t find your answer?</ContactTitle>
            <ContactText>
              Our team is here to help. Reach out to us with any questions you may have about our organization or programs.
            </ContactText>
            <ContactButton href="/contact-us">Contact Us</ContactButton>
          </ContactBox>
        </SectionContent>
      </FAQSection>
      
      <CallToAction />
    </>
  );
};

export default FAQ;