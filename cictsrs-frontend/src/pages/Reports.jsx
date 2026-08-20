import { useEffect, useState } from "react";
import { useNavigate } from "react";
import axios from "axios";
import "../App.css";
import Navbarr from "../components/NavBar";






const Reports = () => {
    return (
    <div className="relative  overscroll-none">
       

        <div className="flex  overscroll-none sm:grid-cols-[260px_1fr] md:grid-rows-[80px_1fr] grid-cols-[80px_1fr] grid-rows-[60px_1fr]  md:transition-normal duration-200">
            <Navbarr/>




        
        
        </div>
    </div>
  
    
 ) 
};

export default Reports;

