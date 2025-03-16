import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingBag, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-600">CarbonNFT</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/marketplace" className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600">
              <ShoppingBag className="h-5 w-5" />
              <span>Marketplace</span>
            </Link>
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;