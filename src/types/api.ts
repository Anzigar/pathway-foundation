export interface Category {
  name: string;
  description: string;
  id: number;
  slug?: string;
}

export interface FeaturedImage {
  // Image properties would go here
  public_url?: string;
  [key: string]: any;
}

export interface Tag {
  // Tag properties would go here
  [key: string]: any;
}

export interface Event {
  title: string;
  summary: string;
  description: string;
  organizer: string;
  venue: string;
  location_address: string;
  location_coordinates: string;
  registration_link: string;
  has_registration_form: boolean;
  ticket_price: number;
  is_free: boolean;
  contact_info: string;
  id: number;
  slug: string;
  start_date: string;
  end_date: string;
  is_published: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
  category: Category;
  featured_image: FeaturedImage;
  tags: Tag[];
}

export interface Comment {
  // Comment properties would go here
  [key: string]: any;
}

export interface News {
  title: string;
  summary: string;
  content: string;
  author: string;
  source: string;
  contact_info: string;
  id: number;
  slug: string;
  publish_date: string;
  is_published: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
  category: Category;
  featured_image: FeaturedImage;
  tags: Tag[];
  comments: Comment[];
  related_news: News[];
  related_events: Event[];
}

export interface BlogCategory {
  name: string;
  description: string;
  slug: string;
  id: number;
}

export interface BlogComment {
  // Comment properties would go here
  [key: string]: any;
}

export interface Blog {
  title: string;
  introduction: string;
  content: string;
  author_name: string;
  cta_text: string;
  cta_link: string;
  author_bio: string;
  seo_title: string;
  meta_description: string;
  id: number;
  slug: string;
  publish_date: string;
  reading_time_minutes: number;
  is_published: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
  category: BlogCategory;
  featured_image: FeaturedImage;
  og_image: FeaturedImage;
  tags: Tag[];
  comments: BlogComment[];
  related_blogs: Blog[];
}

// Renamed to StorageFile to avoid conflict with DOM's File interface
export interface StorageFile {
  id: number;
  filename: string;
  original_filename: string;
  file_path: string;
  file_type: string;
  content_type: string;
  size_bytes: number;
  bucket_name: string;
  public_url: string;
  created_at: string;
}

export interface SubscriptionRequest {
  email: string;
  name: string;
  source?: string;
}

export interface SubscriptionResponse {
  success: boolean;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
