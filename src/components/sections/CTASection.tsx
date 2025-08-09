import React from 'react';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-sage-600 to-sage-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl lg:text-2xl text-sage-100 mb-8 leading-relaxed">
            Take the first step toward a healthier, more confident you. 
            Book your free 15-minute discovery call and let's discuss your goals.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-sage-200 mb-3">✨</div>
              <h3 className="font-semibold mb-2">Personalized Plan</h3>
              <p className="text-sm text-sage-200">Tailored to your unique needs and lifestyle</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-sage-200 mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-sage-200">95% success rate with lasting transformations</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-sage-200 mb-3">💚</div>
              <h3 className="font-semibold mb-2">Ongoing Support</h3>
              <p className="text-sm text-sage-200">Compassionate guidance every step of the way</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              to="/book-consultation"
              size="xl"
              className="bg-white text-sage-700 hover:bg-sage-50 shadow-lg hover:shadow-xl group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Book Free Discovery Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="tel:+96103345531"
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-sage-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +961 03 345 531
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sage-200">
            <span className="text-sm">✓ HIPAA Compliant</span>
            <span className="text-sm">✓ Insurance Accepted</span>
            <span className="text-sm">✓ Licensed & Certified</span>
            <span className="text-sm">✓ 500+ Success Stories</span>
          </div>

          {/* Special Offer */}
          <div className="mt-8 bg-coral-500/20 backdrop-blur-sm border border-coral-300/30 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Limited Time Offer
              </div>
            </div>
            <p className="text-sage-100 mb-4">
              New clients receive <strong className="text-white">20% off</strong> their first consultation package 
              when you book before the end of this month.
            </p>
            <p className="text-sm text-sage-200">
              Use code: TRANSFORM20 • Expires in 15 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}