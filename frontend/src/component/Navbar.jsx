import { useState } from "react";
import Logo from "../assets/Logo.png"
import { useStore } from "../store/store.jsx";
import { jwtDecode } from "jwt-decode";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineSchedule } from "react-icons/md"; 
import { FaRegClock } from "react-icons/fa"; 
import { HiOutlineUsers } from "react-icons/hi"; 
import { IoDocumentTextOutline } from "react-icons/io5"; 


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {authenticated,setAuthenticated} = useStore()

  let username = "Guest"
  const getUserName = () =>{
    const jwt = sessionStorage.getItem("jwt");
    let decodedToken = null
  
    if(jwt){
    decodedToken = jwtDecode(jwt)
    }
    
    username = (decodedToken?.sub)

  }

  getUserName()

  const onSignOut = () =>{
    sessionStorage.removeItem("jwt")
    setAuthenticated(false)
    
  }

  return (
    <nav className="bg-neutral-200 text-neutral-900 p-2 shadow-sm border-b border-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-neutral-900"><img src={Logo} width={50} height={10}/></div>
          <div className="text-lg font-bold text-black-600">Punch Clock - Plus</div>
        </div>
        <div className="hidden md:flex space-x-6">
          {authenticated? 
          <>
          <a href="#home" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <IoBriefcaseOutline className="inline mr-2" /> Jobs
            </a>
          <a href="#home" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <MdOutlineSchedule className="inline mr-2" /> Shifts
          </a>
          <a href="#home" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <FaRegClock className="inline mr-2" /> Punches
          </a>
          <a href="#contact" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <HiOutlineUsers className="inline mr-2" /> Employees
          </a>
          <a href="#contribute" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <IoDocumentTextOutline className="inline mr-2" /> Reports
          </a>
          <a href="#" className="flex items-center space-x-2 text-neutral-900 hover:text-neutral-600">
          <FaRegUser className="ml-8"/>
          <span className="hover:text-green-600">{username}</span>
          </a>
          <button 
          onClick={onSignOut} 
          className="flex items-center space-x-2 text-neutral-900 hover:text-red-600"
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button>
          </>
          : 
          <>
          <a href="#home" className="text-neutral-900 hover:text-neutral-600"> Home</a>
          <a href="#contact" className="text-neutral-900 hover:text-neutral-600">Contact</a>
          <a href="#contribute" className="text-neutral-900 hover:text-neutral-600">Contribute</a>
          </>
          
        }
          
          
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-6 h-0.5 bg-neutral-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-neutral-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-neutral-900"></span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 bg-neutral-200 p-4">
          {authenticated? 
          <>
          <a href="#home" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <IoBriefcaseOutline className="inline mr-2" /> Jobs
            </a>
          <a href="#home" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <MdOutlineSchedule className="inline mr-2" /> Shifts
          </a>
          <a href="#home" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <FaRegClock className="inline mr-2" /> Punches
          </a>
          <a href="#contact" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <HiOutlineUsers className="inline mr-2" /> Employees
          </a>
          <a href="#contribute" className="text-neutral-900 hover:text-neutral-600 flex items-center">
            <IoDocumentTextOutline className="inline mr-2" /> Reports
          </a>
          <a href="#" className="flex items-center space-x-2 text-neutral-900 hover:text-neutral-600">
          <FaRegUser className="lg:ml-8"/>
          <span className="hover:text-green-600">{username}</span>
          </a>
          <button 
          onClick={onSignOut} 
          className="flex items-center space-x-2 text-neutral-900 hover:text-red-600"
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button>
          </>
          : 
          <>
          <a href="#home" className="text-neutral-900 hover:text-neutral-600"> Home</a>
          <a href="#contact" className="text-neutral-900 hover:text-neutral-600">Contact</a>
          <a href="#contribute" className="text-neutral-900 hover:text-neutral-600">Contribute</a>
          </>
          
        }
        </div>
      )}
    </nav>
  );
};
