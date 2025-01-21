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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute -inset-0 bg-[url('https://supabase.zapt.ai/storage/v1/render/image/public/pattern.svg')] bg-cover bg-center opacity-10"></div>
      
      <div className="z-10 text-center px-6">
        <h1 className="text-7xl font-bold tracking-tight mb-8 drop-shadow-xl animate-bounce">
          Calorie Tracker
        </h1>
        <p className="mb-10 text-2xl max-w-2xl mx-auto leading-relaxed">
          Revolutionize your health journey with a visually stunning and intuitive way to track your daily calorie intake.
        </p>

        <button
          className="bg-white text-teal-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-100 hover:-translate-y-1 transform transition duration-300 cursor-pointer"
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}