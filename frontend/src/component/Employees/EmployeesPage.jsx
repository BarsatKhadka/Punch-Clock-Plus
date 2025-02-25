import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CreateEmployeeForm } from './CreateEmployeeForm';

export const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("jwt");
      
      const response = await axios.get(
        `${backendUrl}/employee/getAllEmployees`,
        {
          headers: {
            "Authorization": token ? `Bearer ${token}` : "",
          },
        }
      );
      
      setEmployees(response.data);
      setError('');
    } catch (err) {
      console.error("Error fetching employees:", err);
      setError("Failed to load employees. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Employees Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Employee List</h2>
          
          {loading ? (
            <p>Loading employees...</p>
          ) : error ? (
            <div className="p-2 bg-red-100 text-red-700 rounded">{error}</div>
          ) : employees.length === 0 ? (
            <p>No employees found. Create your first employee!</p>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PIN
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Job
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {employee.employeeName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {employee.employeePin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {employee.jobEntity?.jobName || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        <div>
          <CreateEmployeeForm onEmployeeCreated={fetchEmployees} />
        </div>
      </div>
    </div>
  );
}; 