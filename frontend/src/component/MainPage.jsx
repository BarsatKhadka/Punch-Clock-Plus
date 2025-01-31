import { LoginComponent } from "./Authentication/LoginComponent"
import { useStore } from "../store/store.jsx";
import { HomeBeforeAuth } from "./HomePage/HomeBeforeAuth.jsx";

export const MainPage = () =>{
  const {authenticated} = useStore();
    return(
        <>
        {!authenticated && 
        <div className="h-screen flex">
      <div className="lg:w-3/4 w-2/4 bg-gray-200 p-8">
      <HomeBeforeAuth/>
      </div>
      <div className="lg:w-1/4 w-2/4 bg-white p-8 shadow-lg">
      <LoginComponent/>    
      </div>
    </div>
      }
      
      {authenticated &&
      <>
      <p>After authentication</p>
      </>
      
      }

        </>
    )
}