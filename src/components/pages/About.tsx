import React from 'react';
import { Award, BookOpen, Users, Heart, Target, Shield } from 'lucide-react';

export function About() {
  const credentials = [
    {
      title: 'Master of Science in Biochemistry',
      institution: 'Lebanese University',
      year: '2012',
      description: 'Advanced biochemical understanding of nutrition and metabolism'
    },
    {
      title: 'Master of Science in Nutrition & Food Service',
      institution: 'Lebanese University',
      year: '2014',
      description: 'Specialized in therapeutic nutrition and food service management'
    },
    {
      title: 'Registered Dietitian (RD)',
      institution: 'Lebanese Ministry of Public Health',
      year: '2014',
      description: 'Licensed therapeutic dietitian with clinical practice authorization'
    },
    {
      title: 'Advanced Clinical Nutrition Training',
      institution: 'Multiple Workshops & Trainings',
      year: 'Ongoing',
      description: 'Continuous education in therapeutic nutrition and behavioral counseling'
    }
  ];

  const experience = [
    {
      title: 'Therapeutic Dietitian & Private Practice',
      company: 'Myriam Nutrition',
      period: '2012 - Present',
      description: '12+ years helping thousands improve their lifestyle through personalized therapeutic nutrition counseling, focusing on weight management and lifestyle diseases.'
    },
    {
      title: 'Clinical & Online Dietitian',
      company: 'Independent Practice',
      period: '2014 - Present',
      description: 'Providing both in-person clinical consultations and online nutrition counseling with flexible 80/20 diet, intermittent fasting 16:8, and low-carb approaches.'
    },
    {
      title: 'Behavioral Nutrition Specialist',
      company: 'Therapeutic Practice',
      period: '2015 - Present',
      description: 'Specializing in emotional eating management, disordered eating patterns, and teaching clients to become their own dietitians through sustainable habit integration.'
    },
    {
      title: 'Continuous Education & Training',
      company: 'International Workshops',
      period: '2014 - Present',
      description: 'Attending multiple workshops and trainings inside and outside Lebanon to provide practical, suitable, and personalized diet plans.'
    }
  ];

  const philosophy = [
    {
      icon: Heart,
      title: 'Flexible 80/20 Approach',
      description: 'Enjoy your favorite foods (🍕) while nourishing your body (🍃) - balance, not restriction, is the key to lasting results.'
    },
    {
      icon: Target,
      title: 'Intermittent Fasting 16:8',
      description: 'Strategic eating windows that work with your lifestyle, backed by science and tailored to your individual needs.'
    },
    {
      icon: Shield,
      title: 'Low-Carb That Works',
      description: 'Smart carbohydrate management combined with behavioral techniques to help you become your own dietitian.'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 via-sky-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-48 h-48 rounded-full mx-auto overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
                alt="Myriam, Registered Dietitian"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="192"
                height="192"
              />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-slate-900 mb-6">
              Hey, I'm Dr. Myriam 👋
            </h1>
          
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
              Dr. Myriam Dirani Areif, MS - Your therapeutic dietitian using flexible 80🍕/20🍃 diet, 
              intermittent fasting 16:8, and low-carb approaches to transform your relationship with food.
            </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <Award className="w-4 h-4 mr-2 text-amber-500" />
                MS Biochemistry & Nutrition
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <BookOpen className="w-4 h-4 mr-2 text-amber-500" />
                12+ Years Transforming Lives
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <Users className="w-4 h-4 mr-2 text-amber-500" />
                Thousands Helped 🌟
              </div>
            </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center space-x-4 text-charcoal-600">
              <span className="text-sm">📱 +961 03 345 531</span>
              <span className="text-sm">|</span>
              <span className="text-sm">📧 myriam_nutritips</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/myriam_nutritips" target="_blank" rel="noopener noreferrer" className="text-coral-600 hover:text-coral-700 font-medium">
                Instagram: @myriam_nutritips
              </a>
              <a href="https://www.facebook.com/myriam_nutritips" target="_blank" rel="noopener noreferrer" className="text-coral-600 hover:text-coral-700 font-medium">
                Facebook: Myriam_nutritips
              </a>
              <a href="https://tr.ee/3Mi4CjGZQ7" target="_blank" rel="noopener noreferrer" className="text-coral-600 hover:text-coral-700 font-medium">
                📍 Google Maps Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-slate-900 mb-4">
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-slate-900 mb-4">
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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-slate-900 mb-8 text-center">
                My Journey as Your Therapeutic Dietitian
              </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              🔹️ My name is Myriam Dirani Al-Areif, and I'm a therapeutic dietitian with a unique 
              approach that combines advanced biochemical knowledge with practical, real-world 
              application. My journey began with a Master in Biochemistry from Lebanese University, 
              followed by a Master in Nutrition & Food Service - giving me the scientific foundation 
              to truly understand how nutrition affects your body at the cellular level.
            </p>
            
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              🔹️ Over the past 12 years, I've helped thousands of people transform their lifestyle 
              once and for all using my signature flexible approaches: the 80🍕/20🍃 diet for 
              sustainable balance, intermittent fasting 16:8 for metabolic optimization, and 
              strategic low-carb protocols when medically appropriate.
            </p>
            
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              🔹️ What sets my practice apart is my deep commitment to personalization. I don't 
              just give you a meal plan - I work with you to create personalized strategies that 
              meet your physical needs, emotional behaviors, lifestyle demands, and medical 
              conditions. My meal plans are incredibly flexible with numerous +++ choices, because 
              I've learned that rigid restriction never works long-term.
            </p>
            
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              🔸️ Beyond just nutrition, I provide comprehensive education including easy meal 
              prep ideas, dining out strategies, delivery options, smart snacking, plate division 
              techniques, healthy recipes, shopping guidance, and even free meal planning. My goal 
              is to teach you how to navigate any food situation confidently.
            </p>
            
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              🔹️ I'm particularly passionate about helping clients overcome emotional and 
              disordered eating patterns. Through specialized strategies and techniques, I help 
              you integrate healthy habits that actually stick - not just follow a diet, but 
              fundamentally change your relationship with food.
            </p>
            
            <p className="text-lg text-charcoal-600 leading-relaxed">
              🔹️ And most importantly, I teach my clients how to become their own dietitians 
              after we complete our weight management journey together. This isn't about creating 
              lifelong dependence - it's about empowering you with knowledge and skills that last 
              a lifetime. Through continuous education via workshops and trainings both inside and 
              outside Lebanon, I ensure my methods remain cutting-edge and practical.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-slate-900 mb-12 text-center">
                Lebanese Education & Continuous Learning
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
                    <h3 className="text-lg font-poppins font-bold text-charcoal-900 mb-2">
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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-sky-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-slate-900 mb-12 text-center">
                Professional Experience
              </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-charcoal-900 mb-2">
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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-slate-900 mb-8">
                Beyond Nutrition
              </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="Myriam hiking in nature"
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
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

      {/* Contact Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-slate-900 mb-8">
                Ready to Transform Your Relationship with Food?
              </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's work together to create sustainable, enjoyable nutrition habits that fit your lifestyle.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors text-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-slate-900 mb-8 text-center">
                Working Together: Our Policies
              </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6 text-center">
              To ensure better working conditions between us and provide the best possible service to you:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral-100 rounded-full flex items-center justify-center">
                  <span className="text-coral-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-charcoal-900 mb-2">
                    No Last-Minute Cancellations
                  </h3>
                  <p className="text-charcoal-600">
                    Emergency cases are excluded, but please respect our time and other clients' needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral-100 rounded-full flex items-center justify-center">
                  <span className="text-coral-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-charcoal-900 mb-2">
                    Appointment Postponement Policy
                  </h3>
                  <p className="text-charcoal-600">
                    No multiple time appointment postponement. A 1-week notice is required for any changes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral-100 rounded-full flex items-center justify-center">
                  <span className="text-coral-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-charcoal-900 mb-2">
                    WhatsApp Service Guidelines
                  </h3>
                  <p className="text-charcoal-600 mb-3">
                    WhatsApp service is available exclusively for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-charcoal-600 ml-4">
                    <li>Online subscribers</li>
                    <li>Booking/Confirming appointments</li>
                    <li>Making a purchase</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-charcoal-600 font-medium">
                Thank you for your cooperation ❤
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}