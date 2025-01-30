import { LoginComponent } from "./Authentication/LoginComponent"

export const MainPage = () =>{
    return(
        <>
        <div className="h-screen flex">
      <div className="w-3/4 bg-gray-200 p-8">
        <h1 className="text-4xl font-semibold">Welcome to Our Platform</h1>
        <p className="mt-4 text-lg">Here is where your main content goes!</p>
      </div>
      <div className="w-1/4 bg-white p-8 shadow-lg">
      <LoginComponent/>    
      </div>
    </div>
        </>
    )
}