import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';

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
    <div className="min-h-screen bg-gradient-to-br from-primary-700 to-primary-800 text-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://supabase.zapt.ai/storage/v1/render/image/public/pattern.svg')] bg-[length:120px_120px] animate-pan"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>

      <Navbar />

      <HeroSection navigate={navigate} />

      <FeaturesSection />

      <Footer />
    </div>
  );
}