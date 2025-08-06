import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Homepage } from './components/pages/Homepage';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Testimonials } from './components/pages/Testimonials';
import { Blog } from './components/pages/Blog';
import { Contact } from './components/pages/Contact';
import { BookingPage } from './components/pages/BookingPage';
import { AdminDashboard } from './components/pages/AdminDashboard';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory-200 font-opensans">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/resources" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<BookingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;