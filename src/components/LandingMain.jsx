import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import GraphicalCard from './GraphicalCard';
import Testimonials from './Testimonials';

export default function LandingMain() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Transform Your Health Journey
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Experience precision tracking with AI-powered insights and beautiful visual analytics. 
            Take control of your nutrition like never before.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-lg font-semibold text-white shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              Start Free Trial
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <GraphicalCard />
        </div>
      </div>

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

      <Testimonials />
    </section>
  );
}