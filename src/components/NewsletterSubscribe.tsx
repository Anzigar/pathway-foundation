import React, { useState } from 'react';
import { SubscriptionService } from '../services/api';
import { SubscriptionRequest } from '../types/api';

interface NewsletterSubscribeProps {
  source?: string;
}

const NewsletterSubscribe: React.FC<NewsletterSubscribeProps> = ({ source = 'website' }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await SubscriptionService.subscribe({
        email,
        name,
        source
      });
      
      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        setEmail('');
        setName('');
      } else {
        setError(response.message || 'Failed to subscribe. Please try again later.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('Subscription error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter-subscribe">
      <h3>Subscribe to Our Newsletter</h3>
      <p>Stay updated with our latest news and events</p>
      
      {success ? (
        <div className="success-message">
          Thank you for subscribing to our newsletter!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="subscribe-form">
          <div className="form-group">
            <label htmlFor="name">Name (optional)</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="subscribe-button"
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSubscribe;
