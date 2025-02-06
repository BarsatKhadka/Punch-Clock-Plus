import React from 'react';

export const PunchCardHome = () => {
  return (
    <div className="w-80 p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-50 text-center mt-8 ml-8">
      <h2 className="text-xl font-semibold mb-4">Punch Card</h2>
      <div className="mb-6 text-gray-700">
        <p>Please punch in or out</p>
      </div>
      <div className="flex justify-between">
        <button className="w-32 py-3 px-4 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-300">
          Punch In
        </button>
        <button className="w-32 py-3 px-4 text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300">
          Punch Out
        </button>
      </div>
    </div>
  );
};
