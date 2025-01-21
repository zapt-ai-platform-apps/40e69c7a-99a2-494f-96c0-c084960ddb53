import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
          CalorieTracker
        </span>
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}