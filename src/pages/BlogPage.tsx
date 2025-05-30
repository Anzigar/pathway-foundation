import React, { useState, useEffect } from "react";
import FilterChips from "../components/FilterChips";
import "./BlogPage.css";

// Define interfaces for our data
interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  slug: string;
}

interface GroupedBlogs {
  [key: string]: BlogPost[];
}

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [groupedBlogs, setGroupedBlogs] = useState<GroupedBlogs>({});
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch blog posts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        // Replace with your API call
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogPosts(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map((post: BlogPost) => post.category))] as string[];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        setLoading(false);
      }
    };
    
    fetchBlogPosts();
  }, []);

  // Group blogs by category whenever filters or blog posts change
  useEffect(() => {
    const filtered = selectedCategories.length > 0
      ? blogPosts.filter(post => selectedCategories.includes(post.category))
      : blogPosts;
      
    // Group the filtered blogs by category
    const grouped = filtered.reduce<GroupedBlogs>((acc, post) => {
      if (!acc[post.category]) {
        acc[post.category] = [];
      }
      acc[post.category].push(post);
      return acc;
    }, {});
    
    setGroupedBlogs(grouped);
  }, [blogPosts, selectedCategories]);

  // Handle category toggle
  const handleCategoryToggle = (category: string) => {
    if (category === "all") {
      setSelectedCategories([]);
      return;
    }
    
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  if (loading) {
    return <div className="loading">Loading blogs...</div>;
  }

  return (
    <div className="blog-page-container">
      <div className="blog-page-header">
        <h1>Our Blog</h1>
        <p>Latest insights, projects, and updates</p>
        
        <FilterChips 
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
        />
      </div>
      
      <div className="blog-content">
        {Object.keys(groupedBlogs).length > 0 ? (
          Object.entries(groupedBlogs).map(([category, posts]) => (
            <div key={category} className="blog-category-section">
              <h2 className="category-title">{category}</h2>
              <div className="blog-grid">
                {posts.map(post => (
                  <div key={post.id} className="blog-card">
                    <div className="blog-image">
                      <img src={post.imageUrl} alt={post.title} />
                    </div>
                    <div className="blog-details">
                      <span className="blog-date">{post.date}</span>
                      <h3>{post.title}</h3>
                      <p>{post.summary}</p>
                      <div className="blog-footer">
                        <span className="blog-author">By {post.author}</span>
                        <a href={`/blog/${post.slug}`} className="read-more">Read More</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-blogs">No blog posts found.</div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
