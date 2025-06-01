import React, { useEffect, useState } from 'react';
import { BlogCategory } from '../types/api';
import { blogCategories } from '../data/blogPosts'; // Import local data instead of using service

const BlogCategories: React.FC = () => {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Use local data instead of API call
    try {
      setCategories(blogCategories);
      setLoading(false);
    } catch (err) {
      setError('An unexpected error occurred loading categories.');
      setLoading(false);
      console.error('Blog categories error:', err);
    }
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading categories...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (categories.length === 0) {
    return null; // Don't render anything if no categories
  }

  return (
    <div className="blog-categories">
      <h3>Categories</h3>
      <ul className="categories-list">
        {categories.map(category => (
          <li key={category.id}>
            <a href={`/blog/category/${category.slug}`}>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
