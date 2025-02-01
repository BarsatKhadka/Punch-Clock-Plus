import { MdOutlineSchedule } from "react-icons/md"; 
import { HiOutlineUsers } from "react-icons/hi"; 
import { useEffect, useState } from "react";
import axios from "axios";

const JobsCard = (props) => {
    return (
        <div className="bg-white text-black p-3 rounded-2xl shadow-md flex flex-col gap-2 mt-8 mb-4">
            <span className="text-md font-semibold">{props.JobName}</span>
            <p className="text-sm text-gray-600">{props.JobDescription}</p>
            <div className="flex justify-end gap-2">
                <button className="bg-blue-500 text-black px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                    <MdOutlineSchedule className="inline mr-2 text-black" /> View Shifts
                </button>
                <button className="bg-green-500 text-black px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                    <HiOutlineUsers className="inline mr-2 text-black" /> View Employees
                </button>
            </div>
        </div>
    );
};

export const Jobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [jobName, setJobName] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const getAllJobs = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const token = sessionStorage.getItem("jwt");

        const result = await axios.get(backendUrl + "/job/getAllJobs", {
            headers: {
                "Authorization": token ? `Bearer ${token}` : "",
            },
        });

        setAllJobs(result?.data);
    };

    const handleCreateJob = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const token = sessionStorage.getItem("jwt");

        try {
            const result = await axios.post(
                backendUrl + "/job/create",
                {
                    "jobName":jobName,
                    "jobDescription":jobDescription,
                },
                {
                    headers: {
                        "Authorization": token ? `Bearer ${token}` : "",
                    },
                }
            );
            setAllJobs(prevJobs => [...prevJobs, result.data]);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error creating job:", error);
        }
    };

    useEffect(() => {
        getAllJobs();
    }, []);

    return (
        <>
            <div className="ml-8 mt-12">
                <span className="font-semibold">Your Jobs
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="ml-[200px] lg:ml-[600px] bg-black text-white px-4 py-2 rounded-lg hover:bg-green-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        Create Job
                    </button>
                </span>

                {allJobs.length > 0 ? (
                    allJobs.map((job, index) => {
                        return (
                            <JobsCard
                                key={index}
                                JobName={job.jobName}
                                JobDescription={job.jobDescription}
                            />
                        );
                    })
                ) : (
                    <p>No jobs available</p>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="font-semibold text-lg mb-4 text-black">Create New Job</h3>
                        <div>
                            <input
                                type="text"
                                placeholder="Job Name"
                                value={jobName}
                                onChange={(e) => setJobName(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 mb-4 w-full text-black"
                            />
                            <textarea
                                placeholder="Job Description"
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 mb-4 w-full text-black"
                            ></textarea>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreateJob}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                            >
                                Create Job
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
