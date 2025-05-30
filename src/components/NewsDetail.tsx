import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { News } from '../types/api';
import { NewsService } from '../services/api';
import { formatDate } from '../utils/dateFormatter';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';
import { Helmet } from 'react-helmet';

interface NewsParams {
  slug: string;
}

const NewsDetail: React.FC = () => {
  const { slug } = useParams<NewsParams>();
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNewsDetail = async () => {
    if (!slug) {
      setError('No article slug provided');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await NewsService.getNewsItem(slug);
      
      if (response.status === 200) {
        setNews(response.data);
        setError(null);
      } else {
        setError(response.message || 'Failed to load news details. Please try again later.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('News detail fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsDetail();
  }, [slug]);

  if (loading) {
    return <LoadingSpinner message="Loading article..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchNewsDetail} />;
  }

  if (!news) {
    return <div className="not-found">Article not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{news.title} | Pathways Foundation for the Poor</title>
        <meta name="description" content={news.summary} />
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.summary} />
        {typeof news.featured_image === 'string' && (
          <meta property="og:image" content={news.featured_image} />
        )}
      </Helmet>
      
      <div className="news-detail">
        <div className="news-header">
          <h1>{news.title}</h1>
          <div className="news-meta">
            {news.publish_date && (
              <span className="news-date">
                Published on {formatDate(news.publish_date)}
              </span>
            )}
            {news.author && <span className="news-author">By {news.author}</span>}
            {news.category && (
              <span className="news-category">{news.category.name}</span>
            )}
          </div>
        </div>

        {news.featured_image && Object.keys(news.featured_image).length > 0 && (
          <div className="news-featured-image">
            <img 
              src={typeof news.featured_image === 'string' 
                ? news.featured_image 
                : news.featured_image.public_url || ''}
              alt={news.title} 
            />
          </div>
        )}

        <div className="news-summary">
          <p><strong>{news.summary}</strong></p>
        </div>

        <div className="news-content">
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>

        {news.source && (
          <div className="news-source">
            <p><strong>Source:</strong> {news.source}</p>
          </div>
        )}

        {news.tags && news.tags.length > 0 && (
          <div className="news-tags">
            <h3>Tags</h3>
            <div className="tags-container">
              {news.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {news.related_news && news.related_news.length > 0 && (
          <div className="related-news">
            <h3>Related News</h3>
            <div className="related-items">
              {news.related_news.map(item => (
                <a key={item.id} href={`/news/${item.slug}`} className="related-item">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {news.related_events && news.related_events.length > 0 && (
          <div className="related-events">
            <h3>Related Events</h3>
            <div className="related-items">
              {news.related_events.map(event => (
                <a key={event.id} href={`/events/${event.slug}`} className="related-item">
                  {event.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsDetail;
