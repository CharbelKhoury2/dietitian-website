import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { NewsletterSignup } from '../features/NewsletterSignup';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Resources', href: '/resources' },
  ];

  const services = [
    { name: 'Weight Management', href: '/services#weight-management' },
    { name: 'Medical Nutrition Therapy', href: '/services#medical-nutrition' },
    { name: 'Sports Nutrition', href: '/services#sports-nutrition' },
    { name: 'Pediatric Nutrition', href: '/services#pediatric-nutrition' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/myriam_nutritips', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/dr-myriam-nutrition', icon: Linkedin },
    { name: 'Facebook', href: 'https://facebook.com/dr.myriam.nutrition', icon: Facebook },
  ];

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/profile-logo.svg" alt="Dr. Myriam" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xl font-poppins font-bold">Dr. Myriam</span>
                <span className="text-sm text-coral-300 block leading-tight">
                  Nutrition Made Simple
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Helping you ditch diet culture and build a healthy relationship with food 
              that actually lasts. Real nutrition advice, zero judgment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="tel:+96133455331"
                className="flex items-center text-sm text-gray-300 hover:text-sage-400 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +961 03 345 531
              </a>
              <a
                href="mailto:hello@drmyriam.com"
                className="flex items-center text-sm text-gray-300 hover:text-sage-400 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                hello@drmyriam.com
              </a>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Lebanon
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-sage-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-sage-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/book-consultation"
                  className="text-sage-400 hover:text-sage-300 transition-colors text-sm font-medium"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-sage-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get weekly nutrition tips and recipes delivered to your inbox.
            </p>
            <NewsletterSignup />
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-sage-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dr. Myriam. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-sage-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-sage-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <span className="text-gray-400 text-sm">
                HIPAA Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}