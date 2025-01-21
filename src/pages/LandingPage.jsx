import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Calorie Tracker</h1>
      <p className="text-lg mb-6 max-w-md text-center">
        Keep track of your daily calorie intake to stay on top of your health goals.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}