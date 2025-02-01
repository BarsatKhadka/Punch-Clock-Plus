import { MdOutlineSchedule } from "react-icons/md"; 
import { HiOutlineUsers } from "react-icons/hi"; 
import { useEffect , useState } from "react";
import axios from "axios";

const JobsCard = (props) => {
    return (
        <div className="bg-white text-black p-3 rounded-2xl shadow-md flex flex-col gap-2 mt-8">
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



export const Jobs = () =>{
    const[allJobs,setAllJobs] = useState([])

    const getAllJobs = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const token = sessionStorage.getItem("jwt");

        const result = await axios.get(backendUrl+"/job/getAllJobs",
             {headers: {
            "Authorization": token ? `Bearer ${token}` : "",
        }});
    
        setAllJobs(result?.data);
        console.log(result.data)
    };

    useEffect(() =>{
        getAllJobs()
    },[])

    return(
        <>
        <div className="ml-8 mt-12">
        <span className="font-semibold"> Your Jobs</span> 
        {allJobs.length > 0 ? (
                    allJobs.map((job,index) => {
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
        </>
    )
}