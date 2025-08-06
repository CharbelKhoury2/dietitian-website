import React from 'react';
import { TrendingUp, Clock, Award, Heart } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: '500+',
      label: 'Clients Transformed',
      description: 'Lives changed through personalized nutrition',
      color: 'sage',
    },
    {
      icon: Clock,
      value: '8+',
      label: 'Years Experience',
      description: 'Helping clients achieve lasting results',
      color: 'coral',
    },
    {
      icon: Award,
      value: '95%',
      label: 'Success Rate',
      description: 'Clients who meet their health goals',
      color: 'charcoal',
    },
    {
      icon: Heart,
      value: '4.9/5',
      label: 'Client Rating',
      description: 'Based on 127+ verified reviews',
      color: 'sage',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'coral':
        return 'text-coral-500';
      case 'charcoal':
        return 'text-charcoal-500';
      default:
        return 'text-sage-500';
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-sage-50 to-coral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-4">
            Proven Results You Can Trust
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Numbers that reflect my commitment to helping you achieve lasting health transformations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClass = getColorClasses(stat.color);
            
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-4 group-hover:shadow-md transition-shadow">
                  <Icon className={`w-8 h-8 ${colorClass}`} />
                </div>
                <div className="text-4xl font-inter font-bold text-charcoal-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-charcoal-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-charcoal-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm">
            <span className="text-sm text-charcoal-600">
              ⭐ Trusted by individuals, families, and healthcare professionals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}