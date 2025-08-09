// Security utilities for input validation and sanitization

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Phone number validation regex (international format)
 */
const PHONE_REGEX = /^[+]?[1-9]\d{1,14}$/;

/**
 * URL validation regex
 */
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

/**
 * Input validation functions
 */
export const validate = {
  /**
   * Validate email address
   */
  email: (email: string): boolean => {
    return EMAIL_REGEX.test(email.trim());
  },

  /**
   * Validate phone number
   */
  phone: (phone: string): boolean => {
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    return PHONE_REGEX.test(cleanPhone);
  },

  /**
   * Validate URL
   */
  url: (url: string): boolean => {
    return URL_REGEX.test(url.trim());
  },

  /**
   * Validate required field
   */
  required: (value: string): boolean => {
    return value.trim().length > 0;
  },

  /**
   * Validate minimum length
   */
  minLength: (value: string, min: number): boolean => {
    return value.trim().length >= min;
  },

  /**
   * Validate maximum length
   */
  maxLength: (value: string, max: number): boolean => {
    return value.trim().length <= max;
  },

  /**
   * Validate name (letters, spaces, hyphens, apostrophes only)
   */
  name: (name: string): boolean => {
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    return nameRegex.test(name.trim()) && name.trim().length >= 2;
  }
};

/**
 * Sanitization functions
 */
export const sanitize = {
  /**
   * Remove HTML tags from string
   */
  stripHtml: (str: string): string => {
    return str.replace(/<[^>]*>/g, '');
  },

  /**
   * Escape HTML special characters
   */
  escapeHtml: (str: string): string => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  /**
   * Clean phone number (remove formatting)
   */
  phone: (phone: string): string => {
    return phone.replace(/[^\d+]/g, '');
  },

  /**
   * Clean and trim text input
   */
  text: (text: string): string => {
    return text.trim().replace(/\s+/g, ' ');
  },

  /**
   * Sanitize email (lowercase and trim)
   */
  email: (email: string): string => {
    return email.trim().toLowerCase();
  }
};

/**
 * Form validation helper
 */
export interface ValidationRule {
  validator: (value: string) => boolean;
  message: string;
}

export interface ValidationRules {
  [key: string]: ValidationRule[];
}

export const validateForm = (
  data: Record<string, string>,
  rules: ValidationRules
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  Object.keys(rules).forEach(field => {
    const value = data[field] || '';
    const fieldRules = rules[field];

    for (const rule of fieldRules) {
      if (!rule.validator(value)) {
        errors[field] = rule.message;
        break; // Stop at first error for this field
      }
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Common validation rules
 */
export const commonRules = {
  required: (message = 'This field is required'): ValidationRule => ({
    validator: validate.required,
    message
  }),

  email: (message = 'Please enter a valid email address'): ValidationRule => ({
    validator: validate.email,
    message
  }),

  phone: (message = 'Please enter a valid phone number'): ValidationRule => ({
    validator: validate.phone,
    message
  }),

  name: (message = 'Please enter a valid name'): ValidationRule => ({
    validator: validate.name,
    message
  }),

  minLength: (min: number, message?: string): ValidationRule => ({
    validator: (value: string) => validate.minLength(value, min),
    message: message || `Must be at least ${min} characters long`
  }),

  maxLength: (max: number, message?: string): ValidationRule => ({
    validator: (value: string) => validate.maxLength(value, max),
    message: message || `Must be no more than ${max} characters long`
  })
};

/**
 * Rate limiting helper (simple client-side)
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();

  isAllowed(key: string, maxAttempts: number, windowMs: number): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    return true;
  }

  reset(key: string): void {
    this.attempts.delete(key);
  }
}

export const rateLimiter = new RateLimiter();

/**
 * Content Security Policy helpers
 */
export const csp = {
  /**
   * Check if a URL is from an allowed domain
   */
  isAllowedDomain: (url: string, allowedDomains: string[]): boolean => {
    try {
      const urlObj = new URL(url);
      return allowedDomains.some(domain => 
        urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
      );
    } catch {
      return false;
    }
  },

  /**
   * Allowed domains for external resources
   */
  allowedImageDomains: [
    'images.pexels.com',
    'drmyriam.com',
    'localhost'
  ],

  allowedVideoDomains: [
    'youtube.com',
    'youtu.be',
    'vimeo.com'
  ]
};