import React, { useState } from 'react';
import { Search, Filter, Clock, User, ArrowRight, Download, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'weight-loss', name: 'Weight Management', count: 8 },
    { id: 'medical', name: 'Medical Nutrition', count: 6 },
    { id: 'sports', name: 'Sports Nutrition', count: 4 },
    { id: 'recipes', name: 'Healthy Recipes', count: 6 }
  ];

  const articles = [
    {
      id: 1,
      title: '10 Evidence-Based Strategies for Sustainable Weight Loss',
      excerpt: 'Discover science-backed methods for losing weight and keeping it off long-term, without restrictive dieting or extreme measures.',
      author: 'Sarah Chen, RD',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'weight-loss',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      featured: true
    },
    {
      id: 2,
      title: 'Managing Diabetes Through Nutrition: A Complete Guide',
      excerpt: 'Learn how to effectively manage blood sugar levels through strategic meal planning and smart food choices.',
      author: 'Sarah Chen, RD',
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
      author: 'Sarah Chen, RD',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'sports',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      featured: true
    },
    {
      id: 4,
      title: 'Heart-Healthy Mediterranean Bowl Recipe',
      excerpt: 'A delicious, nutrient-packed bowl that supports cardiovascular health and tastes amazing.',
      author: 'Sarah Chen, RD',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'recipes',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    },
    {
      id: 5,
      title: 'Understanding Food Labels: A Dietitian\'s Guide',
      excerpt: 'Learn to decode nutrition labels and make informed choices at the grocery store.',
      author: 'Sarah Chen, RD',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'weight-loss',
      image: 'https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg'
    },
    {
      id: 6,
      title: 'Anti-Inflammatory Foods for Chronic Disease Prevention',
      excerpt: 'Discover powerful foods that can help reduce inflammation and support overall health.',
      author: 'Sarah Chen, RD',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'medical',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    }
  ];

  const resources = [
    {
      title: 'Meal Planning Template',
      description: 'A comprehensive weekly meal planning template with shopping lists.',
      type: 'PDF Download',
      downloads: 1247
    },
    {
      title: 'Diabetes-Friendly Recipe Collection',
      description: '25 delicious recipes designed for blood sugar management.',
      type: 'Recipe Book',
      downloads: 892
    },
    {
      title: 'Sports Nutrition Timing Guide',
      description: 'When and what to eat before, during, and after workouts.',
      type: 'Quick Reference',
      downloads: 634
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-sage-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-inter font-bold text-charcoal-900 mb-6">
            Nutrition Resources & Blog
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
            Evidence-based nutrition articles, healthy recipes, and practical guides 
            to support your health journey. All content is written by registered dietitians.
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
                    ? 'bg-sage-600 text-white'
                    : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-12">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {articles.filter(article => article.featured).map((article, index) => (
              <article
                key={article.id}
                className={`group hover:scale-105 transition-all duration-300 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className={`w-full object-cover ${
                        index === 0 ? 'h-64 lg:h-80' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-sage-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                    <div className="flex items-center text-sm text-charcoal-500 mb-3">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{article.author}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className={`font-inter font-bold text-charcoal-900 mb-3 group-hover:text-sage-600 transition-colors ${
                      index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      {article.title}
                    </h3>
                    
                    <p className={`text-charcoal-600 mb-4 ${
                      index === 0 ? 'text-lg' : 'text-base'
                    }`}>
                      {article.excerpt}
                    </p>
                    
                    <Link
                      to={`/resources/${article.id}`}
                      className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium group"
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

      {/* All Articles */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-12">
            All Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="group">
                <div className="bg-ivory-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-charcoal-500 mb-3">
                      <span className="mr-4">{new Date(article.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-inter font-bold text-charcoal-900 mb-3 group-hover:text-sage-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-charcoal-600 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <Link
                      to={`/resources/${article.id}`}
                      className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 lg:py-20 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-inter font-bold text-charcoal-900 mb-4">
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
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mr-4">
                    <Download className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-charcoal-900">{resource.title}</h3>
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
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <BookOpen className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-2xl font-inter font-bold text-charcoal-900 mb-4">
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