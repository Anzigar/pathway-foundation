import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate } from '../utils/dateFormatter';
import LoadingSpinner from './shared/LoadingSpinner';
import { NewsDetailShimmer } from './shared/ShimmerLoader';
import ErrorMessage from './shared/ErrorMessage';
import { Helmet } from 'react-helmet';
import { useNews } from '../hooks/useNewsAndEvents.jsx';

// Define types for the news item since JSX hooks don't export types
interface NewsItem {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publish_date?: string;
  author?: string;
  author_name?: string;
  image?: string;
  image_url?: string;
  featured_image?: string | { public_url?: string };
  excerpt?: string;
  introduction?: string;
  summary?: string;
  category?: {
    id: number;
    name: string;
    slug: string;
  };
  tags?: string[];
  source?: string;
  related_news?: { id: string; title: string; slug: string }[];
  related_events?: { id: string; title: string; slug: string }[];
}

interface NotificationState {
  type: 'success' | 'error' | 'info';
  message: string;
  isVisible: boolean;
}

const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Get the hook functions from useNews
  const newsHookData = useNews();
  
  // Get the useArticleBySlug function from the hook
  const useArticleBySlug = (newsHookData as any).useArticleBySlug;
  
  // Fetch the article by slug using the hook
  const { 
    data: newsItem, 
    isLoading: loading, 
    error 
  } = useArticleBySlug(slug ?? '', !!slug);
  
  if (loading) {
    return <NewsDetailShimmer />;
  }

  if (error) {
    return <ErrorMessage message="Failed to load article. Please try again later." onRetry={() => window.location.reload()} />;
  }

  if (!newsItem) {
    return <div className="not-found">Article not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{newsItem.title} | Pathways Foundation for the Poor</title>
        <meta name="description" content={newsItem.summary ?? newsItem.excerpt ?? newsItem.introduction ?? ''} />
        <meta property="og:title" content={newsItem.title} />
        <meta property="og:description" content={newsItem.summary ?? newsItem.excerpt ?? newsItem.introduction ?? ''} />
        {(typeof newsItem.featured_image === 'string' || newsItem.image_url || newsItem.image) && (
          <meta property="og:image" content={
            typeof newsItem.featured_image === 'string' 
              ? newsItem.featured_image 
              : newsItem.image_url ?? newsItem.image ?? ''
          } />
        )}
      </Helmet>
      
      <NewsDetailContainer>
        <div className="news-header">
          <h1>{newsItem.title}</h1>
          <div className="news-meta">
            {newsItem.publish_date && (
              <span className="news-date">
                Published on {formatDate(newsItem.publish_date)}
              </span>
            )}
            {(newsItem.author ?? newsItem.author_name) && (
              <span className="news-author">By {newsItem.author ?? newsItem.author_name}</span>
            )}
            {newsItem.category && (
              <span className="news-category">{newsItem.category.name}</span>
            )}
          </div>
        </div>

        {(newsItem.featured_image ?? newsItem.image_url ?? newsItem.image) && (
          <div className="news-featured-image">
            <img 
              src={
                typeof newsItem.featured_image === 'string' 
                  ? newsItem.featured_image 
                  : (newsItem.featured_image as { public_url?: string })?.public_url ?? newsItem.image_url ?? newsItem.image ?? ''
              }
              alt={newsItem.title} 
            />
          </div>
        )}

        {(newsItem.summary ?? newsItem.excerpt ?? newsItem.introduction) && (
          <div className="news-summary">
            <p><strong>{newsItem.summary ?? newsItem.excerpt ?? newsItem.introduction}</strong></p>
          </div>
        )}

        <div className="news-content">
          <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
        </div>

        {newsItem.source && (
          <div className="news-source">
            <p><strong>Source:</strong> {newsItem.source}</p>
          </div>
        )}

        {newsItem.tags && newsItem.tags.length > 0 && (
          <div className="news-tags">
            <h3>Tags</h3>
            <div className="tags-container">
              {newsItem.tags.map((tag: any, index: number) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {newsItem.related_news && newsItem.related_news.length > 0 && (
          <div className="related-news">
            <h3>Related News</h3>
            <div className="related-items">
              {newsItem.related_news.map((item: any) => (
                <a key={item.id} href={`/news/${item.slug}`} className="related-item">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {newsItem.related_events && newsItem.related_events.length > 0 && (
          <div className="related-events">
            <h3>Related Events</h3>
            <div className="related-items">
              {newsItem.related_events.map((event: any) => (
                <a key={event.id} href={`/events/${event.slug}`} className="related-item">
                  {event.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </NewsDetailContainer>
    </>
  );
};

const NewsDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  
  .news-detail {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .news-header {
    text-align: center;
    margin-bottom: 40px;
    padding: 20px;
    border-bottom: 1px solid #eee;

    h1 {
      margin: 0 0 10px;
      font-size: 32px;
      color: var(--text-primary);
      margin-bottom: 20px;
      line-height: 1.2;
    }

    .news-meta {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      font-size: 14px;
      color: var(--text-secondary);

      .news-date {
        color: var(--primary-color);
        font-weight: 500;
      }

      .news-author {
        font-style: italic;
      }

      .news-category {
        background-color: var(--primary-color);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
  
  .news-featured-image {
    margin-bottom: 40px;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
  
  .news-summary {
    margin-bottom: 30px;
    
    p {
      font-size: 18px;
      line-height: 1.6;
      color: var(--text-secondary);
      font-style: italic;
      padding: 20px;
      background-color: var(--background-light);
      border-radius: 8px;
      border-left: 4px solid var(--primary-color);
    }
  }
  
  .news-content {
    line-height: 1.8;
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 40px;
    
    p {
      margin-bottom: 20px;
    }
    
    h2, h3, h4 {
      color: var(--text-primary);
      margin: 30px 0 20px 0;
    }
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    blockquote {
      border-left: 4px solid var(--primary-color);
      padding-left: 20px;
      margin: 20px 0;
      font-style: italic;
      color: var(--text-secondary);
    }
  }
  
  .news-source {
    margin-bottom: 30px;
    padding: 15px;
    background-color: var(--background-light);
    border-radius: 8px;
    
    p {
      margin: 0;
      color: var(--text-secondary);
      font-size: 14px;
    }
  }
  
  .news-tags {
    margin-bottom: 40px;
    
    h3 {
      color: var(--text-primary);
      margin-bottom: 15px;
      font-size: 18px;
    }
    
    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      
      .tag {
        background-color: var(--primary-color);
        color: white;
        padding: 6px 12px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
  
  .related-news,
  .related-events {
    margin-bottom: 30px;
    
    h3 {
      color: var(--text-primary);
      margin-bottom: 15px;
      font-size: 18px;
    }
    
    .related-items {
      display: flex;
      flex-direction: column;
      gap: 10px;
      
      .related-item {
        color: var(--primary-color);
        text-decoration: none;
        padding: 10px 15px;
        border-radius: 8px;
        background-color: var(--background-light);
        transition: background-color 0.2s ease;
        
        &:hover {
          background-color: #e5e7eb;
        }
      }
    }
  }
  
  .not-found {
    text-align: center;
    padding: 60px 20px;
    color: var(--text-secondary);
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    padding: 20px 15px;
    
    .news-header {
      h1 {
        font-size: 24px;
      }
      
      .news-meta {
        flex-direction: column;
        gap: 8px;
      }
    }
  }
`;

export default NewsDetail;
