import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, Star } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-sage-50 to-terracotta-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm mb-6 border border-terracotta-100">
              <div className="flex text-terracotta-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-charcoal-600 ml-2 font-medium">Trusted by 500+ clients</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-inter font-bold text-charcoal-900 leading-tight mb-6">
              Transform Your Relationship with Food with Dr. <span className="text-terracotta-600">Myriam</span>
            </h1>
            
            <p className="text-xl text-charcoal-600 mb-8 leading-relaxed">
              No fad diets. No restrictions. Just personalized nutrition guidance that fits your lifestyle. 
              As a registered dietitian, I help you build a healthy relationship with food while achieving your goals.
            </p>

            {/* Key Benefits - Instagram-style */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-terracotta-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="text-charcoal-700 font-medium">Personalized nutrition plans</span>
                  <p className="text-sm text-charcoal-500">Tailored to your lifestyle & preferences</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-terracotta-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="text-charcoal-700 font-medium">Virtual & in-person sessions</span>
                  <p className="text-sm text-charcoal-500">Flexible scheduling that works for you</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-terracotta-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="text-charcoal-700 font-medium">Evidence-based guidance</span>
                  <p className="text-sm text-charcoal-500">Science-backed, no BS approach</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Modern styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                as={Link}
                to="/book-consultation"
                size="lg"
                className="bg-terracotta-600 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-terracotta-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Your Journey →
              </Button>
              <Button
                as={Link}
                to="/services"
                variant="outline"
                size="lg"
                className="border-2 border-terracotta-200 text-terracotta-600 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-terracotta-50 transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-terracotta-600">500+</div>
                <div className="text-sm text-charcoal-500">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-terracotta-600">8+</div>
                <div className="text-sm text-charcoal-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-terracotta-600">4.9★</div>
                <div className="text-sm text-charcoal-500">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Modern Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
                alt="Modern nutrition consultation"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Instagram-style card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-terracotta-100">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-terracotta-400 to-terracotta-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SC</span>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-charcoal-900">Dr. Myriam</h3>
                  <p className="text-terracotta-600 text-sm font-medium">Registered Dietitian</p>
                  <p className="text-charcoal-500 text-xs">MS • Evidence-based nutrition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decoration - Modern */}
          <div className="absolute inset-0 bg-gradient-to-tr from-terracotta-100 via-cream-100 to-sage-100 rounded-3xl transform rotate-2 -z-10 opacity-30"></div>
        </div>
      </div>
    </section>
  );
}