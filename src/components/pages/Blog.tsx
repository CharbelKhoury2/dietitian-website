import React, { useState } from 'react';
import { Search, Filter, Clock, User, ArrowRight, Download, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 28 },
    { id: 'weight-loss', name: 'Weight Management', count: 8 },
    { id: 'medical', name: 'Medical Nutrition', count: 6 },
    { id: 'sports', name: 'Sports Nutrition', count: 4 },
    { id: 'recipes', name: 'Healthy Recipes', count: 6 },
    { id: 'videos', name: 'Video Content', count: 4 }
  ];

  const articles = [
    {
      id: 1,
      title: '10 Evidence-Based Strategies for Sustainable Weight Loss',
      excerpt: 'Discover science-backed methods for losing weight and keeping it off long-term, without restrictive dieting or extreme measures.',
      author: 'Dr. Myriam',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'weight-loss',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    },
    {
      id: 2,
      title: 'Managing Diabetes Through Nutrition: A Complete Guide',
      excerpt: 'Learn how to effectively manage blood sugar levels through strategic meal planning and smart food choices.',
      author: 'Dr. Myriam',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'medical',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg',
      featured: true
    },
    {
      id: 3,
      title: 'Pre and Post Workout Nutrition for Endurance Athletes',
      excerpt: 'Optimize your training and recovery with targeted nutrition strategies designed for endurance sports.',
      author: 'Dr. Myriam',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'sports',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg'
    },
    {
      id: 7,
      title: 'حلقة ١ من موسم ٥ من اختار الصحن الأفضل مع ميريام الديراني',
      excerpt: 'Join me in this special Arabic episode where we explore practical nutrition choices and healthy eating strategies.',
      author: 'Dr. Myriam',
      date: '2024-01-20',
      readTime: '15 min watch',
      category: 'videos',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
      featured: true,
      videoUrl: 'https://youtu.be/Y3GdEeKsQ4U',
      isVideo: true
    },
    {
      id: 8,
      title: 'حلقة ٢ من موسم ٥ من اختار الصحن الأفضل مع ميريام الديراني',
      excerpt: 'Learn evidence-based low-carb approaches that fit your lifestyle and deliver real results.',
      author: 'Dr. Myriam',
      date: '2024-01-16',
      readTime: '12 min watch',
      category: 'videos',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      featured: true,
      videoUrl: 'https://youtu.be/pt0K_J5OLDk',
      isVideo: true
    },
    {
      id: 9,
      title: 'حلقة ٣ من موسم ٥ من اختار الصحن الأفضل مع ميريام الديراني',
      excerpt: 'Master the 16:8 intermittent fasting protocol with practical tips and meal timing strategies.',
      author: 'Dr. Myriam',
      date: '2024-01-17',
      readTime: '18 min watch',
      category: 'videos',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      featured: true,
      videoUrl: 'https://youtu.be/87Kyie4DTv8',
      isVideo: true
    },
    {
      id: 10,
      title: 'Myriam Nutrition Tips - Complete Video Collection',
      excerpt: 'Access my full collection of nutrition videos, tips, and educational content all in one place.',
      author: 'Dr. Myriam',
      date: '2024-01-18',
      readTime: 'Collection',
      category: 'videos',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      videoUrl: 'https://tr.ee/OZqg0Ut9Ai',
      isVideo: true
    },
    {
      id: 14,
      title: 'حلقة ٤ من موسم ٥ من اختار الصحن الأفضل مع ميريام الديراني',
      excerpt: 'Join me as I tackle the most common nutrition myths and provide evidence-based facts.',
      author: 'Dr. Myriam',
      date: '2024-01-19',
      readTime: '20 min watch',
      category: 'videos',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      featured: true,
      videoUrl: 'https://youtu.be/5fcx7ZpCEMU',
      isVideo: true
    },
    {
      id: 11,
      title: 'Heart-Healthy Mediterranean Bowl Recipe',
      excerpt: 'A delicious, nutrient-packed bowl that supports cardiovascular health and tastes amazing.',
      author: 'Dr. Myriam',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'recipes',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      featured: true
    },
    {
      id: 12,
      title: 'Understanding Food Labels: A Dietitian\'s Guide',
      excerpt: 'Learn to decode nutrition labels and make informed choices at the grocery store.',
      author: 'Dr. Myriam',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'weight-loss',
      image: 'https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg'
    },
    {
      id: 13,
      title: 'Anti-Inflammatory Foods for Chronic Disease Prevention',
      excerpt: 'Discover powerful foods that can help reduce inflammation and support overall health.',
      author: 'Dr. Myriam',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'medical',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    }
  ];

  const resources = [
    {
      title: 'Food Storage and Safety Free Guide',
      description: 'Complete guide to proper food storage, safety practices, and extending shelf life for healthy eating.',
      type: 'PDF Guide',
      downloads: 1892,
      url: 'https://tr.ee/food-storage-safety-guide'
    },
    {
      title: 'Free Calories Menu Guide for Restaurants',
      description: 'Navigate restaurant menus like a pro with calorie counts and healthy choices for every cuisine.',
      type: 'PDF Guide',
      downloads: 2456,
      url: 'https://tr.ee/restaurant-calories-guide'
    },
    {
      title: 'Free Grocery Checklist',
      description: 'Your complete shopping companion with categorized lists, meal planning tips, and budget-friendly options.',
      type: 'PDF Checklist',
      downloads: 3124,
      url: 'https://tr.ee/grocery-checklist'
    }
  ];

  // Filter articles based on search and category
  // const filteredArticles = articles.filter(article => {
  //   const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
  //   return matchesSearch && matchesCategory;
  // });

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 via-sky-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-charcoal-900 mb-6">
              Real Talk on Nutrition
            </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
            No fluff, no pseudoscience - just straight-up nutrition advice that actually works. 
            Recipes, myth-busting, and real-life tips from your friendly neighborhood RD.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-charcoal-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles and recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-charcoal-600 mr-2" />
              <span className="font-medium text-charcoal-700">Filter by category:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
            }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Articles */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-12">
            Featured Blog Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {articles.filter(article => article.featured && !article.isVideo).slice(0, 2).map((article) => (
              <article
                key={article.id}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="400"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-charcoal-500 mb-3">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{article.author}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="font-poppins font-bold text-xl text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-charcoal-600 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <Link
                      to={`/resources/${article.id}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-12">
            Latest YouTube Videos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.filter(article => article.featured && article.isVideo).map((video) => (
              <article
                key={video.id}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-6 border-l-red-600 border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                        YouTube
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center text-sm text-charcoal-500 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{video.readTime}</span>
                    </div>
                    
                    <h3 className="font-poppins font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-charcoal-600 text-sm mb-3 line-clamp-2">
                      {video.excerpt}
                    </p>
                    
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group text-sm"
                    >
                      Watch on YouTube
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* Free Resources */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-4">
              Free Nutrition Resources
            </h2>
            <p className="text-lg text-charcoal-600">
              Download these helpful guides and tools to support your nutrition journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Download className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-charcoal-900">{resource.title}</h3>
                    <p className="text-sm text-sage-600">{resource.type}</p>
                  </div>
                </div>
                
                <p className="text-charcoal-600 mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-charcoal-500">
                    {resource.downloads.toLocaleString()} downloads
                  </span>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-emerald-300 text-sm font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50 transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <BookOpen className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-2xl font-poppins font-bold text-charcoal-900 mb-4">
              Get Weekly Nutrition Tips
            </h3>
            <p className="text-charcoal-600 mb-6">
              Join 2,500+ health-conscious individuals receiving evidence-based nutrition tips, 
              healthy recipes, and wellness insights delivered to your inbox every Tuesday.
            </p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-sage-200 rounded-lg focus:border-sage-500 focus:ring-2 focus:ring-sage-200 focus:outline-none"
              />
              <Button>Subscribe</Button>
            </div>
            
            <p className="text-sm text-charcoal-500 mt-3">
              No spam, unsubscribe anytime. Privacy policy compliant.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
