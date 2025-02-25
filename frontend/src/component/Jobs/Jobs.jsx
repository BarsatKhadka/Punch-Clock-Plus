import { MdOutlineSchedule } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";

const JobsCard = ({ JobName, JobDescription }) => {
    return (
        <div className="bg-white text-black p-3 rounded-2xl shadow-md flex flex-col gap-2 mt-8 mb-4 border-black border-2">
            <span className="text-md font-semibold">{JobName}</span>
            <p className="text-sm text-gray-600">{JobDescription}</p>
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
    const [currentPage, setCurrentPage] = useState(1);
    const[error, setError] = useState("");
    const jobsPerPage = 5;

    const getAllJobs = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const token = localStorage.getItem("jwt");

        const result = await axios.get(backendUrl + "/job/getAllJobs", {
            headers: {
                "Authorization": token ? `Bearer ${token}` : "",
            },
        });

        setAllJobs(result?.data);
    };

    const handleCreateJob = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const token = localStorage.getItem("jwt");

        try {
            const result = await axios.post(
                backendUrl + "/job/create",
                { jobName, jobDescription },
                {
                    headers: {
                        "Authorization": token ? `Bearer ${token}` : "",
                    },
                }
            );
            if(result?.data == "duplicate"){
                setError(result.data)
                return;
            }

            setAllJobs(prevJobs => [...prevJobs, result.data]);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error creating job:", error);
        }
    };

    useEffect(() => {
        getAllJobs();
    }, []);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = allJobs.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="ml-8 mt-12">
                <span className="font-semibold">Your Jobs
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="ml-[200px] lg:ml-[600px] bg-white text-black px-4 py-2 rounded-lg hover:bg-green-500 transition duration-200"
                    >
                        Create Job
                    </button>
                </span>

                {currentJobs.length > 0 ? (
                    currentJobs.map((job, index) => (
                        <JobsCard key={index} JobName={job.jobName} JobDescription={job.jobDescription} />
                    ))
                ) : (
                    <p>No jobs available</p>
                )}

                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(allJobs.length / jobsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`px-3 py-1 mx-1 rounded-lg border-2 border-solid border-black ${currentPage === i + 1 ? 'bg-green-600 text-white' : 'bg-blue-500 text-black'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="font-semibold text-lg mb-4 text-black">Create New Job </h3>
                        {error && <p className="text-red-500 text-sm mb-2">{error === "duplicate" ? "This job already exists!" : "An error occurred. Please try again."}</p>}
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
            </div>
        </>
    );
};
