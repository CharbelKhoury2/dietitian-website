import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center text-sage-300 text-sm">
        <CheckCircle className="w-4 h-4 mr-2" />
        <span>Thanks for subscribing!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:border-sage-400 focus:ring-1 focus:ring-sage-400 focus:outline-none text-sm"
          required
        />
      </div>
      <Button
        type="submit"
        size="sm"
        loading={isSubmitting}
        className="bg-sage-600 hover:bg-sage-700 text-white"
      >
        <Mail className="w-4 h-4" />
      </Button>
    </form>
  );
}
