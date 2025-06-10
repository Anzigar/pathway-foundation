import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaCalendarAlt, FaUserAlt, FaTag, FaShare } from 'react-icons/fa';
import PageBanner from '../components/ui/PageBanner';
import CallToAction from '../components/sections/CallToAction';
import ViewCounter from '../components/ui/ViewCounter';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/seo';

/**
 * BlogDetail component for displaying a single blog post
 * 
 * @returns {JSX.Element} BlogDetail component
 */
const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog post data
  useEffect(() => {
    // Replace API call with direct data filtering
    try {
      const foundPost = blogPosts.find(p => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        setError('Blog post not found');
      }
      setLoading(false);
    } catch (err) {
      console.error('Error loading blog post:', err);
      setError('Failed to load blog post');
      setLoading(false);
    }
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

  if (error || !post) {
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
        subtitle={post.title}
        backgroundImage={post.image}
      />
      
      <BlogDetailSection>
        <SectionContent>
          <ArticleContainer>
            <ArticleHeader>
              <ArticleMeta>
                <MetaItem>
                  <FaCalendarAlt />
                  <span>{post.date}</span>
                </MetaItem>
                <MetaItem>
                  <FaUserAlt />
                  <span>{post.author}</span>
                </MetaItem>
                <MetaItem>
                  <FaTag />
                  <span>{post.category}</span>
                </MetaItem>
                <MetaItem>
                  <ViewCounter blogId={post.id} initialCount={post.viewCount || 0} />
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
            
            <ArticleContent dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {post.tags && post.tags.length > 0 && (
              <TagsContainer>
                <TagsTitle>Tags:</TagsTitle>
                {post.tags.map((tag, index) => (
                  <Tag key={index} to={`/news-events/blog/tag/${tag}`}>{tag}</Tag>
                ))}
              </TagsContainer>
            )}
          </ArticleContainer>
          
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