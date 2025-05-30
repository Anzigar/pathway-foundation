import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import BlogsList from '../components/BlogsList';
import BlogCategories from '../components/BlogCategories';
import { BlogCategoryService } from '../services/api';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';
import { BlogCategory } from '../types/api';

const BlogsPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const [category, setCategory] = useState<BlogCategory | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      if (!categorySlug) return;
      
      try {
        setLoading(true);
        const response = await BlogCategoryService.getAllCategories();
        
        if (response.status === 200) {
          const foundCategory = response.data.find(cat => cat.slug === categorySlug);
          if (foundCategory) {
            setCategory(foundCategory);
          }
          setError(null);
        } else {
          setError(response.message || 'Failed to load category. Please try again later.');
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again later.');
        console.error('Category fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categorySlug]);

  const pageTitle = category ? `${category.name} Blogs` : 'Blog';
  const pageSubtitle = category ? 
    category.description : 
    'Insights, stories, and updates from Pathways Foundation for the Poor';

  if (loading) {
    return <LoadingSpinner message="Loading blog category..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="blogs-page">
      <PageHeader 
        title={pageTitle} 
        subtitle={pageSubtitle}
      />
      <div className="container">
        <div className="blog-layout">
          <div className="blog-main">
            <BlogsList categoryId={category?.id} />
          </div>
          <div className="blog-sidebar">
            <BlogCategories />
            {/* Add other sidebar components like recent posts, newsletter signup, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
