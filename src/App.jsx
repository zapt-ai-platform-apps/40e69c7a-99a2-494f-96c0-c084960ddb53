import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-primary-50 text-primary-900 font-body flex flex-col justify-between">
      <div className="h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer className="p-6 text-center text-primary-500 text-sm">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 transition-colors duration-300">
          Crafted with care on ZAPT
        </a>
      </footer>
    </div>
  );
}