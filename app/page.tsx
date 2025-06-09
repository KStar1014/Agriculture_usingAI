'use client';

import Navigation from '@/app/components/Navigation';
import Hero from '@/app/components/Hero';
import TrustPartners from '@/app/components/TrustPartners';
import ModernFarming from '@/app/components/ModernFarming';
import ProductDeals from '@/app/components/ProductDeals';
import Features from '@/app/components/Features';
import AIFeatures from '@/app/components/AIFeatures';
import Story from '@/app/components/Story';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import ChatbotIcon from '@/app/components/ChatbotIcon';
import ContactSection from '@/app/components/ContactSection';
import MagicAI from '@/app/components/MagicAI';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustPartners />
      <ProductDeals />
      <ModernFarming />
      <AIFeatures />
      <MagicAI />
      {/* <Features /> */}
      <Story />
      <CTA />
      <ContactSection />
      <Footer />
      <ChatbotIcon />
    </div>
  );
}