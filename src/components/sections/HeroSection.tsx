import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, Star } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-sage-50 via-ivory-200 to-coral-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-sage-300 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-coral-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-sage-300 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Credentials Badge */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Award className="w-4 h-4 text-sage-600 mr-2" />
                <span className="text-sm font-medium text-charcoal-700">
                  Licensed Registered Dietitian
                </span>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-charcoal-600 ml-2">4.9/5 (127 reviews)</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-inter font-bold text-charcoal-900 leading-tight mb-6">
              Transform Your Health with{' '}
              <span className="text-sage-600">Personalized Nutrition</span>
            </h1>
            
            <p className="text-xl text-charcoal-600 mb-8 leading-relaxed">
              Evidence-based nutrition counseling tailored to your unique needs. 
              Whether you're managing a medical condition, optimizing athletic performance, 
              or seeking sustainable weight management, I'm here to guide your journey.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-sage-500 rounded-full mr-3"></div>
                <span className="text-charcoal-700">Personalized meal plans</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-sage-500 rounded-full mr-3"></div>
                <span className="text-charcoal-700">Medical nutrition therapy</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-sage-500 rounded-full mr-3"></div>
                <span className="text-charcoal-700">Sustainable lifestyle changes</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-sage-500 rounded-full mr-3"></div>
                <span className="text-charcoal-700">Ongoing support & guidance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                as={Link}
                to="/book-consultation"
                size="lg"
                className="flex items-center justify-center group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Book Free Consultation
              </Button>
              <Button
                as={Link}
                to="/services"
                variant="outline"
                size="lg"
                className="flex items-center justify-center"
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-charcoal-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>500+ Clients Served</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                <span>MS in Nutrition</span>
              </div>
              <div>
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/6823521/pexels-photo-6823521.jpeg"
                alt="Sarah Chen, Registered Dietitian, consulting with a client"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-sage-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SC</span>
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-charcoal-900">Sarah Chen, MS, RD</h3>
                    <p className="text-sage-600 text-sm">Registered Dietitian</p>
                    <p className="text-charcoal-600 text-xs">License #RD2024-789</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sage-200 to-coral-200 rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}