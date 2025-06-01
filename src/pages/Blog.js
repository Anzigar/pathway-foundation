import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";
import ViewCounter from "../components/ui/ViewCounter";
import FilterChips from "../components/FilterChips";
import { blogPosts, blogCategories } from '../data/blogPosts';

/**
 * Blog - Component for displaying blog posts grouped by category
 * @returns {JSX.Element} The Blog component
 */
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [groupedBlogs, setGroupedBlogs] = useState({});
  
  // Fetch blog posts
  useEffect(() => {
    // Replace API call with direct data usage
    try {
      setPosts(blogPosts);
      setLoading(false);
    } catch (err) {
      console.error("Error loading blog posts:", err);
      setError("Failed to load blog posts");
      setLoading(false);
    }
  }, []);

  // Group blogs by category whenever blogs or selected categories change
  useEffect(() => {
    const filtered = selectedCategories.length > 0
      ? posts.filter(post => selectedCategories.includes(post.category))
      : posts;
      
    // Group the filtered blogs by category
    const grouped = filtered.reduce((acc, post) => {
      if (!acc[post.category]) {
        acc[post.category] = [];
      }
      acc[post.category].push(post);
      return acc;
    }, {});
    
    setGroupedBlogs(grouped);
  }, [posts, selectedCategories]);

  // Handle category toggle for the filter chips
  const handleCategoryToggle = (category) => {
    if (category === "all") {
      setSelectedCategories([]);
      setCurrentPage(1);
      return;
    }
    
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset to first page when changing filters
  };
  
  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    document.getElementById("blog-section").scrollIntoView({ behavior: "smooth" });
  };
  
  if (loading && posts.length === 0) {
    return (
      <>
        <PageBanner 
          title="Blog" 
          subtitle="Insights, stories, and updates from our work in vulnerable communities" 
        />
        <BlogSection id="blog-section">
          <SectionContent>
            <LoadingIndicator>Loading blog posts...</LoadingIndicator>
          </SectionContent>
        </BlogSection>
      </>
    );
  }
  
  if (error) {
    return (
      <>
        <PageBanner 
          title="Blog" 
          subtitle="Insights, stories, and updates from our work in vulnerable communities" 
        />
        <BlogSection id="blog-section">
          <SectionContent>
            <ErrorMessage>{error}</ErrorMessage>
          </SectionContent>
        </BlogSection>
      </>
    );
  }
  
  return (
    <>
      <PageBanner 
        title="Blog" 
        subtitle="Insights, stories, and updates from our work in vulnerable communities" 
      />
      
      <BlogSection id="blog-section">
        <SectionContent>
          {/* Use FilterChips component instead of category buttons */}
          <FilterChipsWrapper>
            <FilterChips 
              categories={blogCategories}
              selectedCategories={selectedCategories}
              onCategoryToggle={handleCategoryToggle}
            />
          </FilterChipsWrapper>
          
          {/* Display blogs grouped by category */}
          <BlogContent>
            {Object.keys(groupedBlogs).length > 0 ? (
              Object.entries(groupedBlogs).map(([category, posts]) => (
                <CategorySection key={category}>
                  <CategoryTitle>{category}</CategoryTitle>
                  <BlogGrid>
                    {posts.map(post => (
                      <BlogPost key={post.id}>
                        <BlogImageContainer>
                          <BlogImage src={post.image} alt={post.title} />
                          <BlogCategory>{post.category}</BlogCategory>
                        </BlogImageContainer>
                        <BlogContentSection>
                          <BlogMeta>
                            <span>{post.date}</span> • <span>{post.author}</span> 
                            <ViewWrapper>
                              <ViewCounter blogId={post.id} initialCount={post.viewCount || 0} />
                            </ViewWrapper>
                          </BlogMeta>
                          <BlogTitle>{post.title}</BlogTitle>
                          <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                          <ReadMoreLink to={`/news-events/blog/${post.slug}`}>
                            Read More
                          </ReadMoreLink>
                        </BlogContentSection>
                      </BlogPost>
                    ))}
                  </BlogGrid>
                </CategorySection>
              ))
            ) : (
              <NoResults>
                <h3>No Blog Posts Found</h3>
                <p>
                  We couldn't find any blog posts matching your selected filters. Please try different filters or view all blog posts.
                </p>
              </NoResults>
            )}
          </BlogContent>
          
          {totalPages > 1 && (
            <Pagination>
              <PaginationButton 
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &laquo; Previous
              </PaginationButton>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <PageNumber 
                    key={pageNumber}
                    active={currentPage === pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </PageNumber>
                );
              })}
              
              <PaginationButton 
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next &raquo;
              </PaginationButton>
            </Pagination>
          )}
        </SectionContent>
      </BlogSection>
      
      <CallToAction />
    </>
  );
};

// Styled components
const BlogSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FilterChipsWrapper = styled.div`
  margin-bottom: 40px;
`;

const BlogContent = styled.div`
  margin-bottom: 60px;
`;

const CategorySection = styled.div`
  margin-bottom: 60px;
`;

const CategoryTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
  color: var(--text-primary);
  padding-bottom: 8px;
  border-bottom: 2px solid #f0f0f0;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 0;
  color: var(--text-secondary);
  
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: var(--text-primary);
  }
  
  p {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const BlogGrid = styled.div`
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

const BlogPost = styled.article`
  background-color: var(--background-white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const BlogImageContainer = styled.div`
  position: relative;
  height: 200px;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlogCategory = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: var(--primary-color);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

const BlogContentSection = styled.div`
  padding: 24px;
`;

const BlogMeta = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
`;

const BlogTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--text-primary);
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
`;

const ReadMoreLink = styled(Link)`
  color: var(--primary-color);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &::after {
    content: "→";
    margin-left: 6px;
    transition: transform 0.2s ease;
  }
  
  &:hover::after {
    transform: translateX(4px);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`;

const PageNumber = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.active ? "var(--primary-color)" : "var(--border-color)"};
  border-radius: 4px;
  background-color: ${props => props.active ? "var(--primary-color)" : "transparent"};
  color: ${props => props.active ? "white" : "var(--text-secondary)"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    color: ${props => props.active ? "white" : "var(--primary-color)"};
  }
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 40px 0;
  font-size: 18px;
  color: var(--text-secondary);
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px 0;
  font-size: 18px;
  color: #e53e3e;
  background-color: #fff5f5;
  border-radius: 8px;
  margin: 20px 0;
  padding: 20px;
`;

const ViewWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export default Blog;