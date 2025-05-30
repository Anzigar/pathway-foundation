import React, { useState } from "react";
import styled from "styled-components";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";

/**
 * Gallery - Component for displaying photo gallery
 * @returns {JSX.Element} The Gallery component
 */
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Mock data for gallery images
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/gallery-1.jpg",
      alt: "Youth development workshop",
      category: "Youth",
      caption: "Youth leadership training workshop in Dar es Salaam"
    },
    {
      id: 2,
      src: "/images/gallery/gallery-2.jpg",
      alt: "Clean water project",
      category: "WASH",
      caption: "New water point installation in Mtambani village"
    },
    {
      id: 3,
      src: "//images/hero.jpg",
      alt: "Women's empowerment",
      category: "Gender",
      caption: "Women's entrepreneurship program graduation ceremony"
    },
    {
      id: 4,
      src: "//images/hero.jpg",
      alt: "Community meeting",
      category: "Community",
      caption: "Community consultation for new development project"
    },
    {
      id: 5,
      src: "/images/hero.jpg",
      alt: "School supplies distribution",
      category: "Education",
      caption: "Distribution of school supplies to primary school students"
    },
    {
      id: 6,
      src: "/images/hero.jpg",
      alt: "Tree planting initiative",
      category: "Environment",
      caption: "Community tree planting day for climate resilience"
    },
    {
      id: 7,
      src: "//images/hero.jpg",
      alt: "Health outreach",
      category: "Health",
      caption: "Mobile health clinic in rural community"
    },
    {
      id: 8,
      src: "/images/hero.jpg",
      alt: "Sports program",
      category: "Youth",
      caption: "Youth football tournament for peace building"
    },
    {
      id: 9,
      src: "/images/hero.jpg",
      alt: "Training workshop",
      category: "Education",
      caption: "Vocational skills training for out-of-school youth"
    },
    {
      id: 10,
      src: "/images/hero.jpg",
      alt: "Community garden",
      category: "Environment",
      caption: "Community garden project for food security"
    },
    {
      id: 11,
      src: "/images/hero.jpg",
      alt: "Women's group meeting",
      category: "Gender",
      caption: "Women's savings group weekly meeting"
    },
    {
      id: 12,
      src: "//images/hero.jpg",
      alt: "Infrastructure project",
      category: "Development",
      caption: "School building renovation project completion"
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = [
    "All",
    "Youth",
    "Gender",
    "WASH",
    "Community",
    "Education",
    "Environment",
    "Health",
    "Development"
  ];
  
  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);
  
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <PageBanner 
        title="Photo Gallery" 
        subtitle="Visual stories of our work and impact in communities" 
      />
      
      <GallerySection>
        <SectionContent>
          <CategoryFilter>
            {categories.map(category => (
              <CategoryButton 
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryFilter>
          
          <GalleryGrid>
            {filteredImages.map(image => (
              <GalleryItem key={image.id} onClick={() => openModal(image)}>
                <GalleryImage src={image.src} alt={image.alt} />
                <GalleryOverlay>
                  <GalleryCategory>{image.category}</GalleryCategory>
                  <GalleryCaption>{image.caption}</GalleryCaption>
                </GalleryOverlay>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </SectionContent>
      </GallerySection>
      
      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalImage src={selectedImage.src} alt={selectedImage.alt} />
            <ModalCaption>
              <h3>{selectedImage.caption}</h3>
              <p>Category: {selectedImage.category}</p>
            </ModalCaption>
          </ModalContent>
        </Modal>
      )}
      
      <CallToAction />
    </>
  );
};

// Styled components
const GallerySection = styled.section`
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
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 8px 16px;
  border: 2px solid ${props => props.active ? "var(--primary-color)" : "var(--border-color)"};
  border-radius: 30px;
  background-color: ${props => props.active ? "var(--primary-color)" : "transparent"};
  color: ${props => props.active ? "white" : "var(--text-secondary)"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: ${props => props.active ? "white" : "var(--primary-color)"};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    img {
      transform: scale(1.05);
    }
    
    div {
      opacity: 1;
    }
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const GalleryCategory = styled.span`
  background-color: var(--primary-color);
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 10px;
`;

const GalleryCaption = styled.p`
  color: white;
  font-size: 14px;
  line-height: 1.4;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
`;

const ModalCaption = styled.div`
  padding: 20px;
  
  h3 {
    font-size: 18px;
    margin-bottom: 8px;
    color: var(--text-primary);
  }
  
  p {
    font-size: 14px;
    color: var(--text-secondary);
  }
`;

export default Gallery;