import React from 'react';
import { Star, Quote, TrendingDown, Heart, Zap, Users } from 'lucide-react';

export function Testimonials() {
  const featuredTestimonials = [
    {
      name: 'Layla Khoury',
      role: 'Weight Management Success',
      content: 'Dr. Myriam helped me lose 35 pounds and completely changed my relationship with food. Her approach is so practical and sustainable. I finally feel confident about maintaining my health long-term. The personalized meal plans made all the difference.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      result: 'Lost 35 lbs in 6 months',
      beforeAfter: { before: '185 lbs', after: '150 lbs' },
      category: 'weight-loss'
    },
    {
      name: 'Omar Farah',
      role: 'Diabetes Management',
      content: 'Working with Dr. Myriam has been life-changing. My A1C dropped from 8.2 to 6.1, and I have so much more energy. She made managing diabetes feel manageable and even enjoyable. Her knowledge of medical nutrition therapy is incredible.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      result: 'A1C improved to 6.1',
      beforeAfter: { before: 'A1C: 8.2', after: 'A1C: 6.1' },
      category: 'medical'
    },
    {
      name: 'Nadia Salim',
      role: 'Marathon Runner',
      content: 'Dr. Myriam optimized my nutrition for marathon training, and I PR\'d by 12 minutes! Her sports nutrition expertise is incredible, and she really understands the needs of endurance athletes. The race day nutrition plan was perfect.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
      result: '12-minute PR improvement',
      beforeAfter: { before: '3:45:00', after: '3:33:00' },
      category: 'sports'
    }
  ];

  const additionalTestimonials = [
    {
      name: 'Rima Haddad',
      role: 'Busy Mom of 3',
      content: 'Dr. Myriam helped our whole family eat better without the stress. My kids actually ask for the healthy snacks now, and meal planning has become so much easier.',
      rating: 5,
      category: 'family'
    },
    {
      name: 'Khalil Mansour',
      role: 'Heart Disease Recovery',
      content: 'After my heart attack, Dr. Myriam guided me through a complete nutrition overhaul. My cholesterol dropped 60 points, and my cardiologist is amazed at my progress.',
      rating: 5,
      category: 'medical'
    },
    {
      name: 'Yasmin Tabbara',
      role: 'College Athlete',
      content: 'Dr. Myriam helped me fuel properly for soccer season. My performance and recovery improved dramatically. She made sports nutrition simple to understand and follow.',
      rating: 5,
      category: 'sports'
    },
    {
      name: 'Samir Abou Zeid',
      role: 'Pre-Diabetes Reversal',
      content: 'I was pre-diabetic and terrified. Dr. Myriam\'s program helped me lose weight and get my blood sugar back to normal. I feel like I got my life back.',
      rating: 5,
      category: 'medical'
    },
    {
      name: 'Lara Nasrallah',
      role: 'Digestive Health',
      content: 'Years of digestive issues finally resolved with Dr. Myriam\'s help. She identified my trigger foods and created a plan that healed my gut. I feel amazing now.',
      rating: 5,
      category: 'medical'
    },
    {
      name: 'Fadi Karam',
      role: 'Bodybuilding Prep',
      content: 'Dr. Myriam helped me prepare for my first bodybuilding competition. Her precision with macros and timing was incredible. I placed 2nd in my division!',
      rating: 5,
      category: 'sports'
    }
  ];

  const successStats = [
    { icon: Users, value: '500+', label: 'Lives Transformed' },
    { icon: TrendingDown, value: '95%', label: 'Success Rate' },
    { icon: Heart, value: '4.9/5', label: 'Client Rating' },
    { icon: Zap, value: '6 months', label: 'Average Goal Achievement' }
  ];

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-sage-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-charcoal-900 mb-6">
            Success Stories & Testimonials
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
            Real transformations from real people. See how personalized nutrition 
            counseling has helped clients achieve their health goals and transform their lives.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <Icon className="w-8 h-8 text-sage-600 mx-auto mb-3" />
                  <div className="text-2xl font-poppins font-bold text-charcoal-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-charcoal-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-12 text-center">
            Featured Success Stories
          </h2>
          
          <div className="space-y-16">
            {featuredTestimonials.map((testimonial, index) => {
              const isReverse = index % 2 === 1;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image & Stats */}
                  <div className={`${isReverse ? 'lg:col-start-2' : ''} animate-fade-in`}>
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                      />
                      
                      {/* Result Badge */}
                      <div className="absolute top-6 left-6 bg-sage-600 text-white rounded-full px-4 py-2 shadow-lg">
                        <span className="text-sm font-medium">✨ {testimonial.result}</span>
                      </div>

                      {/* Before/After */}
                      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="text-center">
                          <div className="text-xs text-charcoal-500 mb-2">Transformation</div>
                          <div className="text-sm">
                            <span className="text-charcoal-600">{testimonial.beforeAfter.before}</span>
                            <span className="text-sage-600 mx-2">→</span>
                            <span className="text-sage-600 font-semibold">{testimonial.beforeAfter.after}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isReverse ? 'lg:col-start-1' : ''} animate-slide-up`}>
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-sage-400 mb-4" />
                      
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-sage-600 font-bold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-poppins font-bold text-charcoal-900 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-sage-600 font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Testimonials Grid */}
      <section className="py-16 lg:py-20 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-12 text-center">
            More Client Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-sage-400 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-charcoal-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <h4 className="font-poppins font-semibold text-charcoal-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-charcoal-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-12">
            Video Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Layla Khoury',
                title: 'Weight Loss Journey',
                thumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
                duration: '3:42'
              },
              {
                name: 'Omar Farah',
                title: 'Diabetes Management',
                thumbnail: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
                duration: '4:15'
              }
            ].map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/30 transition-colors"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-8 border-l-sage-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-poppins font-semibold text-charcoal-900">{video.name}</h3>
                  <p className="text-charcoal-600">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Summary */}
      <section className="py-16 lg:py-20 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-8">
            What Clients Say About Working With Me
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <div className="flex justify-center items-center mb-6">
              <div className="text-4xl font-bold text-sage-600 mr-4">4.9</div>
              <div>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-600">Based on 127+ verified reviews</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-sage-600 mb-2">95%</div>
                <p className="text-charcoal-600">of clients achieve their goals</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-sage-600 mb-2">98%</div>
                <p className="text-charcoal-600">would recommend to a friend</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-sage-600 mb-2">6 months</div>
                <p className="text-charcoal-600">average time to reach goals</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-charcoal-600 mb-8">
            Join the hundreds of clients who have transformed their health and relationship with food. 
            Your success story could be next.
          </p>
        </div>
      </section>
    </div>
  );
}
