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
                        className="ml-[200px] lg:ml-[600px] bg-black text-white px-4 py-2 rounded-lg hover:bg-green-500 transition duration-200"
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
            </div>
        </>
    );
};
