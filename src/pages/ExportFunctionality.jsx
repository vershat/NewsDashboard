import React, { useState } from 'react';

const ExportFunctionality = () => {
  const [exportHistory, setExportHistory] = useState([]);

  const handleExport = (format) => {
    const date = new Date().toLocaleDateString('en-US');
    const filename = `Export_${format}_${date.replace(/\//g, '-')}.${format}`;
    setExportHistory([...exportHistory, { filename, date }]);
    alert(`Exported data as ${format.toUpperCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      {/* Header */}
      <div className="flex justify-between items-center bg-purple-200 p-4 rounded-md shadow-md">
        <h1 className="text-lg font-bold">Export Functionality</h1>
      </div>

      {/* Export Options */}
      <div className="mt-6 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Export Options</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={() => handleExport('pdf')}
          >
            Export as PDF
          </button>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={() => handleExport('csv')}
          >
            Export as CSV
          </button>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={() => handleExport('sheets')}
          >
            Export to Google Sheets
          </button>
        </div>

        {/* Export History */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Export History</h4>
          {exportHistory.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {exportHistory.map((entry, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md">
                  {entry.filename} - Exported on {entry.date}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-600">No exports yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExportFunctionality;
