import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { ValuePropositions } from '../sections/ValuePropositions';
import { ServicesOverview } from '../sections/ServicesOverview';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { AboutPreview } from '../sections/AboutPreview';
import { CTASection } from '../sections/CTASection';
import { StatsSection } from '../sections/StatsSection';

export function Homepage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositions />
      <AboutPreview />
      <ServicesOverview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
