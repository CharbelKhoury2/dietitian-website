import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If already on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on different page, navigate to homepage
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src="/profile-logo.svg" alt="Dr. Myriam" className="w-full h-full object-cover" width={40} height={40} decoding="async" />
            </div>
            <div>
              <span className="text-xl font-poppins font-bold text-charcoal-900">
                Dr. Myriam
              </span>
              <span className="text-sm text-coral-600 block leading-tight">
                Nutrition Made Simple
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-sage-600 ${
                  location.pathname === item.href
                    ? 'text-sage-600'
                    : 'text-charcoal-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+96103345531"
              className="flex items-center text-sm text-charcoal-600 hover:text-sage-600 transition-colors"
              aria-label="Call Dr. Myriam at +961 03 345 531"
            >
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              +961 03 345 531
            </a>
            <Button
              to="/book-consultation"
              className="flex items-center"
              size="sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={handleToggleMenu}
            className="lg:hidden p-2 rounded-md text-charcoal-700 hover:text-sage-600 hover:bg-sage-50 transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-sage-100 z-50" 
            ref={menuRef}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    location.pathname === item.href
                      ? 'text-sage-600 bg-sage-50'
                      : 'text-charcoal-700 hover:text-sage-600 hover:bg-sage-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile CTA Section */}
            <div className="px-4 py-4 border-t border-sage-100 space-y-3">
              <a
                href="tel:+96103345531"
                className="flex items-center text-sm text-charcoal-600 hover:text-sage-600"
              >
                <Phone className="w-4 h-4 mr-3" />
                +961 03 345 531
              </a>
              <Button
                to="/book-consultation"
                className="w-full flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
                size="sm"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}