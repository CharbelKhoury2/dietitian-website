import React from 'react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Weight Management Client',
      content: 'Sarah helped me lose 35 pounds and completely changed my relationship with food. Her approach is so practical and sustainable. I finally feel confident about maintaining my health long-term.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      result: 'Lost 35 lbs in 6 months',
    },
    {
      name: 'David Chen',
      role: 'Diabetes Management',
      content: 'Working with Sarah has been life-changing. My A1C dropped from 8.2 to 6.1, and I have so much more energy. She made managing diabetes feel manageable and even enjoyable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      result: 'A1C improved to 6.1',
    },
    {
      name: 'Jennifer Park',
      role: 'Marathon Runner',
      content: 'Sarah optimized my nutrition for marathon training, and I PR\'d by 12 minutes! Her sports nutrition expertise is incredible, and she really understands the needs of endurance athletes.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
      result: '12-minute PR improvement',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-4">
            Real Results from Real People
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have achieved 
            through personalized nutrition counseling.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-ivory-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-sage-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-charcoal-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="bg-sage-100 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-sage-700">
                  ✨ {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-poppins font-semibold text-charcoal-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-charcoal-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-sage-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-poppins font-bold text-sage-700 mb-2">500+</div>
              <div className="text-sm text-charcoal-600">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-sage-700 mb-2">95%</div>
              <div className="text-sm text-charcoal-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-sage-700 mb-2">4.9</div>
              <div className="text-sm text-charcoal-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-sage-700 mb-2">127</div>
              <div className="text-sm text-charcoal-600">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
