import React from 'react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-primary-700/50 to-primary-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary-50">
          Why Choose CalorieTracker?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="📊"
            title="AI-Powered Insights"
            description="Get personalized recommendations based on your tracking history"
          />
          <FeatureCard
            icon="📅"
            title="Smart Trends"
            description="Visualize your progress with beautiful interactive charts"
          />
          <FeatureCard
            icon="🔒"
            title="Secure & Private"
            description="Bank-grade security protecting your health data"
          />
        </div>
      </div>
    </section>
  );
}