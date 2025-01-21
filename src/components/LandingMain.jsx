import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

export default function LandingMain() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Transform Your Health Journey
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl">
            Experience precision tracking with AI-powered insights and beautiful visual analytics. 
            Take control of your nutrition like never before.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold text-white shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              Start Free Trial
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative z-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-[9/16] transform rotate-[3deg]">
              <div className="h-full flex flex-col p-4 space-y-4 bg-gradient-to-b from-indigo-950 to-violet-900">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-cyan-300">Today</span>
                  <span className="text-2xl font-bold text-blue-400">2,450 kcal</span>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl p-4 animate-pulse-slow">
                  <div className="h-full border-2 border-dashed border-cyan-500/30 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 px-6 bg-gradient-to-b from-indigo-950/50 to-violet-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-50">
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

      <section className="py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyan-100 mb-8">What Our Users Have to Say</h2>
          <p className="text-cyan-100 max-w-2xl mx-auto">
            "CalorieTracker helped me achieve my health goals with precision and ease. The insights are incredibly useful!"
            <br />
            <span className="text-cyan-300 font-semibold">- Happy User</span>
          </p>
        </div>
      </section>
    </section>
  );
}