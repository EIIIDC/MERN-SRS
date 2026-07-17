import "../App.css";
import Navbarr from "../components/NavBar";
import { Outlet } from "react-router";

const Home = () => {
  return (

    
    <div className="relative h-screen max-w-full">
        <Navbarr/>

      <div className="flexbox h-screen  sm:grid-cols-[260px_1fr] md:grid-rows-[80px_1fr] grid-cols-[80px_1fr] grid-rows-[60px_1fr]  md:transition-normal duration-200">
       
        <main className="grid bg-bgblue min-h-full p-12 overflow-y-auto">
          
          <div className="grid lg:grid-cols-3 overscroll-contain items-center justify-center min-h-full gap-4 border-gray-500 text-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-105  ">
            <Outlet/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
