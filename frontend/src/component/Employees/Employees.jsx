import { useState, useEffect } from "react";
import axios from "axios";

export const Employees = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const token = localStorage.getItem("jwt");
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="bg-black text-white p-6 h-screen">
            <div className="flex justify-start mb-6">
                <h1 className="text-4xl font-semibold">Employees</h1>
            </div>
            <table className="min-w-full table-auto"/>
            <thead>
            <tr className="border-b ">
            <th className="px-4 py-2">Employee Id</th>
            <th className="px-4 py-2">Employee Name</th>
            <th className="px-4 py-2">Employee Pin</th>
            </tr>
            </thead>
            <tbody>
            
            
                {employees.map((employee) => (
                                           
                    <>
                            <tr key={employee.id} className="border-b">
                                <td className="px-4 py-2">{employee.id}</td>
                                <td className="px-4 py-2">{employee.employeeName}</td>
                                <td className="px-4 py-2">{employee.employeePin}</td>
                            </tr>   
                            <tr key={employee.id} className="border-b">
                                <td className="px-4 py-2">{employee.id}</td>
                                <td className="px-4 py-2">{employee.employeeName}</td>
                                <td className="px-4 py-2">{employee.employeePin}</td>
                            </tr>  
                                        
                    </>

                ))}
            
            </tbody>
        </div>
    );
};
