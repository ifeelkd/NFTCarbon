import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-4">CarbonNFT</h3>
            <p className="text-gray-600">
              Revolutionizing carbon offsetting through blockchain technology and NFTs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 CarbonNFT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;