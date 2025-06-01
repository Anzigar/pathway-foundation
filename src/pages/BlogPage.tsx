import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import { blogPosts, blogCategories } from "../data/blogPosts";
import "./BlogPage.css";

interface BlogStats {
  totalPosts: number;
  categoryCounts: { [key: string]: number };
  latestDate: string;
}

const BlogPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>(categorySlug || "all");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [stats, setStats] = useState<BlogStats>({
    totalPosts: 0,
    categoryCounts: {},
    latestDate: ""
  });

  // Filter posts when category selection changes
  useEffect(() => {
    const filtered = categorySlug && categorySlug !== "all"
      ? blogPosts.filter(post => post.category.slug === categorySlug)
      : blogPosts;
    
    setFilteredPosts(filtered);

    // Calculate blog statistics
    const categoryCountMap: { [key: string]: number } = {};
    blogPosts.forEach(post => {
      const catSlug = post.category.slug;
      categoryCountMap[catSlug] = (categoryCountMap[catSlug] || 0) + 1;
    });

    // Find latest post date
    const dates = blogPosts.map(post => new Date(post.publish_date).getTime());
    const latestDate = dates.length > 0 ? new Date(Math.max(...dates)).toISOString() : "";

    setStats({
      totalPosts: blogPosts.length,
      categoryCounts: categoryCountMap,
      latestDate
    });
  }, [categorySlug]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
  };

  // Find current category for header
  const currentCategory = categorySlug 
    ? blogCategories.find(cat => cat.slug === categorySlug) 
    : null;

  return (
    <div className="blog-page">
      <PageHeader 
        title="Latest Stories" 
        subtitle="Insights, updates and stories from our work in communities"
      />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            {filteredPosts.length > 0 ? (
              <div className="blog-grid">
                {filteredPosts.map(post => (
                  <div key={post.id} className="blog-card">
                    <div className="blog-image">
                      <Link to={`/blog/${post.slug}`}>
                        <img 
                          src={typeof post.featured_image === 'string' 
                            ? post.featured_image 
                            : '/images/placeholder.jpg'} 
                          alt={post.title} 
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="blog-category">
                          <Link to={`/blog/category/${post.category.slug}`}>{post.category.name}</Link>
                        </span>
                      </div>
                      <h3 className="blog-title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="blog-excerpt">{post.introduction}</p>
                      <Link to={`/blog/${post.slug}`} className="read-more">Read More</Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-posts">
                <h3>No Stories Found</h3>
                <p>We couldn't find any posts matching your criteria. Try selecting a different category or check back later.</p>
              </div>
            )}
          </div>
          
          <div className="col-lg-4">
            <div className="blog-sidebar">
              <div className="sidebar-widget categories-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="categories-list">
                  <li className={selectedCategory === "all" ? "active" : ""}>
                    <Link to="/blog" onClick={() => handleCategoryChange("all")}>
                      All Categories
                      <span className="count">{stats.totalPosts}</span>
                    </Link>
                  </li>
                  {blogCategories.map(category => (
                    <li key={category.id} className={selectedCategory === category.slug ? "active" : ""}>
                      <Link to={`/blog/category/${category.slug}`} onClick={() => handleCategoryChange(category.slug)}>
                        {category.name}
                        <span className="count">{stats.categoryCounts[category.slug] || 0}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget stats-widget">
                <h3 className="widget-title">Blog Stats</h3>
                <div className="stats-box">
                  <div className="stat-item">
                    <span className="stat-label">Total Posts</span>
                    <span className="stat-value">{stats.totalPosts}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Categories</span>
                    <span className="stat-value">{blogCategories.length}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Last Updated</span>
                    <span className="stat-value">
                      {stats.latestDate ? new Date(stats.latestDate).toLocaleDateString() : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
