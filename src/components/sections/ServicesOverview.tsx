import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Stethoscope, Zap, Baby, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function ServicesOverview() {
  const services = [
    {
      icon: Scale,
      title: 'Weight Management',
      description: 'Sustainable weight loss and maintenance strategies tailored to your lifestyle, metabolism, and preferences.',
      features: ['Personalized meal plans', 'Behavioral coaching', 'Metabolic assessment', 'Long-term support'],

      color: 'sage',
    },
    {
      icon: Stethoscope,
      title: 'Medical Nutrition Therapy',
      description: 'Specialized nutrition interventions for diabetes, heart disease, kidney conditions, and digestive disorders.',
      features: ['Disease-specific protocols', 'Lab review & interpretation', 'Insurance billing', 'Physician collaboration'],

      color: 'coral',
    },
    {
      icon: Zap,
      title: 'Sports Nutrition',
      description: 'Performance optimization for athletes and active individuals through strategic nutrition planning.',
      features: ['Performance meal plans', 'Supplement guidance', 'Recovery protocols', 'Competition prep'],

      color: 'charcoal',
    },
    {
      icon: Baby,
      title: 'Pediatric Nutrition',
      description: 'Nutrition guidance for children and families, including picky eating, allergies, and growth concerns.',
      features: ['Family meal planning', 'Allergy management', 'Growth monitoring', 'Parent education'],

      color: 'sage',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'coral':
        return {
          gradient: 'from-coral-500 to-coral-600',
          border: 'border-coral-200 hover:border-coral-300',
          icon: 'text-coral-500',
          price: 'text-coral-600',
        };
      case 'charcoal':
        return {
          gradient: 'from-charcoal-500 to-charcoal-600',
          border: 'border-charcoal-200 hover:border-charcoal-300',
          icon: 'text-charcoal-500',
          price: 'text-charcoal-600',
        };
      default:
        return {
          gradient: 'from-sage-500 to-sage-600',
          border: 'border-sage-200 hover:border-sage-300',
          icon: 'text-sage-500',
          price: 'text-sage-600',
        };
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-4">
            How I Help You Win at Food
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-8">
            Because life's too short for boring diets and food rules that don't work. 
            Let's make nutrition simple, sustainable, and actually enjoyable.
          </p>
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm">
            <span className="text-sm text-charcoal-600 mr-2">Every package includes:</span>
            <span className="text-sm font-medium text-coral-600">Real-life meal plans • Text support • No judgment zone</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-sm border-2 ${colors.border} hover:shadow-lg transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 bg-gradient-to-r ${colors.gradient} rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                </div>

                {/* Content */}
                <h3 className="text-2xl font-poppins font-bold text-charcoal-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-charcoal-600">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  as={Link}
                  to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  variant="outline"
                  className="w-full group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-200">
            <h3 className="text-2xl font-poppins font-bold text-charcoal-900 mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-charcoal-600 mb-6">
              Book a free 15-minute discovery call to discuss your goals and find the perfect fit.
            </p>
            <Button
              as={Link}
              to="/book-consultation"
              size="lg"
              className="inline-flex items-center"
            >
              Schedule Discovery Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
