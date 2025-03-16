import React from 'react';
import { ArrowRight, TreePine, AlignCenterVertical as Certificate, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Transform Your Carbon Footprint into
          <span className="text-emerald-600"> Digital Assets</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Purchase, trade, and track carbon offset certificates as NFTs while making a real impact on the environment.
        </p>
        <Link
          to="/marketplace"
          className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Explore Marketplace
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <TreePine className="h-12 w-12 text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Verified Projects</h3>
          <p className="text-gray-600">
            Support carefully vetted environmental projects with real-world impact.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <Certificate className="h-12 w-12 text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">NFT Certificates</h3>
          <p className="text-gray-600">
            Own unique digital certificates representing your carbon offset contributions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <Globe className="h-12 w-12 text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
          <p className="text-gray-600">
            Join a worldwide community committed to environmental sustainability.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white rounded-xl shadow-md p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-bold text-emerald-600 mb-2">50K+</h4>
            <p className="text-gray-600">Carbon Credits Issued</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-emerald-600 mb-2">1000+</h4>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-emerald-600 mb-2">25+</h4>
            <p className="text-gray-600">Environmental Projects</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;