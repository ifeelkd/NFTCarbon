import React from 'react';
import { Filter, Search } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Amazon Rainforest Conservation",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
    price: "2.5",
    credits: "100",
    location: "Brazil"
  },
  {
    id: 2,
    title: "Wind Farm Development",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800",
    price: "1.8",
    credits: "75",
    location: "Denmark"
  },
  {
    id: 3,
    title: "Solar Energy Initiative",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
    price: "3.0",
    credits: "150",
    location: "Spain"
  }
];

const Marketplace = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Carbon Offset Marketplace</h1>
        <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
          <Filter className="h-5 w-5 mr-2" />
          Filter
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">Location: {project.location}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Price per credit</p>
                  <p className="text-lg font-semibold text-emerald-600">${project.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available credits</p>
                  <p className="text-lg font-semibold">{project.credits}</p>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                Purchase Credits
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;