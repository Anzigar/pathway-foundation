import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { FaCalendarAlt, FaUserAlt, FaTag, FaShare } from "react-icons/fa";
import PageBanner from "../components/ui/PageBanner";
import CallToAction from "../components/sections/CallToAction";
import ViewCounter from "../components/ui/ViewCounter";
import { blogService } from "../services/api";

/**
 * BlogDetail component for displaying a single blog post
 * 
 * @returns {JSX.Element} BlogDetail component
 */
const BlogDetail = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Fetch blog post data
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const result = await blogService.getBlogPostBySlug(slug);
        setBlogPost(result);
        
        // Also fetch related posts
        if (result.category) {
          const relatedResult = await blogService.getBlogPosts(1, 3, result.category);
          // Filter out the current post from related posts
          setRelatedPosts(
            relatedResult.data.filter(post => post.id !== result.id)
          );
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setError("Failed to load this blog post. Please try again later.");
        setLoading(false);
      }
    };
    
    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <>
        <PageBanner
          title="Blog"
          subtitle="Loading article..."
        />
        <BlogDetailSection>
          <SectionContent>
            <LoadingIndicator>Loading article content...</LoadingIndicator>
          </SectionContent>
        </BlogDetailSection>
      </>
    );
  }

  if (error || !blogPost) {
    return (
      <>
        <PageBanner
          title="Blog"
          subtitle="Article not found"
        />
        <BlogDetailSection>
          <SectionContent>
            <ErrorMessage>{error || "This blog post could not be found."}</ErrorMessage>
            <BackButton to="/news-events/blog">Back to Blog</BackButton>
          </SectionContent>
        </BlogDetailSection>
      </>
    );
  }

  return (
    <>
      <PageBanner
        title="Blog"
        subtitle={blogPost.title}
        backgroundImage={blogPost.image}
      />
      
      <BlogDetailSection>
        <SectionContent>
          <ArticleContainer>
            <ArticleHeader>
              <ArticleMeta>
                <MetaItem>
                  <FaCalendarAlt />
                  <span>{blogPost.date}</span>
                </MetaItem>
                <MetaItem>
                  <FaUserAlt />
                  <span>{blogPost.author}</span>
                </MetaItem>
                <MetaItem>
                  <FaTag />
                  <span>{blogPost.category}</span>
                </MetaItem>
                <MetaItem>
                  <ViewCounter blogId={blogPost.id} initialCount={blogPost.viewCount || 0} />
                </MetaItem>
              </ArticleMeta>
              
              <ShareContainer>
                <ShareText>Share this article:</ShareText>
                <SocialIcons>
                  <SocialIconLink href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" title="Share on Facebook">
                    <FaShare />
                  </SocialIconLink>
                </SocialIcons>
              </ShareContainer>
            </ArticleHeader>
            
            <ArticleContent dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            
            {blogPost.tags && blogPost.tags.length > 0 && (
              <TagsContainer>
                <TagsTitle>Tags:</TagsTitle>
                {blogPost.tags.map((tag, index) => (
                  <Tag key={index} to={`/news-events/blog/tag/${tag}`}>{tag}</Tag>
                ))}
              </TagsContainer>
            )}
          </ArticleContainer>
          
          {relatedPosts.length > 0 && (
            <RelatedSection>
              <RelatedTitle>Related Articles</RelatedTitle>
              <RelatedGrid>
                {relatedPosts.map(post => (
                  <RelatedCard key={post.id}>
                    <RelatedImageContainer>
                      <RelatedImage src={post.image} alt={post.title} />
                    </RelatedImageContainer>
                    <RelatedContent>
                      <RelatedDate>{post.date}</RelatedDate>
                      <RelatedCardTitle>{post.title}</RelatedCardTitle>
                      <RelatedLink to={`/news-events/blog/${post.slug}`}>Read More</RelatedLink>
                    </RelatedContent>
                  </RelatedCard>
                ))}
              </RelatedGrid>
            </RelatedSection>
          )}
          
          <BackButton to="/news-events/blog">Back to Blog</BackButton>
        </SectionContent>
      </BlogDetailSection>
      
      <CallToAction />
    </>
  );
};

// Styled components
const BlogDetailSection = styled.section`
  padding: 60px 0;
  background-color: var(--background-white);
`;

const SectionContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ArticleContainer = styled.article`
  background-color: var(--background-white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ArticleHeader = styled.div`
  margin-bottom: 30px;
`;

const ArticleMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 14px;
  
  svg {
    font-size: 16px;
  }
`;

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
`;

const ShareText = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--background-light);
  border-radius: 50%;
  color: var(--text-secondary);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`;

const ArticleContent = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: 30px;
  
  h1, h2, h3, h4, h5, h6 {
    margin: 30px 0 20px;
    color: var(--text-primary);
  }
  
  p {
    margin-bottom: 20px;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 30px 0;
  }
  
  blockquote {
    border-left: 4px solid var(--primary-color);
    padding-left: 20px;
    margin: 30px 0;
    font-style: italic;
    color: var(--text-secondary);
  }
  
  ul, ol {
    margin: 20px 0;
    padding-left: 40px;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 30px;
  align-items: center;
`;

const TagsTitle = styled.span`
  font-weight: 500;
  color: var(--text-secondary);
  margin-right: 8px;
`;

const Tag = styled(Link)`
  padding: 4px 12px;
  background-color: var(--background-light);
  border-radius: 20px;
  font-size: 12px;
  color: var(--text-secondary);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`;

const RelatedSection = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
`;

const RelatedTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 24px;
  color: var(--text-primary);
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled.div`
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

const RelatedImageContainer = styled.div`
  height: 160px;
`;

const RelatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RelatedContent = styled.div`
  padding: 16px;
`;

const RelatedDate = styled.div`
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 8px;
`;

const RelatedCardTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--text-primary);
  
  /* Limit to 2 lines with ellipsis */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const RelatedLink = styled(Link)`
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background-color: var(--background-light);
  color: var(--text-secondary);
  border-radius: 4px;
  transition: all 0.2s ease;
  margin-bottom: 40px;
  
  &::before {
    content: "←";
    margin-right: 8px;
  }
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 60px 0;
  font-size: 18px;
  color: var(--text-secondary);
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #e53e3e;
  background-color: #fff5f5;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export default BlogDetail;