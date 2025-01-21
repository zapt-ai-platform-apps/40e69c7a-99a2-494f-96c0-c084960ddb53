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
    <div className="min-h-screen bg-primary-900 text-primary-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle pattern / shape overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://supabase.zapt.ai/storage/v1/render/image/public/pattern.svg')] bg-cover bg-center"></div>
      <div className="z-10 text-center px-6">
        <h1 className="text-7xl font-heading font-bold tracking-tight mb-8">
          Calorie Tracker
        </h1>
        <p className="mb-10 text-2xl max-w-2xl mx-auto leading-relaxed font-body">
          Revolutionize your health journey with a visually striking and intuitive way to track your daily calorie intake.
        </p>
        <button
          className="cursor-pointer bg-primary-50 text-primary-900 font-heading px-10 py-4 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 premium-hover"
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}