import React, { useState } from 'react';
import { Scale, Stethoscope, Zap, Baby, CheckCircle, ArrowRight, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Services() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const services = [
    {
      id: 'weight-management',
      icon: Scale,
      title: 'Weight Management',
      subtitle: 'Sustainable weight loss and maintenance',
      description: 'Achieve your ideal weight through personalized meal planning, behavior modification, and ongoing support. No fad diets – just sustainable strategies that work for life.',
      features: [
        'Comprehensive metabolic assessment',
        'Personalized meal plans and grocery lists',
        'Behavioral coaching and mindset work',
        'Body composition analysis',
        'Weekly check-ins and adjustments',
        'Recipe collection and meal prep guidance',
        '6-month maintenance support program'
      ],
      pricing: {
        initial: { price: '$200', session: 'Initial Consultation (90 min)' },
        followUp: { price: '$125', session: 'Follow-up Sessions (60 min)' },
        package: { price: '$800', session: '6-Session Package (Save $150)' }
      },
      image: 'https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg',
      color: 'sage'
    },
    {
      id: 'medical-nutrition',
      icon: Stethoscope,
      title: 'Medical Nutrition Therapy',
      subtitle: 'Evidence-based nutrition for medical conditions',
      description: 'Specialized nutrition interventions for diabetes, cardiovascular disease, kidney disorders, digestive issues, and other medical conditions.',
      features: [
        'Comprehensive health history review',
        'Lab interpretation and monitoring',
        'Disease-specific meal planning',
        'Medication-nutrition interactions',
        'Insurance billing assistance',
        'Physician collaboration and reports',
        'Family education and support'
      ],

      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg',
      color: 'coral'
    },
    {
      id: 'sports-nutrition',
      icon: Zap,
      title: 'Sports Nutrition',
      subtitle: 'Optimize performance and recovery',
      description: 'Enhance athletic performance through strategic nutrition planning, hydration strategies, and recovery protocols tailored to your sport and training schedule.',
      features: [
        'Performance nutrition assessment',
        'Training-specific fuel strategies',
        'Competition day nutrition plans',
        'Recovery and hydration protocols',
        'Supplement evaluation and guidance',
        'Body composition optimization',
        'Travel nutrition planning'
      ],

      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      color: 'charcoal'
    },
    {
      id: 'pediatric-nutrition',
      icon: Baby,
      title: 'Pediatric Nutrition',
      subtitle: 'Family-focused nutrition for children',
      description: 'Support your child\'s growth and development with age-appropriate nutrition guidance, addressing picky eating, food allergies, and family meal planning.',
      features: [
        'Growth and development assessment',
        'Picky eating behavior strategies',
        'Food allergy and intolerance management',
        'Family meal planning and recipes',
        'School lunch optimization',
        'Parent education and coaching',
        'Teen athlete nutrition support'
      ],

      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg',
      color: 'sage'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'coral':
        return {
          gradient: 'from-coral-500 to-coral-600',
          text: 'text-coral-600',
          bg: 'bg-coral-50',
          border: 'border-coral-200'
        };
      case 'charcoal':
        return {
          gradient: 'from-charcoal-500 to-charcoal-600',
          text: 'text-charcoal-600',
          bg: 'bg-charcoal-50',
          border: 'border-charcoal-200'
        };
      default:
        return {
          gradient: 'from-sage-500 to-sage-600',
          text: 'text-sage-600',
          bg: 'bg-sage-50',
          border: 'border-sage-200'
        };
    }
  };

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-sage-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-charcoal-900 mb-6">
            Nutrition That Actually Works
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
            Forget everything you think you know about "dieting." I'm here to help you 
            build a sustainable, enjoyable relationship with food that gets you results 
            without the misery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-full px-6 py-3 shadow-sm">
              <span className="text-sm text-charcoal-600">✓ Insurance Accepted</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-sm">
              <span className="text-sm text-charcoal-600">✓ Telehealth Available</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-sm">
              <span className="text-sm text-charcoal-600">✓ HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = getColorClasses(service.color);
              const isReverse = index % 2 === 1;
              
              return (
                <div key={service.id} id={service.id} className="scroll-mt-16">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`${isReverse ? 'lg:col-start-2' : ''} animate-fade-in`}>
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-10 rounded-2xl`}></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isReverse ? 'lg:col-start-1' : ''} animate-slide-up`}>
                      <div className="flex items-center mb-6">
                        <div className={`p-3 bg-gradient-to-r ${colors.gradient} rounded-xl mr-4`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900">
                            {service.title}
                          </h2>
                          <p className={`text-lg ${colors.text} font-medium`}>
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-lg font-poppins font-semibold text-charcoal-900 mb-4">
                          What's Included:
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-charcoal-600">
                              <CheckCircle className={`w-4 h-4 ${colors.text} mr-3 flex-shrink-0`} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>



                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          as={Link}
                          to="/book-consultation"
                          className="flex-1 flex items-center justify-center"
                        >
                          Book Consultation
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 flex items-center justify-center"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Guide
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "Do you accept insurance?",
                answer: "Yes, I accept most major insurance plans for Medical Nutrition Therapy services when you have a physician referral. I can also provide superbills for reimbursement. Contact me to verify your specific coverage."
              },
              {
                question: "Do you offer virtual consultations?",
                answer: "Absolutely! I offer secure telehealth consultations for all services. Many clients prefer the convenience of meeting from home, and virtual sessions are just as effective as in-person meetings."
              },
              {
                question: "How long does it take to see results?",
                answer: "Most clients begin to see positive changes within 2-4 weeks. However, lasting results develop over 3-6 months as we work together to create sustainable habits and address underlying factors."
              },
              {
                question: "What makes your approach different?",
                answer: "I focus on creating personalized, sustainable solutions rather than one-size-fits-all approaches. My background in medical nutrition therapy allows me to address both health conditions and wellness goals comprehensively."
              },
              {
                question: "Do you provide meal plans?",
                answer: "Yes, I create detailed, personalized meal plans based on your preferences, schedule, and nutritional needs. I also provide grocery lists, recipes, and meal prep guidance to make implementation easy."
              }
            ].map((faq, index) => {
              const isExpanded = expandedFAQ === index;
              return (
                <div key={index} className="bg-ivory-50 rounded-xl border border-ivory-200 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-ivory-100 transition-colors"
                  >
                    <h3 className="text-lg font-poppins font-semibold text-charcoal-900">
                      {faq.question}
                    </h3>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-charcoal-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-charcoal-600 flex-shrink-0" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <p className="text-charcoal-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-sage-100 mb-8">
            Book your free 15-minute discovery call to discuss your goals 
            and find the perfect service for your needs.
          </p>
          <Button
            as={Link}
            to="/book-consultation"
            size="xl"
            className="bg-white text-sage-700 hover:bg-sage-50"
          >
            Schedule Your Free Discovery Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
