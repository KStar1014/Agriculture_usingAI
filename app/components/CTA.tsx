'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-green-100 leading-relaxed">
            Join thousands of farmers who are already using AI to increase yields, reduce costs, 
            and build sustainable agricultural practices for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-green-800 hover:bg-white hover:text-green-600 px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 