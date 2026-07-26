import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRepairLog } from "../db/repairs/repair.js";
import axios from "axios";
import "../App.css";
import Navbarr from "../components/NavBar";

const RepairLogCard = () => {
    const [repairLogs, setRepairLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    const navigate = useNavigate();

    useEffect(() => {
        const getRepairLogs = async () => {
            try {
               
                const response = await axios.get("http://localhost:3000/api/repairLogs");
                
                const actualData = response.data.data || response.data;
                
                
                if (Array.isArray(actualData)) {
                    setRepairLogs(actualData);
                } else {
                    console.error("Backend did not return an array. It returned:", actualData);
                    setRepairLogs([]); 
                }
                
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch Repair Logs from server:", error);
                setRepairLogs([]); 
                setLoading(false);
            }
        };

        getRepairLogs();
    }, []);

    
    const getStatusStyles = (status) => {
        if (status === "completed") return "bg-green-100 text-green-800 border-green-300";
        if (status === "in progress") return "bg-yellow-100 text-yellow-800 border-yellow-300";
        if (status === "received") return "bg-red-100 text-red-800 border-red-300";
        return "bg-gray-100 text-gray-800 border-gray-300";
    };
///
   if (loading) {
        return <div className="flexbox " >
            <div className="absolute"><Navbarr/></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-15 pl-60">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n} className="bg-white/5 rounded-xl border border-gray-700/50 p-5 animate-pulse shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-5 w-24 bg-gray-700 rounded"></div>
                        <div className="h-5 w-16 bg-gray-700 rounded-full"></div>
                      </div>
                      <div className="h-6 w-36 bg-gray-700 rounded mb-4"></div>
                      <div className="space-y-2 border-t pt-3 border-gray-700/50 mt-2">
                        <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
                        <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  ))}


            </div>
                  
                </div>
            };



      
////
    return (

    <div className="relative h-screen max-w-full overscroll-none">
       

      <div className="flex h-screen overscroll-none sm:grid-cols-[260px_1fr] md:grid-rows-[80px_1fr] grid-cols-[80px_1fr] grid-rows-[60px_1fr]  md:transition-normal duration-200">
        <Navbarr/>
        <main className="grid overflow-y-auto bg-bgblue min-h-full w-full p-5 ">
          
          <div className="flexbox lg:grid-cols-3 overscroll-contain items-center justify-center min-h-full gap-4 border-gray-500 text-gray-300 ">
            <div className="p-6 -max-w-8xl mx-auto min-h-screen bg-bgblue/30">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-white px-5">SERVICE REQUESTS</h1>
            
            </div>
            
            {repairLogs.length === 0 ? (
                <div className="text-center p-10 border-2 border-dashed border-gray-300 rounded-xl text-gray-500">
                    No cameras found in the database.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repairLogs.map((repairLogs) => (
                        <div key={repairLogs._id} className="bg-white/10 bg-blend-overlay  rounded-xl shadow-sm border border-gray-200 p-5 transition-discrete hover:bg-white/30 hover:bg-blend-overlay hover:shadow-lg">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-accentblue text-white font-bold text-xs px-2.5 py-1 rounded uppercase tracking-wider">
                                    {repairLogs.office}
                                </span>
                               
                                  
                                
                                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getStatusStyles(repairLogs.status)}`}>
                                    {repairLogs.status}
                                </span>
                            </div>
                            <h1 className="text-sm text-white/70">Request ID: {repairLogs.reqID}</h1>
                            <h3 className="font-bold text-lg text-white/70">{repairLogs.device}</h3>
                            <h3 className="font-bold text-lg text-white/70">Issue: {repairLogs.issue}</h3>
                            <h3 className="font-bold text-lg text-white/70">Inclusions: {repairLogs.inclusions}</h3>

                      {/*  <p className="text-green-500 mb-4 font-medium">{repairLogs.Location}</p>  */}     

                            <div className="space-y-1 text-sm text-white/70 border-t pt-3 border-gray-100 mt-2">
                                <p><strong>Technician:</strong> {repairLogs.assignedTechnician}</p>
                                <p><strong>Date received:</strong> {new Date(repairLogs.dateReceived).toLocaleDateString()}</p>
                                <p><strong>Date released:</strong> {repairLogs.dateReceived}</p>

                                <div className="mt-4 flex justify-end">
                            <button 
                                 onClick={() => navigate(`/EditRequestForm/${repairLogs._id}`)}
                                 className="bg-bgblue-500 hover:bg-white hover:text-bgblue text-white px-3 py-1.5 rounded text-sm transition-colors"
                            >
                                         UPDATE
                            </button>
                            </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>




          </div>
        </main>
      </div>
    </div>









        
    );
};

export default RepairLogCard;