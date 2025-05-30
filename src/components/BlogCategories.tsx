import React, { useEffect, useState } from 'react';
import { BlogCategory } from '../types/api';
import { BlogCategoryService } from '../services/api';

const BlogCategories: React.FC = () => {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await BlogCategoryService.getAllCategories();
        
        if (response.status === 200) {
          setCategories(response.data);
          setError(null);
        } else {
          setError(response.message || 'Failed to load blog categories. Please try again later.');
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again later.');
        console.error('Blog categories fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
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
