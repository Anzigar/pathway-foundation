import { realApi } from "./realApi";
import axios from "axios";

/**
 * API service for interacting with the backend
 */
const API_URL = process.env.REACT_APP_API_URL || "https://api.pathwayfoundation.org";

// We could use this for development/testing purposes in the future
// const USE_MOCK_API = process.env.REACT_APP_USE_MOCK_API === "true" || process.env.NODE_ENV === "development";

// Export the real API
export const api = realApi;

/**
 * Create axios instance with base configuration
 */
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Blog and news related API calls
 */
export const blogService = {
  /**
   * Fetch all blog posts with pagination and optional filtering
   * 
   * @param {number} page - Page number
   * @param {number} limit - Number of items per page
   * @param {string} [category] - Optional category filter
   * @returns {Promise<Object>} Response containing blog posts and pagination info
   */
  async getBlogPosts(page = 1, limit = 6, category = null) {
    try {
      const params = { page, limit };
      if (category && category !== "All") {
        params.category = category;
      }
      
      const response = await apiClient.get("/api/blogs", { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      throw error;
    }
  },

  /**
   * Fetch a single blog post by slug
   * 
   * @param {string} slug - Blog post slug
   * @returns {Promise<Object>} Blog post data
   */
  async getBlogPostBySlug(slug) {
    try {
      const response = await apiClient.get(`/api/blogs/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error);
      throw error;
    }
  },

  /**
   * Track a blog post view
   * 
   * @param {string} blogId - ID of the blog post
   * @returns {Promise<Object>} Updated view count
   */
  async trackBlogView(blogId) {
    try {
      const response = await apiClient.post(`/api/blogs/${blogId}/views`);
      return response.data;
    } catch (error) {
      console.error(`Error tracking view for blog ${blogId}:`, error);
      // Fail silently to not disrupt user experience
      return null;
    }
  },

  /**
   * Fetch blog categories
   * 
   * @returns {Promise<Array>} List of categories
   */
  async getBlogCategories() {
    try {
      const response = await apiClient.get("/api/blogs/categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching blog categories:", error);
      throw error;
    }
  }
};

/**
 * News and events related API calls
 */
export const newsService = {
  /**
   * Fetch all news items with pagination
   * 
   * @param {number} page - Page number
   * @param {number} limit - Number of items per page
   * @param {string} [type] - Optional type filter (news, announcement, event)
   * @returns {Promise<Object>} Response containing news items and pagination info
   */
  async getNewsItems(page = 1, limit = 6, type = null) {
    try {
      const params = { page, limit };
      if (type && type !== "All") {
        params.type = type;
      }
      
      const response = await apiClient.get("/api/news", { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching news items:", error);
      throw error;
    }
  },

  /**
   * Fetch upcoming events
   * 
   * @param {number} limit - Number of events to fetch
   * @returns {Promise<Array>} List of upcoming events
   */
  async getUpcomingEvents(limit = 3) {
    try {
      const response = await apiClient.get("/api/events/upcoming", { 
        params: { limit } 
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching upcoming events:", error);
      throw error;
    }
  }
};

const apiServices = {
  blogService,
  newsService
};

export default apiServices;