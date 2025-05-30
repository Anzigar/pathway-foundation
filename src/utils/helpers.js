/**
 * Format date to display in a human-readable format
 * 
 * @param {Date|string} date - Date object or date string
 * @param {Object} options - Formatting options
 * @returns {string} Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options
  };
  
  return dateObj.toLocaleDateString("en-US", defaultOptions);
};

/**
 * Truncate text to a specified length and add ellipsis
 * 
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text;
  
  return text.substring(0, maxLength) + "...";
};

/**
 * Scroll to top of the page smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

/**
 * Format currency based on currency code
 * 
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (USD, TZS)
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = "USD") => {
  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  }
  
  if (currency === "TZS") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "TZS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
  
  return amount.toString();
};