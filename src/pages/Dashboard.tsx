import React from 'react';
import { BarChart, Wallet, History, Award } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Total Credits</h3>
            <BarChart className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold">250</p>
          <p className="text-sm text-gray-500 mt-2">+15% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Portfolio Value</h3>
            <Wallet className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold">$5,250</p>
          <p className="text-sm text-gray-500 mt-2">Current market value</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Carbon Offset</h3>
            <Award className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold">125t</p>
          <p className="text-sm text-gray-500 mt-2">CO₂ equivalent</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Transactions</h3>
            <History className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Project</th>
                  <th className="text-left py-3 px-4">Credits</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Amazon Conservation</td>
                  <td className="py-3 px-4">50</td>
                  <td className="py-3 px-4">$125.00</td>
                  <td className="py-3 px-4">Mar 15, 2024</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Wind Farm Project</td>
                  <td className="py-3 px-4">25</td>
                  <td className="py-3 px-4">$62.50</td>
                  <td className="py-3 px-4">Mar 12, 2024</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Solar Initiative</td>
                  <td className="py-3 px-4">75</td>
                  <td className="py-3 px-4">$187.50</td>
                  <td className="py-3 px-4">Mar 10, 2024</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;