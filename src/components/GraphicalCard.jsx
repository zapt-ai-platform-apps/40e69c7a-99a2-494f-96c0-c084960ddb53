import React from 'react';

export default function GraphicalCard() {
  return (
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
  );
}