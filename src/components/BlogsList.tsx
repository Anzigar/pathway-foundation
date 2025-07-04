import React, { useState } from 'react';
import { Blog } from '../types/api';
import { formatDateShort } from '../utils/dateFormatter';
import { useNews, NotificationState } from '../hooks/useNewsAndEvents.jsx';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';

interface BlogsListProps {
  categoryId?: number | string;
  limit?: number;
}

const BlogsList: React.FC<BlogsListProps> = ({ categoryId, limit }) => {
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const { 
    news: blogs, 
    isLoading: loading, 
    error 
  } = useNews({
    filters: { categoryId, limit },
    onNotificationChange: setNotification
  });

  if (loading) {
    return <LoadingSpinner message="Loading blogs..." />;
  }

  if (error) {
    return <ErrorMessage message={error.message || 'Failed to load blogs'} onRetry={() => window.location.reload()} />;
  }

  if (loading) {
    return <div className="loading-spinner">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (blogs.length === 0) {
    return <div className="no-blogs">No blog posts found.</div>;
  }

  return (
    <div className="blogs-list">
      <h2>Blog Posts</h2>
      <div className="blogs-grid">
        {blogs.map((blog: Blog) => (
          <div key={blog.id} className="blog-card">
            {blog.featured_image && Object.keys(blog.featured_image).length > 0 && (
              <div className="blog-image">
                <a href={`/blog/${blog.slug}`}>
                  <img 
                    src={`${typeof blog.featured_image === 'string' 
                      ? blog.featured_image 
                      : blog.featured_image.public_url || JSON.stringify(blog.featured_image)}`} 
                    alt={blog.title} 
                  />
                </a>
              </div>
            )}
            <div className="blog-content">
              <h3>
                <a href={`/blog/${blog.slug}`}>{blog.title}</a>
              </h3>
              {blog.introduction && (
                <p className="blog-introduction">{blog.introduction.substring(0, 150)}...</p>
              )}
              <div className="blog-meta">
                {blog.publish_date && (
                  <span className="blog-date">{formatDateShort(blog.publish_date)}</span>
                )}
                {blog.author_name && <span className="blog-author">By {blog.author_name}</span>}
                {blog.reading_time_minutes > 0 && (
                  <span className="reading-time">{blog.reading_time_minutes} min read</span>
                )}
              </div>
              <a href={`/blog/${blog.slug}`} className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
