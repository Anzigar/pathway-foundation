import React, { useEffect, useState } from 'react';
import { News } from '../types/api';
import { NewsService } from '../services/api';

const NewsList: React.FC = () => {
  const [newsItems, setNewsItems] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await NewsService.getAllNews();
      
      if (response.status === 200) {
        setNewsItems(Array.isArray(response.data) ? response.data : []);
        setError(null);
      } else {
        setError(response.message || 'Failed to load news. Please try again later.');
      }
      
      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading news...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (newsItems.length === 0) {
    return <div className="no-news">No news articles found.</div>;
  }

  return (
    <div className="news-list">
      <h2>Latest News</h2>
      {newsItems.map(news => (
        <div key={news.id} className="news-card">
          {news.featured_image && Object.keys(news.featured_image).length > 0 && (
            <div className="news-image">
              <img src={`${news.featured_image}`} alt={news.title} />
            </div>
          )}
          <div className="news-content">
            <h3>{news.title}</h3>
            <p className="news-summary">{news.summary}</p>
            <div className="news-meta">
              <span className="news-date">{new Date(news.publish_date).toLocaleDateString()}</span>
              {news.author && <span className="news-author">By {news.author}</span>}
              {news.category && <span className="news-category">{news.category.name}</span>}
            </div>
            <a href={`/news/${news.slug}`} className="news-link">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
