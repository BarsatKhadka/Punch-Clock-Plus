import { CurrentTime } from "../CurrentTime/CurrentTime";
import { Jobs } from "../Jobs/Jobs";
export const HomeAfterAuth = () => {
    return (
      <div className="flex flex-col md:flex-row h-screen w-full">
        <div className="flex-1 bg-blue-500 flex text-white text-2xl"> 
         <Jobs/>
        </div>
        <div className="flex-1 bg-green-500 flex text-white text-2xl">
          <CurrentTime/>
        </div>
      </div>
    );
  };
  