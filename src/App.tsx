import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

// Route-based code splitting for pages
const Homepage = lazy(() => import('./components/pages/Homepage').then(m => ({ default: m.Homepage })));
const About = lazy(() => import('./components/pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./components/pages/Services').then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import('./components/pages/Testimonials').then(m => ({ default: m.Testimonials })));
const Blog = lazy(() => import('./components/pages/Blog').then(m => ({ default: m.Blog })));
const ArticlePage = lazy(() => import('./components/pages/ArticlePage').then(m => ({ default: m.ArticlePage })));
const Contact = lazy(() => import('./components/pages/Contact').then(m => ({ default: m.Contact })));
const BookingPage = lazy(() => import('./components/pages/BookingPage').then(m => ({ default: m.BookingPage })));
const AdminDashboard = lazy(() => import('./components/pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./components/pages/TermsOfService').then(m => ({ default: m.TermsOfService })));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-ivory-200 font-poppins">
          <ScrollToTop />
          <Header />
          <main id="main-content" className="flex-1">
            <Suspense fallback={
              <div className="p-8 text-center text-charcoal-600" role="status" aria-live="polite">
                <span className="sr-only">Loading page content...</span>
                Loading...
              </div>
            }>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/resources" element={<Blog />} />
                <Route path="/resources/:id" element={<ArticlePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book-consultation" element={<BookingPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;