import React from 'react';
import { Award, BookOpen, Users, Heart, Target, Shield } from 'lucide-react';

export function About() {
  const credentials = [
    {
      title: 'Master of Science in Nutrition',
      institution: 'University of California, Berkeley',
      year: '2016',
      description: 'Specialized in Medical Nutrition Therapy and Sports Nutrition'
    },
    {
      title: 'Registered Dietitian (RD)',
      institution: 'Commission on Dietetic Registration',
      year: '2017',
      description: 'Licensed to practice medical nutrition therapy'
    },
    {
      title: 'Certified Diabetes Educator',
      institution: 'Certification Board for Diabetes Care',
      year: '2019',
      description: 'Specialized certification in diabetes management'
    },
    {
      title: 'Sports Nutrition Certification',
      institution: 'International Society of Sports Nutrition',
      year: '2020',
      description: 'Advanced training in performance nutrition'
    }
  ];

  const experience = [
    {
      title: 'Private Practice Nutrition Counseling',
      company: 'Sarah Chen Nutrition',
      period: '2021 - Present',
      description: 'Providing comprehensive nutrition counseling services with a focus on medical nutrition therapy, weight management, and sports nutrition.'
    },
    {
      title: 'Clinical Dietitian',
      company: 'UCSF Medical Center',
      period: '2018 - 2021',
      description: 'Specialized in medical nutrition therapy for patients with diabetes, cardiovascular disease, and kidney disorders.'
    },
    {
      title: 'Sports Nutrition Consultant',
      company: 'Bay Area Athletic Performance',
      period: '2019 - 2021',
      description: 'Worked with elite athletes and sports teams to optimize performance through strategic nutrition planning.'
    },
    {
      title: 'Pediatric Nutrition Specialist',
      company: "UCSF Benioff Children's Hospital",
      period: '2017 - 2018',
      description: 'Provided nutrition counseling for children with feeding disorders, food allergies, and growth concerns.'
    }
  ];

  const philosophy = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every client deserves personalized attention and understanding of their unique health journey.'
    },
    {
      icon: Target,
      title: 'Evidence-Based Practice',
      description: 'All recommendations are grounded in the latest nutrition science and clinical research.'
    },
    {
      icon: Shield,
      title: 'Sustainable Solutions',
      description: 'Focus on creating lasting lifestyle changes rather than quick fixes or fad diets.'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-sage-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
              alt="Sarah Chen, Registered Dietitian"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
            />
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-inter font-bold text-charcoal-900 mb-6">
            Meet Sarah Chen, MS, RD
          </h1>
          
          <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
            Registered Dietitian dedicated to helping you achieve optimal health through 
            personalized nutrition counseling and evidence-based dietary guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal-600">
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <Award className="w-4 h-4 mr-2 text-sage-500" />
              MS in Nutrition
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2 text-sage-500" />
              8+ Years Experience
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <Users className="w-4 h-4 mr-2 text-sage-500" />
              500+ Clients Helped
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-4">
              My Approach to Nutrition
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              My philosophy centers on creating sustainable, personalized nutrition solutions 
              that fit seamlessly into your lifestyle while addressing your unique health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-sage-600" />
                  </div>
                  <h3 className="text-2xl font-inter font-bold text-charcoal-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20 bg-ivory-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-8 text-center">
            My Journey in Nutrition
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              My passion for nutrition began during my own health journey in college. After struggling 
              with digestive issues and low energy, I discovered how powerful proper nutrition could be 
              in transforming not just physical health, but overall quality of life. This personal 
              experience ignited my desire to help others discover the same transformative power of food.
            </p>
            
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              After completing my Master's degree in Nutrition at UC Berkeley, I began my career at 
              UCSF Medical Center, where I worked with patients facing complex medical conditions. 
              This experience taught me the critical importance of individualized nutrition therapy 
              and the need for compassionate, patient-centered care.
            </p>
            
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              Over the past eight years, I've had the privilege of working with over 500 clients, 
              from elite athletes optimizing performance to families navigating food allergies, 
              from individuals managing diabetes to those seeking sustainable weight management. 
              Each client has taught me something new and reinforced my belief that there's no 
              one-size-fits-all approach to nutrition.
            </p>
            
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Today, through my private practice, I continue to be amazed by the resilience and 
              determination of my clients. My greatest joy comes from seeing someone regain their 
              confidence, energy, and health through the power of personalized nutrition. I'm here 
              to be your guide, advocate, and support system on your own journey to optimal health.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-12 text-center">
            Education & Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((credential, index) => (
              <div key={index} className="bg-ivory-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-sage-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-inter font-bold text-charcoal-900 mb-2">
                      {credential.title}
                    </h3>
                    <p className="text-sage-600 font-medium mb-1">
                      {credential.institution}
                    </p>
                    <p className="text-sm text-charcoal-500 mb-3">
                      {credential.year}
                    </p>
                    <p className="text-sm text-charcoal-600">
                      {credential.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-20 bg-ivory-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-12 text-center">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-inter font-bold text-charcoal-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-sage-600 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                      {job.period}
                    </span>
                  </div>
                </div>
                <p className="text-charcoal-600 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-8">
            Beyond Nutrition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="Sarah Chen hiking in nature"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="text-left">
              <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                When I'm not working with clients, you can find me exploring the beautiful hiking 
                trails around San Francisco Bay, experimenting with new healthy recipes in my kitchen, 
                or practicing yoga in my backyard garden.
              </p>
              
              <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                I believe in practicing what I preach – maintaining a balanced lifestyle that includes 
                regular physical activity, stress management, and enjoying delicious, nourishing food 
                with family and friends.
              </p>
              
              <p className="text-lg text-charcoal-600 leading-relaxed">
                I'm also passionate about making nutrition education accessible to everyone and 
                regularly volunteer at local community health fairs and speak at wellness events 
                throughout the Bay Area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}