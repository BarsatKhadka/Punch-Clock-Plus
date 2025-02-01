import { useState } from "react";
import {useStore} from "../../store/store"
import { request } from "../../Utility/axios_helper";

export const SignUp = () =>{
    const{loginOrSignUp, setLoginOrSignUp} = useStore()
    
    const[fullName , setFullName] = useState("");
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[errorMessage, setErrorMessage] = useState("");


    

    const onHandleChange = (e) =>{
        const {name,value} = e.target;
        if(name == "fullName"){
            setFullName(value);
        }
        if(name == "email"){
            setEmail(value)
        }
        if(name=="password"){
            setPassword(value)
        }
    }

    const signUp = async(e) =>{

      if(password.length <= 6){
        setErrorMessage("Passwords should be atleast 7 characters.")
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!emailRegex.test(email)){
        setErrorMessage("Email format not valid.")
        return;
      }

      if(fullName === ""){
        setErrorMessage("Please enter your full name.")
        return;
      }
      

      e.preventDefault()
      const result = await request("POST","/register",{"username": fullName, "email": email , "password": password})
      
      //this means user has signed up and now he has to log in , so i redirect to login page.
      if(result.data === "You are registered successfully."){
        setLoginOrSignUp(!loginOrSignUp);
      }

    }
    return(
        <>
              <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Create an Account</h2>
      <form className="space-y-6">
        <div>
          <input
            id="name"
            type="text"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
            placeholder="Full Name"
            name="fullName"
            onChange={onHandleChange}
            required
          />
        </div>
        <div>
          <input
            id="email"
            type="email"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
            placeholder="Email"
            name="email"
            onChange={onHandleChange}
          />
        </div>
        <div>
          <input
            id="password"
            type="password"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
            placeholder="Password"
            name="password"
            onChange={onHandleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={signUp}
        >
          Sign Up
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-white-600">
       <span className="font-bold">Already have an account?{" "}</span> 
        <a href="/login" className="text-red-500 hover:underline ml-1 lg:ml-2" onClick= {(e) =>{e.preventDefault(); (setLoginOrSignUp(!loginOrSignUp))}}>
          Login
        </a>
      </p>
      {errorMessage && (
        <p className="mt-8 text-center lg:text-lg  text-red-600 flex items-center justify-center">
          <span className="mr-2">&#x26A0;</span> {errorMessage}
        </p>  
      )}
        </>
    )
}