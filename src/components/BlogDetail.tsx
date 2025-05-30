import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Blog } from '../types/api';
import { BlogService } from '../services/api';
import { formatDate } from '../utils/dateFormatter';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';
import { Helmet } from 'react-helmet';

interface BlogParams {
  slug: string;
}

const BlogDetail: React.FC = () => {
  const { slug } = useParams<BlogParams>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogDetail = async () => {
    if (!slug) {
      setError('No blog slug provided');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await BlogService.getBlogBySlug(slug);
      
      if (response.status === 200) {
        setBlog(response.data);
        setError(null);
      } else {
        setError(response.message || 'Failed to load blog details. Please try again later.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('Blog detail fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogDetail();
  }, [slug]);

  useEffect(() => {
    if (blog) {
      // Update meta tags for SEO
      if (blog.seo_title) {
        document.title = blog.seo_title;
      }
      if (blog.meta_description) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', blog.meta_description);
        }
      }
    }
  }, [blog]);

  if (loading) {
    return <LoadingSpinner message="Loading blog post..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchBlogDetail} />;
  }

  if (!blog) {
    return <div className="not-found">Blog post not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{blog.seo_title || blog.title}</title>
        <meta name="description" content={blog.meta_description || blog.introduction} />
        <meta property="og:title" content={blog.seo_title || blog.title} />
        <meta property="og:description" content={blog.meta_description || blog.introduction} />
        {blog.og_image && Object.keys(blog.og_image).length > 0 ? (
          <meta property="og:image" content={
            typeof blog.og_image === 'string' 
              ? blog.og_image 
              : blog.og_image.public_url || ''
          } />
        ) : blog.featured_image && Object.keys(blog.featured_image).length > 0 && (
          <meta property="og:image" content={
            typeof blog.featured_image === 'string' 
              ? blog.featured_image 
              : blog.featured_image.public_url || ''
          } />
        )}
      </Helmet>
      
      <div className="blog-detail">
        <div className="blog-header">
          <h1>{blog.title}</h1>
          <div className="blog-meta">
            {blog.publish_date && (
              <span className="blog-date">
                Published on {formatDate(blog.publish_date)}
              </span>
            )}
            {blog.author_name && <span className="blog-author">By {blog.author_name}</span>}
            {blog.category && (
              <span className="blog-category">
                <a href={`/blog/category/${blog.category.slug}`}>{blog.category.name}</a>
              </span>
            )}
            {blog.reading_time_minutes > 0 && (
              <span className="reading-time">{blog.reading_time_minutes} min read</span>
            )}
          </div>
        </div>

        {blog.featured_image && Object.keys(blog.featured_image).length > 0 && (
          <div className="blog-featured-image">
            <img 
              src={typeof blog.featured_image === 'string' 
                ? blog.featured_image 
                : blog.featured_image.public_url || ''}
              alt={blog.title} 
            />
          </div>
        )}

        {blog.introduction && (
          <div className="blog-introduction">
            <p><strong>{blog.introduction}</strong></p>
          </div>
        )}

        <div className="blog-content">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        {blog.cta_text && blog.cta_link && (
          <div className="blog-cta">
            <a href={blog.cta_link} className="cta-button">{blog.cta_text}</a>
          </div>
        )}

        {blog.author_bio && (
          <div className="author-bio">
            <h3>About the Author</h3>
            <div dangerouslySetInnerHTML={{ __html: blog.author_bio }} />
          </div>
        )}

        {blog.tags && blog.tags.length > 0 && (
          <div className="blog-tags">
            <h3>Tags</h3>
            <div className="tags-container">
              {blog.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {blog.related_blogs && blog.related_blogs.length > 0 && (
          <div className="related-blogs">
            <h3>Related Articles</h3>
            <div className="related-items">
              {blog.related_blogs.map(item => (
                <a key={item.id} href={`/blog/${item.slug}`} className="related-item">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {blog.comments && blog.comments.length > 0 && (
          <div className="blog-comments">
            <h3>Comments ({blog.comments.length})</h3>
            <div className="comments-container">
              {/* Comments rendering would go here */}
              {blog.comments.map((comment, index) => (
                <div key={index} className="comment">
                  {/* Comment rendering would depend on the structure */}
                  <div dangerouslySetInnerHTML={{ __html: JSON.stringify(comment) }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
