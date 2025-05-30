import { 
  Event, 
  News, 
  Blog, 
  BlogCategory, 
  StorageFile, 
  ApiResponse, 
  SubscriptionRequest, 
  SubscriptionResponse 
} from '../types/api';

const API_BASE_URL = 'backend.pathwaysfoundationforthepoor.org/api';

// Helper function to handle API responses and errors
async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    const errorText = await response.text();
    return {
      data: null as unknown as T,
      status: response.status,
      message: `Error: ${response.status} - ${errorText || response.statusText}`
    };
  }
  
  try {
    const data = await response.json();
    return {
      data,
      status: response.status,
      message: 'Success'
    };
  } catch (error) {
    return {
      data: null as unknown as T,
      status: response.status,
      message: `Error parsing response: ${error}`
    };
  }
}

// Event API services
export const EventService = {
  async getAllEvents(): Promise<ApiResponse<Event[]>> {
    try {
      const response = await fetch(`${API_BASE_URL}/events/`);
      return handleResponse<Event[]>(response);
    } catch (error) {
      return {
        data: [] as Event[],
        status: 500,
        message: `Network error: ${error}`
      };
    }
  },

  async getEvent(eventId: number | string): Promise<ApiResponse<Event>> {
    try {
      const response = await fetch(`${API_BASE_URL}/events/${eventId}`);
      return handleResponse<Event>(response);
    } catch (error) {
      return {
        data: {} as Event,
        status: 500,
        message: `Network error: ${error}`
      };
    }
  }
};

// News API services
export const NewsService = {
  async getAllNews(): Promise<ApiResponse<News[]>> {
    try {
      const response = await fetch(`${API_BASE_URL}/news/`);
      return handleResponse<News[]>(response);
    } catch (error) {
      return {
        data: [] as News[],
        status: 500,
        message: `Network error: ${error}`
      };
    }
  },

  async getNewsItem(slug: string): Promise<ApiResponse<News>> {
    try {
      const response = await fetch(`${API_BASE_URL}/news/${slug}`);
      return handleResponse<News>(response);
    } catch (error) {
      return {
        data: {} as News,
        status: 500,
        message: `Network error: ${error}`
      };
    }
  }
};

// Blog API services
export const BlogService = {
  async getAllBlogs(): Promise<ApiResponse<Blog[]>> {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/`);
      return handleResponse<Blog[]>(response);
    } catch (error) {
      return {
        data: [] as Blog[],
        status: 500,
        message: `Network error: ${error}`
      };
    }
  },

  async getBlogBySlug(slug: string): Promise<ApiResponse<Blog>> {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${slug}`);
      return handleResponse<Blog>(response);
    } catch (error) {
      return {
        data: {} as Blog,
        status: 500,
        message: `Network error: ${error}`
      };
    }
  }
};

// Blog Category API services
export const BlogCategoryService = {
  async getAllCategories(): Promise<ApiResponse<BlogCategory[]>> {
    try {
      const response = await fetch(`${API_BASE_URL}/blog-categories/`);
      return handleResponse<BlogCategory[]>(response);
    } catch (error) {
      return {
        data: [] as BlogCategory[],
        status: 500,
        message: `Network error: ${error}`
      };
    }
  },

  async getCategoryById(categoryId: number | string): Promise<ApiResponse<BlogCategory>> {
    try {
      const response = await fetch(`${API_BASE_URL}/blog-categories/${categoryId}`);
      return handleResponse<BlogCategory>(response);
    } catch (error) {
      return {
        data: {} as BlogCategory,
        status: 500,
        message: `Network error: ${error}`
      };
    }
  }
};

// Newsletter subscription service
export const SubscriptionService = {
  async subscribe(data: SubscriptionRequest): Promise<ApiResponse<SubscriptionResponse>> {
    try {
      const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return handleResponse<SubscriptionResponse>(response);
    } catch (error) {
      return {
        data: { success: false, message: `Network error: ${error}` } as SubscriptionResponse,
        status: 500,
        message: `Network error: ${error}`
      };
    }
  }
};

// File service
export const FileService = {
  async getFile(fileId: number | string): Promise<ApiResponse<StorageFile>> {
    try {
      const response = await fetch(`${API_BASE_URL}/storage/files/${fileId}`);
      return handleResponse<StorageFile>(response);
    } catch (error) {
      return {
        data: {} as StorageFile,
        status: 500,
        message: `Network error: ${error}`
      };
    }
  }
};
