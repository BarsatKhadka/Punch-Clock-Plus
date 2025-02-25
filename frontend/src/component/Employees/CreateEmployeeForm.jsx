import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CreateEmployeeForm = ({ onEmployeeCreated }) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeePin, setEmployeePin] = useState('');
  const [jobName, setJobName] = useState('');
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("jwt");
      
      const response = await axios.get(
        `${backendUrl}/job/getAllJobs`,
        {
          headers: {
            "Authorization": token ? `Bearer ${token}` : "",
          },
        }
      );
      
      setJobs(response.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("jwt");
      
      const response = await axios.post(
        `${backendUrl}/employee/create`,
        {
          employeeName,
          employeePin: parseInt(employeePin),
          jobName
        },
        {
          headers: {
            "Authorization": token ? `Bearer ${token}` : "",
          },
        }
      );
      
      setSuccess("Employee created successfully!");
      setEmployeeName('');
      setEmployeePin('');
      setJobName('');
      
      if (onEmployeeCreated) {
        onEmployeeCreated();
      }
    } catch (err) {
      setError(err.response?.data || "Failed to create employee. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create New Employee</h2>
      
      {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
      {success && <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="employeeName">
            Employee Name
          </label>
          <input
            id="employeeName"
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="employeePin">
            Employee PIN
          </label>
          <input
            id="employeePin"
            type="number"
            value={employeePin}
            onChange={(e) => setEmployeePin(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="jobName">
            Job
          </label>
          <select
            id="jobName"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a job</option>
            {jobs.map((job, index) => (
              <option key={index} value={job.jobName}>
                {job.jobName}
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 text-white rounded ${
            loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {loading ? 'Creating...' : 'Create Employee'}
        </button>
      </form>
    </div>
  );
}; home