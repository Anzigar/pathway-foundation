import React from "react";
import styled from "styled-components";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";
import { FaQuoteLeft } from "react-icons/fa";

/**
 * Testimonials - Component for displaying beneficiary and partner testimonials
 * @returns {JSX.Element} The Testimonials component
 */
const Testimonials = () => {
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Maria Joseph",
      role: "Community Member, Mtambani Village",
      avatar: "/images/testimonials/maria.jpg",
      quote: "The clean water project has completely transformed our daily lives. Before, I had to walk 3 kilometers every day to fetch water. Now, with the new water point in our village, I can use that time for my small business instead.",
      category: "beneficiary"
    },
    {
      id: 2,
      name: "Global Water Initiative",
      role: "Partner Organization",
      avatar: "/images/testimonials/gwi-logo.jpg",
      quote: "Working with Pathway Foundation has been an exceptional experience. Their community-centered approach and dedication to sustainable outcomes aligns perfectly with our values. Together, we've been able to reach more communities than either of us could have alone.",
      category: "partner"
    },
    {
      id: 3,
      name: "Thomas Kileo",
      role: "Youth Program Participant",
      avatar: "/images/testimonials/thomas.jpg",
      quote: "The leadership training I received through Pathway Foundation gave me the confidence and skills to start my own community project. Now I'm mentoring other young people, creating a positive cycle of change.",
      category: "beneficiary"
    },
    {
      id: 4,
      name: "Sarah Mwangi",
      role: "Teacher, Karibu Primary School",
      avatar: "/images/testimonials/sarah.jpg",
      quote: "The Menstrual Justice Initiative has significantly improved attendance rates for our female students. Girls who used to miss a week of school every month are now able to attend class consistently, improving their academic performance.",
      category: "beneficiary"
    },
    {
      id: 5,
      name: "Tanzania Community Development Trust",
      role: "Funding Partner",
      avatar: "/images/testimonials/tcdt-logo.jpg",
      quote: "Pathway Foundation consistently demonstrates excellent stewardship of resources and delivers meaningful, measurable impact. Their transparent reporting and community-led approach makes them a valued partner in sustainable development.",
      category: "partner"
    },
    {
      id: 6,
      name: "Emmanuel Mushi",
      role: "Farmer, Climate Resilience Program",
      avatar: "/images/testimonials/emmanuel.jpg",
      quote: "The climate-smart agriculture techniques I learned have helped me increase my crop yield despite changing weather patterns. My income has improved, and I'm now teaching these methods to other farmers in neighboring villages.",
      category: "beneficiary"
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredTestimonials = activeCategory === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  return (
    <>
      <PageBanner 
        title="Testimonials" 
        subtitle="Stories from the communities we work with and our partners" 
      />
      
      <TestimonialsSection>
        <SectionContent>
          <CategoryFilter>
            <CategoryButton 
              active={activeCategory === "all"} 
              onClick={() => setActiveCategory("all")}
            >
              All Testimonials
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === "beneficiary"} 
              onClick={() => setActiveCategory("beneficiary")}
            >
              Community Voices
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === "partner"} 
              onClick={() => setActiveCategory("partner")}
            >
              Partner Organizations
            </CategoryButton>
          </CategoryFilter>
          
          <TestimonialsGrid>
            {filteredTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id}>
                <QuoteIconWrapper>
                  <FaQuoteLeft />
                </QuoteIconWrapper>
                <TestimonialQuote>
                  {testimonial.quote}
                </TestimonialQuote>
                <TestimonialAuthor>
                  <AuthorAvatar>
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
          
          <ShareTestimonial>
            <ShareTitle>Share Your Story</ShareTitle>
            <ShareDescription>
              Have you been impacted by our work? We&apos;d love to hear your story and potentially feature it on our website.
            </ShareDescription>
            <ShareButton href="/contact-us">Submit Your Testimonial</ShareButton>
          </ShareTestimonial>
        </SectionContent>
      </TestimonialsSection>
      
      <CallToAction />
    </>
  );
};

// Styled components
const TestimonialsSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CategoryFilter = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? "var(--primary-color)" : "transparent"};
  color: ${props => props.active ? "white" : "var(--text-secondary)"};
  border: 2px solid ${props => props.active ? "var(--primary-color)" : "var(--border-color)"};
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: ${props => props.active ? "white" : "var(--primary-color)"};
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: var(--background-light);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const QuoteIconWrapper = styled.div`
  color: var(--primary-color);
  font-size: 24px;
  margin-bottom: 16px;
  opacity: 0.6;
`;

const TestimonialQuote = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
  margin-bottom: 24px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 18px;
  margin-bottom: 4px;
  color: var(--text-primary);
`;

const AuthorRole = styled.p`
  font-size: 14px;
  color: var(--text-secondary);
`;

const ShareTestimonial = styled.div`
  background-color: var(--background-light);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const ShareTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--text-primary);
`;

const ShareDescription = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.6;
`;

const ShareButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    text-decoration: none;
    color: white;
  }
`;

export default Testimonials;