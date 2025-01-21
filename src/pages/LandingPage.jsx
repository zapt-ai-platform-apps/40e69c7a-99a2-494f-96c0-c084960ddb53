import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div className="h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white text-gray-900">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-700 drop-shadow">Calorie Tracker</h1>
      <p className="text-lg mb-6 max-w-lg text-center text-gray-700">
        Keep track of your daily calorie intake to stay on top of your health goals.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium shadow transition-all duration-200 cursor-pointer"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md font-medium shadow transition-all duration-200 cursor-pointer"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}