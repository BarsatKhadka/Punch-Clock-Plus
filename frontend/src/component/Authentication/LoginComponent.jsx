import { useState } from "react";
import { SignUp } from "./SignUp";

export const LoginComponent = (props) => {
  //true = signup.
  const[loginOrSignUp , setLoginOrSignUp] = useState(true)
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
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-500 hover:underline">
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