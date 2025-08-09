import React from 'react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Meet Dr. Myriam, Lebanon's Trusted Registered Dietitian
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 12 years of experience as a registered dietitian in Lebanon, I'm passionate about helping individuals throughout Beirut and surrounding areas transform their health through personalized nutrition strategies. My approach combines evidence-based science with compassionate care to create sustainable lifestyle changes.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Serving the Lebanese community, I specialize in medical nutrition therapy, weight management, sports nutrition, and pediatric nutrition. Whether you're in Beirut, Mount Lebanon, or surrounding areas, and managing a chronic condition, optimizing athletic performance, or seeking family wellness solutions, I'm here to guide you every step of the way.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Master of Science in Nutrition</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Registered Dietitian (RD)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">8+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">500+ Clients Helped</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              to="/about"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 inline-flex items-center"
            >
              Learn More About Lebanon's Top Dietitian
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
                alt="Dr. Myriam - Registered Dietitian in Lebanon"
                className="w-full h-auto rounded-lg shadow-lg"
                width="600"
                height="800"
                decoding="async"
                loading="eager"
              />
              
              {/* Doctor Info Card */}
               <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DM</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Dr. Myriam</h3>
                    <p className="text-teal-600 text-sm font-medium">Registered Dietitian</p>
                    <p className="text-gray-500 text-xs">MS • Evidence-based nutrition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
