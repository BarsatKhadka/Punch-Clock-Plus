import { useState } from "react";
import { SignUp } from "./SignUp";
import { useStore } from "../../store/store";
import { request } from "../../Utility/axios_helper";

export const LoginComponent = (props) => {
  //true = signup.
  const{loginOrSignUp,setLoginOrSignUp} = useStore()
  const{authenticated,setAuthenticated} = useStore()
  

  //email (actually is full Name)
  const[email,setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[errorMessage,setErrorMessage] = useState("")

  const onHandleChange = (e) =>{
    const {name,value} = e.target;

    if(name === "fullName"){
    setEmail(e.target.value);
    }

    if(name === "password"){
      setPassword(e.target.value);
    }
  }

   const logIn = async(e) =>{
  
        if(password.length <= 6){
          setErrorMessage("Passwords should be atleast 7 characters.")
          return;
        }
  
        if(fullName === ""){
          setErrorMessage("Please enter your full name.")
          return;
        }
        
  
        e.preventDefault()
        const result = await request("POST","/login",{"username": email, "password": password})
        
        //this means login details are invalid
        if(result.data === "invalid"){
          setErrorMessage("Invalid full name or password.")
        }

        if(result.data.startsWith("token")){
          sessionStorage.setItem("jwt",result.data.substring(5))
          setAuthenticated(true)
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
              id="fullName"
              type="text"
              name="fullName"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
              placeholder="Full Name"
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
            onClick={logIn}
          >
            Log in
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-white-600">
          <span className="text-white-500 font-bold">Don't have an account?{" "}</span>
          <a href="" className="text-red-500 hover:underline lg:ml-2 ml-1" onClick= {(e) =>{e.preventDefault(); (setLoginOrSignUp(!loginOrSignUp))}}>
             Sign up 
          </a>  
        </p>
        {errorMessage && (
        <p className="mt-8 text-center lg:text-lg text-red-600 flex items-center justify-center ">
          <span className="mr-2">&#x26A0;</span> {errorMessage}
        </p>  
        
      )}   
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