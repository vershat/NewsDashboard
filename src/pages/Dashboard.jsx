import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleExportReports = () => {
    navigate('/export-functionality');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {}
      <header className="flex items-center justify-between bg-gray-300 p-4 rounded-md shadow-sm">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div className="space-x-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Dashboard
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            News
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Layouts
          </button>
        </div>
      </header>

      {/* Overview Section */}
      <section className="mt-6 bg-gray-300 p-4 rounded-md shadow-sm">
        <h2 className="text-lg font-medium mb-4">Overview Section</h2>
        <div className="flex space-x-6">
          <div>Total Articles: <span className="font-bold">10</span></div>
          <div>Total Blogs: <span className="font-bold">XX</span></div>
          <div>Total Payouts: <span className="font-bold">$XX</span></div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="mt-6 bg-gray-300 p-4 rounded-md shadow-sm">
        <h2 className="text-lg font-medium mb-4">Chart Section</h2>
        <div className="flex flex-col space-y-4">
          <div>Articles by Author - <span className="font-bold">Bar Chart</span></div>
          <div>Articles by Type - <span className="font-bold">Pie Chart</span></div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mt-6 bg-gray-300 p-4 rounded-md shadow-sm">
        <h2 className="sr-only">Quick Links</h2>
        <div className="flex space-x-4">
          <button className="border border-black px-4 py-2 rounded-md hover:bg-gray-400">
            Quick Links
          </button>
          <button className="border border-black px-4 py-2 rounded-md hover:bg-gray-400">
            View News
          </button>
          <button className="border border-black px-4 py-2 rounded-md hover:bg-gray-400">
            Manage Payouts
          </button>
          <button
            className="border border-black px-4 py-2 rounded-md hover:bg-gray-400"
            onClick={handleExportReports}
          >
            Export Reports
          </button>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="mt-6 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Welcome to the Dashboard</h2>
        {/* Export Reports Button */}
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          onClick={handleExportReports}
        >
          Export Reports
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
