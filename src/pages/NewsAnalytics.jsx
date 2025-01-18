import React from "react";
import { useNavigate } from "react-router-dom";

const NewsAnalytics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      {/* Header */}
      <header className="flex justify-between items-center bg-purple-200 p-4 rounded-md shadow-md">
        <h1 className="text-lg font-bold">News Analytics</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/payouts")}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Payouts
          </button>
          <button
            onClick={() => navigate("/news-analytics")}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            News
          </button>
        </div>
      </header>

      {/* Analytics Charts Section */}
      <div className="mt-6 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Analytics Charts</h2>
        <ul className="space-y-2 mb-6">
          <li>Line chart: Articles Trends over time</li>
          <li>Bar chart: Articles By Author</li>
          <li>Pie charts: Distribution of News VS Blogs</li>
        </ul>

        {/* Filters Section */}
        <div className="bg-gray-100 p-4 rounded-md shadow-inner">
          <h3 className="font-semibold mb-4">Filters for Charts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Author:</option>
              <option>Author 1</option>
              <option>Author 2</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Date Range:</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Type:</option>
              <option>News</option>
              <option>Blogs</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Apply
            </button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
              Reset
            </button>
          </div>
        </div>

        {/* Export Button */}
        <div className="mt-4">
          <button className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
            Export Chart Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsAnalytics;
