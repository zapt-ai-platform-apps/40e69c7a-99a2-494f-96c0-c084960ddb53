import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import FeatureCard from '../components/FeatureCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session) {
        navigate('/dashboard');
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-violet-900 text-primary-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://supabase.zapt.ai/storage/v1/render/image/public/pattern.svg')] bg-[length:120px_120px] animate-pan"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
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
                {/* Interactive demo mockup */}
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
      </section>

      {/* Features Section */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}