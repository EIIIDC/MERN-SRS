import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRepairLog } from "../db/repairs/repair.js";
import axios from "axios";
import "../App.css";
import Navbarr from "../components/NavBar";
import DataGridRepairLogs from "../components/analytics.jsx";



const API_BASE_URL = `https://cict-srs-server.onrender.com`;

const RepairLogCardReq = () => {


  ////
  return (
    <div className="relative   overscroll-none">
        <div className="sticky top-0 grid justify-center z-1 py-2 transition-all duration-300
       bg-transparent backdrop-blur-lg
       hover:border-white hover:shadow-xl">
        
       </div>




      <div className="flex overscroll-none sm:grid-cols-[260px_1fr] md:grid-rows-[80px_1fr] grid-cols-[80px_1fr] grid-rows-[60px_1fr]  md:transition-normal duration-200">
        <Navbarr />
        <main className="grid overflow-y-auto bg-bgblue min-h-full w-full p-5 ">
          <div className="flexbox lg:grid-cols-3 overscroll-contain items-center justify-center min-h-full gap-4 border-gray-500 text-gray-300 ">
            <div className="p-6 -max-w-8xl mx-auto min-h-screen bg-bgblue/30">
              
              {/*HEADER*/}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-white px-5">
                 
                </h1>
              </div>

              <div>


               {/*Call Exported Data Grid*/}
                {DataGridRepairLogs()}

              </div>

              
                
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RepairLogCardReq;
