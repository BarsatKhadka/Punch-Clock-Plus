export const MainPage = () =>{
    return(
        <>
        <div className="h-screen flex">
      <div className="w-3/4 bg-gray-200 p-8">
        <h1 className="text-4xl font-semibold">Welcome to Our Platform</h1>
        <p className="mt-4 text-lg">Here is where your main content goes!</p>
      </div>

      <div className="w-1/4 bg-white p-8 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium">Password</label>
            <input
              id="password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
        </>
    )
}