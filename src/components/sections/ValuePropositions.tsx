import React from 'react';
import { Heart, Target, Shield } from 'lucide-react';

export function ValuePropositions() {
  const propositions = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every individual deserves personalized attention. I take time to understand your unique health journey, challenges, and goals to create a nutrition plan that truly fits your life.',
      color: 'coral',
    },
    {
      icon: Target,
      title: 'Evidence-Based Results',
      description: 'My approach is grounded in the latest nutrition science and proven methodologies. You can trust that every recommendation is backed by research and clinical experience.',
      color: 'sage',
    },
    {
      icon: Shield,
      title: 'Sustainable Solutions',
      description: 'No fad diets or quick fixes. I focus on creating lasting lifestyle changes that you can maintain long-term, leading to improved health and wellbeing that lasts.',
      color: 'charcoal',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'coral':
        return {
          icon: 'text-coral-500 bg-coral-50',
          title: 'text-coral-700',
        };
      case 'sage':
        return {
          icon: 'text-sage-500 bg-sage-50',
          title: 'text-sage-700',
        };
      case 'charcoal':
        return {
          icon: 'text-charcoal-500 bg-charcoal-50',
          title: 'text-charcoal-700',
        };
      default:
        return {
          icon: 'text-sage-500 bg-sage-50',
          title: 'text-sage-700',
        };
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-4">
            Why Choose Professional Nutrition Counseling?
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Experience the difference that personalized, science-based nutrition guidance 
            can make in your health journey.
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {propositions.map((prop, index) => {
            const Icon = prop.icon;
            const colors = getColorClasses(prop.color);
            
            return (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.icon} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-2xl font-inter font-bold ${colors.title} mb-4`}>
                    {prop.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-charcoal-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-charcoal-600 mb-6">
            Ready to start your personalized nutrition journey?
          </p>
          <div className="inline-flex items-center space-x-2 text-sage-600">
            <span className="w-12 h-px bg-sage-300"></span>
            <span className="text-sm font-medium">Schedule your free 15-minute discovery call</span>
            <span className="w-12 h-px bg-sage-300"></span>
          </div>
        </div>
      </div>
    </section>
  );
}