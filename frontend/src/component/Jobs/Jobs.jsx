import { MdOutlineSchedule } from "react-icons/md"; 
import { HiOutlineUsers } from "react-icons/hi"; 
import { useEffect } from "react";
import { request } from "../../Utility/axios_helper";

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
    return(
        <>
        <div className="ml-8 mt-12">
        <span className="font-semibold"> Your Jobs</span> 
        <JobsCard JobName="step"/>
        </div>
        </>
    )
}