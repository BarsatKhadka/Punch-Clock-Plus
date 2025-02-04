import { LoginComponent } from "./Authentication/LoginComponent";
import { useStore } from "../store/store.jsx";
import { HomeBeforeAuth } from "./HomePage/HomeBeforeAuth.jsx";
import { HomeAfterAuth } from "./HomePage/HomeAfterAuth.jsx";

export const MainPage = () => {
  const { authenticated } = useStore();
  return (
    <>
      {!authenticated && (
        <div className="h-screen flex">
          <div className="lg:w-3/4 w-2/4 bg-black p-8 text-white">
            <HomeBeforeAuth />
          </div>
          <div className="lg:w-1/4 w-2/4 bg-gradient-to-b from-teal-500 to-teal-700  p-8 shadow-lg text-white">
            <LoginComponent />
          </div>
        </div>
      )}

      {authenticated && <HomeAfterAuth />}
    </>
  );
};