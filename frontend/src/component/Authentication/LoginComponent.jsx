import { useState } from "react";
import { SignUp } from "./SignUp";
import { useStore } from "../../store/store";

export const LoginComponent = (props) => {
  //true = signup.
  const{loginOrSignUp,setLoginOrSignUp} = useStore()
  const{authenticated,setAuthenticated} = useStore()

  const[email,setEmail] = useState("");
  const[password, setPassword] = useState("");


  const onHandleChange = (e) =>{
    const {name,value} = e.target;

    if(name === "email"){
    setEmail(e.target.value);
    }

    if(name === "password"){
      setPassword(e.target.value);
    }
  }

  

    return (
      <>
      {loginOrSignUp && 
      <>
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Welcome Back</h2>
        <form className="space-y-6">
          <div>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
              placeholder="Email"
              onChange={onHandleChange}
              required
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
              placeholder="Password"
              onChange={onHandleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          <span className="text-red-500">Don't have an account?{" "}</span>
          <a href="" className="text-gray-500 hover:underline lg:ml-2 ml-4" onClick= {(e) =>{e.preventDefault(); (setLoginOrSignUp(!loginOrSignUp))}}>
             Sign up
          </a>  
        </p>
        </>
        }

        {!loginOrSignUp &&
        <>
        <SignUp/>
        </>
        }
      </>
    );
  };