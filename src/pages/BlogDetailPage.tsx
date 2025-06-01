import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blogPosts';
import PageHeader from '../components/shared/PageHeader';
import './BlogDetailPage.css';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState(blogPosts.find(p => p.slug === slug));
  const [relatedPosts, setRelatedPosts] = useState(blogPosts.filter(p => 
    p.slug !== slug && p.category.id === post?.category.id
  ).slice(0, 3));

  useEffect(() => {
    // Update post when slug changes
    const currentPost = blogPosts.find(p => p.slug === slug);
    setPost(currentPost);
    
    // Update related posts
    if (currentPost) {
      const related = blogPosts.filter(p => 
        p.slug !== slug && p.category.id === currentPost.category.id
      ).slice(0, 3);
      setRelatedPosts(related);
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <div className="not-found">
            <h2>Blog Post Not Found</h2>
            <p>The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className="btn btn-primary">Return to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <PageHeader 
        title={post.title} 
        subtitle={post.introduction}
      />
      
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <article className="blog-article">
              {typeof post.featured_image === 'string' && (
                <div className="featured-image">
                  <img src={post.featured_image} alt={post.title} />
                </div>
              )}
              
              <div className="blog-meta">
                <Link to={`/blog/category/${post.category.slug}`} className="category-link">
                  {post.category.name}
                </Link>
                
                {post.reading_time_minutes && (
                  <div className="meta-item">
                    <span className="meta-value">{post.reading_time_minutes} min read</span>
                  </div>
                )}
              </div>
              
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {post.tags && post.tags.length > 0 && (
                <div className="blog-tags">
                  <div className="tags-list">
                    {post.tags.map((tag, index) => (
                      <Link key={index} to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="tag">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="blog-author">
                <div className="author-info">
                  <div className="author-avatar">
                    <img src="/images/default-avatar.png" alt={post.author_name} />
                  </div>
                  <div className="author-bio">
                    <h4>{post.author_name}</h4>
                    <p>Author at Pathways Foundation for the Poor</p>
                  </div>
                </div>
              </div>
            </article>
            
            <div className="blog-navigation">
              <Link to="/blog" className="btn btn-outline-primary">
                ← Back to Blog
              </Link>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="blog-sidebar">
              <div className="sidebar-widget categories-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="categories-list">
                  {blogCategories.map(category => (
                    <li key={category.id} className={post.category.id === category.id ? "active" : ""}>
                      <Link to={`/blog/category/${category.slug}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {relatedPosts.length > 0 && (
                <div className="sidebar-widget related-widget">
                  <h3 className="widget-title">Related Posts</h3>
                  <div className="related-posts">
                    {relatedPosts.map(related => (
                      <div key={related.id} className="related-post">
                        <Link to={`/blog/${related.slug}`} className="related-post-link">
                          <div className="related-post-image">
                            <img 
                              src={typeof related.featured_image === 'string' 
                                ? related.featured_image 
                                : '/images/placeholder.jpg'} 
                              alt={related.title} 
                            />
                          </div>
                          <div className="related-post-content">
                            <h4>{related.title}</h4>
                            <span className="related-post-date">
                              {new Date(related.publish_date).toLocaleDateString()}
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="sidebar-widget cta-widget">
                <h3 className="widget-title">Get Involved</h3>
                <p>Support our projects and help us make a difference in communities.</p>
                <div className="cta-buttons">
                  <Link to="/donate" className="btn btn-primary btn-block">Donate Now</Link>
                  <Link to="/contact" className="btn btn-outline-primary btn-block mt-3">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
