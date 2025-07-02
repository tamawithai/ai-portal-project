
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center">
            Made with <Heart className="mx-1 text-red-500" size={16} fill="currentColor" /> © tamawith.ai 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
