import { CurrentTime } from "../CurrentTime/CurrentTime";
import { Jobs } from "../Jobs/Jobs";
export const HomeAfterAuth = () => {
    return (
      <div className="flex flex-col md:flex-row h-screen ">
        <div className="flex-1 bg-black flex text-white text-2xl"> 
         <Jobs/>
        </div>
        <div className="flex-1 bg-gradient-to-b from-teal-500 to-teal-700 flex text-white text-2xl">
        <div className="flex-1  text-white text-2xl h-fit">
        <CurrentTime />
      </div>
      </div>
      </div>
    );
  };
  