import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function AboutPreview() {
  const credentials = [
    { icon: Award, label: 'Master of Science in Nutrition' },
    { icon: Award, label: 'Registered Dietitian (RD)' },
    { icon: BookOpen, label: '8+ Years Experience' },
    { icon: Users, label: '500+ Clients Helped' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-poppins font-bold text-charcoal-900 mb-4">
              Meet Myriam, Your Trusted Nutrition Partner
            </h2>
            
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              With over 8 years of experience as a registered dietitian, I'm passionate about 
              helping individuals transform their health through personalized nutrition strategies. 
              My approach combines evidence-based science with compassionate care to create 
              sustainable lifestyle changes.
            </p>
            
            <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
              I specialize in medical nutrition therapy, weight management, sports nutrition, 
              and pediatric nutrition. Whether you're managing a chronic condition, optimizing 
              athletic performance, or seeking family wellness solutions, I'm here to guide you 
              every step of the way.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Icon className="w-5 h-5 text-sage-500" />
                    </div>
                    <span className="text-sm text-charcoal-700">{credential.label}</span>
                  </div>
                );
              })}
            </div>

            <Button
              as={Link}
              to="/about"
              variant="outline"
              className="inline-flex items-center group"
            >
              Learn More About My Approach
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
                alt="Myriam working with nutrition plans and fresh vegetables"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Overlay Card */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-600">95%</div>
                  <div className="text-xs text-charcoal-600">Client Success Rate</div>
                </div>
              </div>

              {/* Another Overlay Card */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-sage-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-charcoal-900">500+</div>
                    <div className="text-xs text-charcoal-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-coral-100 rounded-2xl transform -rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
