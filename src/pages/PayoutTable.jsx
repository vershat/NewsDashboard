import React from "react";

const PayoutTable = () => {
  const handleSavePayout = () => {
    console.log("Save Payout clicked");
  };

  const handleExportPDF = () => {
    console.log("Export PDF clicked");
  };

  const handleExportCSV = () => {
    console.log("Export CSV clicked");
  };

  const handleExportToGoogleSheets = () => {
    console.log("Export to Google Sheets clicked");
  };

  return (
    <div className="p-8 font-sans">
      <h2 className="text-center text-2xl font-bold mb-6">Manage Payouts</h2>
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Dashboard
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          News
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Layouts
        </button>
      </div>
      <hr className="mb-6" />
      <h3 className="text-center text-xl font-semibold mb-4">PAYOUT TABLE</h3>
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200 px-4 py-2 text-center">
              Author
            </th>
            <th className="border border-gray-300 bg-gray-200 px-4 py-2 text-center">
              Articles Count
            </th>
            <th className="border border-gray-300 bg-gray-200 px-4 py-2 text-center">
              Rate
            </th>
            <th className="border border-gray-300 bg-gray-200 px-4 py-2 text-center">
              Total Payout
            </th>
            <th className="border border-gray-300 bg-gray-200 px-4 py-2 text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center bg-gray-100"></td>
            <td className="border border-gray-300 px-4 py-2 text-center bg-gray-100"></td>
            <td className="border border-gray-300 px-4 py-2 text-center bg-gray-100"></td>
            <td className="border border-gray-300 px-4 py-2 text-center bg-gray-100"></td>
            <td className="border border-gray-300 px-4 py-2 text-center bg-gray-100"></td>
          </tr>
        </tbody>
      </table>
      <div className="mb-6">
        <strong>Total Payout:</strong> _____
      </div>
      <div className="flex justify-between">
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={handleSavePayout}
        >
          Save Payout
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={handleExportPDF}
        >
          Export PDF
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={handleExportCSV}
        >
          Export CSV
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={handleExportToGoogleSheets}
        >
          Export to Google Sheets
        </button>
      </div>
    </div>
  );
};

export default PayoutTable;
