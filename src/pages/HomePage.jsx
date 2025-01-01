import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomePage = () => {
  const [data, setData] = useState([]); // All news and articles
  const [filteredData, setFilteredData] = useState([]); // Filtered news and articles
  const [filter, setFilter] = useState({
    author: "",
    startDate: null,
    endDate: null,
    type: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const API_KEY = "9a9f8d1da79845c0a21806ab886169e9";
  const url = "https://newsapi.org/v2/everything?q=";

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}technology&apiKey=${API_KEY}`);
        setData(response.data.articles);
        setFilteredData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please check the API and try again.");
      }
    };

    fetchData();
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  // Apply filters
  const applyFilter = () => {
    let filtered = data;

    if (filter.author) {
      filtered = filtered.filter((item) =>
        item.author?.toLowerCase().includes(filter.author.toLowerCase())
      );
    }

    if (filter.startDate) {
      filtered = filtered.filter(
        (item) =>
          new Date(item.publishedAt) >= new Date(filter.startDate)
      );
    }

    if (filter.endDate) {
      filtered = filtered.filter(
        (item) => new Date(item.publishedAt) <= new Date(filter.endDate)
      );
    }

    if (filter.type) {
      filtered = filtered.filter((item) =>
        filter.type === "news"
          ? !item.content?.includes("blog")
          : item.content?.includes("blog")
      );
    }

    setFilteredData(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setFilter({
      author: "",
      startDate: null,
      endDate: null,
      type: "",
    });
    setFilteredData(data);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className="self-end m-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-full shadow-md"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Sidebar for filters */}
          <aside className="w-full md:w-1/4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Filters
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Author:
                <input
                  type="text"
                  name="author"
                  value={filter.author}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Start Date:
              </label>
              <DatePicker
                selected={filter.startDate}
                onChange={(date) => setFilter({ ...filter, startDate: date })}
                className="w-full mt-1 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                End Date:
              </label>
              <DatePicker
                selected={filter.endDate}
                onChange={(date) => setFilter({ ...filter, endDate: date })}
                className="w-full mt-1 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Type:
                <select
                  name="type"
                  value={filter.type}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                >
                  <option value="">All</option>
                  <option value="news">News</option>
                  <option value="blog">Blog</option>
                </select>
              </label>
            </div>
            <div className="flex gap-2">
              <button
                onClick={applyFilter}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700"
              >
                Apply
              </button>
              <button
                onClick={resetFilters}
                className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-md hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-300"
              >
                Reset
              </button>
            </div>
          </aside>

          {/* News articles */}
          <main className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              News and Articles
            </h2>
            {filteredData.length === 0 ? (
              <p className="text-gray-700 dark:text-gray-300">No articles found.</p>
            ) : (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 dark:border-gray-600 pb-4 mb-4 last:border-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Author:</strong> {item.author || "Unknown"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Date:</strong> {new Date(item.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Source:</strong> {item.source.name}
                  </p>
                  <p className="text-gray-700 mt-2 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
