import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

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
    <div className="min-h-screen bg-gradient-to-br from-primary-800 to-primary-950 text-primary-50 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://supabase.zapt.ai/storage/v1/render/image/public/pattern.svg')] bg-[length:120px_120px]"></div>
      <div className="z-10 text-center px-6 space-y-8">
        <h1 className="text-7xl font-heading font-bold tracking-tighter bg-gradient-to-r from-primary-100 to-primary-300 bg-clip-text text-transparent animate-float">
          Calorie Tracker
        </h1>
        <button
          className="group relative inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-b from-primary-100 to-primary-200 text-primary-900 font-semibold shadow-2xl shadow-primary-900/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          onClick={() => navigate('/login')}
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-primary-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </button>
      </div>
    </div>
  );
}