import React from 'react';

export default function HeroSection({ navigate }) {
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
          <div className="relative z-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-[9/16] transform rotate-[3deg]">
              <div className="h-full flex flex-col p-4 space-y-4 bg-gradient-to-b from-primary-700 to-primary-800">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary-300">Today</span>
                  <span className="text-2xl font-bold text-primary-400">2,450 kcal</span>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl p-4 animate-pulse-slow">
                  <div className="h-full border-2 border-dashed border-primary-500/30 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}