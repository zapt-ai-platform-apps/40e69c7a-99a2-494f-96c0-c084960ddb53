import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
      <div className="mb-6 text-6xl transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-cyan-50">{title}</h3>
      <p className="text-cyan-100 opacity-90">{description}</p>
    </div>
  );
}