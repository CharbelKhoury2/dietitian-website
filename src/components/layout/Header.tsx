import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
        handleCloseMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle menu animations
  useEffect(() => {
    if (isMenuOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 200);
    }
  }, [isMenuOpen]);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when menu is closed
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
              <img src="/profile-logo.svg" alt="Dr. Myriam" className="w-full h-full object-cover" />
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
            >
              <Phone className="w-4 h-4 mr-2" />
              +961 03 345 531
            </a>
            <Button
              as={Link}
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
            onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu}
            className="lg:hidden p-2 rounded-md text-charcoal-700 hover:text-sage-600 hover:bg-sage-50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer - Outside header container for proper z-index */}
      {isVisible && (
        <>
          {/* Backdrop */}
          <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[99998] transition-all duration-300 ease-in-out ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`} />
          
          {/* Drawer */}
          <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-[99999] transform transition-all duration-300 ease-out will-change-transform ${
             isAnimating ? 'translate-x-0' : 'translate-x-full'
           }`} ref={menuRef}>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-sage-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                      <img src="/profile-logo.svg" alt="Dr. Myriam" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-lg font-poppins font-bold text-charcoal-900">
                        Dr. Myriam
                      </span>
                      <span className="text-xs text-coral-600 block leading-tight">
                        Nutrition Made Simple
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseMenu}
                    className="p-2 rounded-md text-charcoal-700 hover:text-sage-600 hover:bg-sage-50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Navigation */}
                <nav className="flex-1 px-6 py-4 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-sage-600 bg-sage-50'
                          : 'text-charcoal-700 hover:text-sage-600 hover:bg-sage-50'
                      }`}
                      onClick={handleCloseMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                {/* Footer */}
                <div className="p-6 border-t border-sage-100 space-y-4">
                  <a
                    href="tel:+96103345531"
                    className="flex items-center text-sm text-charcoal-600 hover:text-sage-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-3" />
                    +961 03 345 531
                  </a>
                  <Button
                    as={Link}
                    to="/book-consultation"
                    className="w-full flex items-center justify-center"
                    onClick={handleCloseMenu}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
    </header>
  );
}