import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Homepage } from './components/pages/Homepage';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Testimonials } from './components/pages/Testimonials';
import { Blog } from './components/pages/Blog';
import { ArticlePage } from './components/pages/ArticlePage';
import { Contact } from './components/pages/Contact';
import BookingPage from './components/pages/BookingPage';
import { AdminDashboard } from './components/pages/AdminDashboard';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsOfService } from './components/pages/TermsOfService';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory-200 font-poppins">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
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
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;