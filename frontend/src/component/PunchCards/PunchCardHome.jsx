import React, { useState } from 'react';
import axios from 'axios';

export const PunchCardHome = () => {
  const [employeePin, setEmployeePin] = useState('');
  const [jobName, setJobName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePunch = async (punchType) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const token = localStorage.getItem("jwt");

    try {
      const response = await axios.post(
        `${backendUrl}/punch/create`,
        {
          employeePin: parseInt(employeePin),
          jobName,
          punchType
        },
        {
          headers: {
            "Authorization": token ? `Bearer ${token}` : "",
          },
        }
      );

      setSuccess(`Successfully punched ${punchType.toLowerCase()}`);
      setError('');
      // Clear inputs after successful punch
      setEmployeePin('');
      setJobName('');
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
      setSuccess('');
    }
  };

  return (
    <div className="w-80 p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-50 text-center mt-8 ml-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Punch Card</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      
      <div className="mb-4">
        <input
          type="number"
          placeholder="Employee PIN"
          value={employeePin}
          onChange={(e) => setEmployeePin(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2 text-black"
        />
        <input
          type="text"
          placeholder="Job Name"
          value={jobName}
          onChange={(e) => setJobName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>
      
      <div className="flex justify-between">
        <button 
          onClick={() => handlePunch('IN')}
          className="w-32 py-3 px-4 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-300"
        >
          Punch In
        </button>
        <button 
          onClick={() => handlePunch('OUT')}
          className="w-32 py-3 px-4 text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300"
        >
          Punch Out
        </button>
      </div>
    </div>
  );
};
