import { useState, useEffect } from "react";
import axios from "axios";
import { CreateEmployeeForm } from "./CreateEmployeeForm";

export const Employees = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const token = localStorage.getItem("jwt");
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const getAllEmployees = async () => {
        try {
            const result = await axios.get(backendUrl + "/employee/getAllEmployees", {
                headers: {
                    "Authorization": token ? `Bearer ${token}` : "",
                },
            });
            setEmployees(result.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching employees", error);
            setError("Failed to fetch employees. Please try again later.");
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllEmployees();
    }, []);

    if (loading) {
        return <div className="bg-black text-white p-6 h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="bg-black text-white p-6 h-screen">{error}</div>;
    }

    return (
        <div className="bg-black text-white p-6 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-semibold">Employees</h1>
                <button 
                    onClick={() => setShowCreateForm(!showCreateForm)}
                    className={`px-4 py-2 rounded ${showCreateForm ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                >
                    {showCreateForm ? 'Cancel' : 'Add Employee'}
                </button>
            </div>
            
            {showCreateForm && (
                <div className="mb-8">
                    <CreateEmployeeForm 
                        onEmployeeCreated={() => {
                            getAllEmployees();
                            setShowCreateForm(false);
                        }} 
                    />
                </div>
            )}
            
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="px-4 py-2 text-left">Employee ID</th>
                            <th className="px-4 py-2 text-left">Employee Name</th>
                            <th className="px-4 py-2 text-left">Employee PIN</th>
                            <th className="px-4 py-2 text-left">Job</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id} className="border-b border-gray-700">
                                <td className="px-4 py-2">{employee.id}</td>
                                <td className="px-4 py-2">{employee.employeeName}</td>
                                <td className="px-4 py-2">{employee.employeePin}</td>
                                <td className="px-4 py-2">{employee.jobEntity?.jobName || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
