import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300">
          <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent font-semibold">
            Crafted with ❤️ on ZAPT
          </span>
        </a>
      </div>
    </footer>
  );
}