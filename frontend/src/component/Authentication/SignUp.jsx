import {useStore} from "../../store/store"

export const SignUp = () =>{
    const{loginOrSignUp, setLoginOrSignUp} = useStore()
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
          />
        </div>
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
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-green-600">
        Already have an account?{" "}
        <a href="/login" className="text-gray-500 hover:underline ml-2" onClick= {(e) =>{e.preventDefault(); (setLoginOrSignUp(!loginOrSignUp))}}>
          Login
        </a>
      </p>
        </>
    )
}