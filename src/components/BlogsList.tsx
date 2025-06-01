import React, { useEffect, useState } from 'react';
import { Blog } from '../types/api';
import { formatDateShort } from '../utils/dateFormatter';

interface BlogsListProps {
  categoryId?: number | string;
  limit?: number;
}

const BlogsList: React.FC<BlogsListProps> = ({ categoryId, limit }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await BlogService.getAllBlogs();
        
        if (response.status === 200) {
          let filteredBlogs = response.data;
          
          // Filter by category if categoryId is provided
          if (categoryId && filteredBlogs.length > 0) {
            filteredBlogs = filteredBlogs.filter(blog => 
              blog.category && blog.category.id === Number(categoryId)
            );
          }
          
          // Limit the number of blogs if limit is provided
          if (limit && filteredBlogs.length > limit) {
            filteredBlogs = filteredBlogs.slice(0, limit);
          }
          
          setBlogs(filteredBlogs);
          setError(null);
        } else {
          setError(response.message || 'Failed to load blogs. Please try again later.');
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again later.');
        console.error('Blogs fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [categoryId, limit]);

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
        {blogs.map(blog => (
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
