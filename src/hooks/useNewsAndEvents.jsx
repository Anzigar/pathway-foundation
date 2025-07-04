import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

/**
 * Custom hook for managing news data and operations
 * @param {Object} params - Parameters for the hook
 * @param {Object} params.filters - Filter options for news
 * @param {Function} params.onNotificationChange - Function to handle notifications
 * @returns {Object} News data and operations
 */
export const useNews = ({ 
  filters = {}, 
  onNotificationChange 
} = {}) => {
  // Fetch news data using React Query
  const { data: newsResponse, isLoading, error } = useQuery({
    queryKey: ['news', filters],
    queryFn: async () => {
      const response = await axios.get('https://backend.pathwaysfoundationforthepoor.org/api/news/');
      return response.data;
    },
    onError: (err) => {
      onNotificationChange?.({
        type: 'error',
        message: `Error loading content: ${err.message || "Unknown error"}`,
        isVisible: true
      });
    }
  });

  // Query for fetching single article by ID
  const useArticleById = (articleId, enabled = true) => {
    return useQuery({
      queryKey: ['news', articleId],
      queryFn: async () => {
        if (!articleId) return null;
        const response = await axios.get(`https://backend.pathwaysfoundationforthepoor.org/api/news/id/${articleId}`);
        return response.data;
      },
      enabled: !!articleId && enabled,
      onError: (err) => {
        onNotificationChange?.({
          type: 'error',
          message: `Error loading article: ${err.message || "Unknown error"}`,
          isVisible: true
        });
      }
    });
  };

  // Query for fetching single article by slug
  const useArticleBySlug = (slug, enabled = true) => {
    return useQuery({
      queryKey: ['news', 'slug', slug],
      queryFn: async () => {
        if (!slug) return null;
        const response = await axios.get(`https://backend.pathwaysfoundationforthepoor.org/api/news/${slug}`);
        return response.data;
      },
      enabled: !!slug && enabled,
      onError: (err) => {
        onNotificationChange?.({
          type: 'error',
          message: `Error loading article: ${err.message || "Unknown error"}`,
          isVisible: true
        });
      }
    });
  };

  // Extract news from response
  const news = newsResponse?.items || [];

  return {
    news,
    newsResponse,
    isLoading,
    error,
    useArticleById,
    useArticleBySlug,
    useNewsById: useArticleById, // Alias for backward compatibility
  };
};

/**
 * Custom hook for managing events data and operations
 * @param {Object} params - Parameters for the hook
 * @param {Object} params.filters - Filter options for events
 * @param {Function} params.onNotificationChange - Function to handle notifications
 * @returns {Object} Events data and operations
 */
export const useEvents = ({ 
  filters = {}, 
  onNotificationChange 
} = {}) => {
  const queryClient = useQueryClient();

  // Fetch events data using React Query
  const { data: eventsResponse, isLoading, error } = useQuery({
    queryKey: ['events', filters],
    queryFn: async () => {
      const response = await axios.get('https://backend.pathwaysfoundationforthepoor.org/api/events/');
      return response.data;
    },
    onError: (err) => {
      onNotificationChange?.({
        type: 'error',
        message: `Error loading events: ${err.message || "Unknown error"}`,
        isVisible: true
      });
    }
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`https://backend.pathwaysfoundationforthepoor.org/api/events/${id}`);
    },
    onSuccess: () => {
      console.log('Event deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['events'] });
      onNotificationChange?.({
        type: 'success',
        message: 'Event deleted successfully',
        isVisible: true
      });
    },
    onError: (error) => {
      console.error('Error deleting event:', error);
      onNotificationChange?.({
        type: 'error',
        message: `Failed to delete event: ${error.message}`,
        isVisible: true
      });
    },
  });

  // Create mutation for adding new events
  const createMutation = useMutation({
    mutationFn: async (newEvent) => {
      const response = await axios.post('https://backend.pathwaysfoundationforthepoor.org/api/events/', newEvent);
      return response.data;
    },
    onSuccess: (data) => {
      console.log('Event created successfully:', data);
      queryClient.invalidateQueries({ queryKey: ['events'] });
      onNotificationChange?.({
        type: 'success',
        message: 'Event created successfully',
        isVisible: true
      });
    },
    onError: (error) => {
      console.error('Error creating event:', error);
      onNotificationChange?.({
        type: 'error',
        message: `Failed to create event: ${error.message}`,
        isVisible: true
      });
    },
  });

  // Update mutation for editing events
  const updateMutation = useMutation({
    mutationFn: async ({ id, eventData }) => {
      const response = await axios.put(`https://backend.pathwaysfoundationforthepoor.org/api/events/${id}`, eventData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log('Event updated successfully:', data);
      queryClient.invalidateQueries({ queryKey: ['events'] });
      onNotificationChange?.({
        type: 'success',
        message: 'Event updated successfully',
        isVisible: true
      });
    },
    onError: (error) => {
      console.error('Error updating event:', error);
      onNotificationChange?.({
        type: 'error',
        message: `Failed to update event: ${error.message}`,
        isVisible: true
      });
    },
  });

  // Query for fetching single event by ID
  const useEventById = (eventId, enabled = true) => {
    return useQuery({
      queryKey: ['events', eventId],
      queryFn: async () => {
        if (!eventId) return null;
        const response = await axios.get(`https://backend.pathwaysfoundationforthepoor.org/api/events/id/${eventId}`);
        return response.data;
      },
      enabled: !!eventId && enabled,
      onError: (err) => {
        onNotificationChange?.({
          type: 'error',
          message: `Error loading event: ${err.message || "Unknown error"}`,
          isVisible: true
        });
      }
    });
  };

  // Query for fetching single event by slug
  const useEventBySlug = (slug, enabled = true) => {
    return useQuery({
      queryKey: ['events', 'slug', slug],
      queryFn: async () => {
        if (!slug) return null;
        const response = await axios.get(`https://backend.pathwaysfoundationforthepoor.org/api/events/${slug}`);
        return response.data;
      },
      enabled: !!slug && enabled,
      onError: (err) => {
        onNotificationChange?.({
          type: 'error',
          message: `Error loading event: ${err.message || "Unknown error"}`,
          isVisible: true
        });
      }
    });
  };

  // Extract events from response
  const events = eventsResponse?.items || [];

  return {
    events,
    eventsResponse,
    isLoading,
    error,
    deleteMutation,
    createMutation,
    updateMutation,
    useEventById,
    useEventBySlug,
    // Helper functions
    deleteEvent: (id) => deleteMutation.mutate(id),
    createEvent: (eventData) => createMutation.mutate(eventData),
    updateEvent: (id, eventData) => updateMutation.mutate({ id, eventData }),
    isDeleting: deleteMutation.isPending,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending
  };
};

/**
 * NotificationState object structure for TypeScript compatibility
 * @typedef {Object} NotificationState
 * @property {'success' | 'error' | 'info'} type - Type of notification
 * @property {string} message - Notification message
 * @property {boolean} isVisible - Whether notification is visible
 */
export const NotificationState = {
  // This is exported for compatibility with TypeScript components
  // The actual structure is documented in the JSDoc above
};