import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCctv } from "../db/cctv/cctv";
import axios from "axios";
import "../App.css";
import Navbarr from "../components/NavBar";


const API_BASE_URL = `http://${window.location.hostname}:3000`;

const CctvCard = () => {
    const [cctvs, setCctvs] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    const navigate = useNavigate();

    useEffect(() => {
        const getCctvs = async () => {
            try {
               
                const response = await axios.get(`${API_BASE_URL}/api/cctvs`);
                
                const actualData = response.data.data || response.data;
                
                
                if (Array.isArray(actualData)) {
                    setCctvs(actualData);
                } else {
                    console.error("Backend did not return an array. It returned:", actualData);
                    setCctvs([]); 
                }
                
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch CCTV data from server:", error);
                setCctvs([]); 
                setLoading(false);
            }
        };

        getCctvs();
    }, []);

    
    const getStatusStyles = (status) => {
        if (status === "operational") return "bg-green-100 text-green-800 border-green-300";
        if (status === "needs maintenance") return "bg-yellow-100 text-yellow-800 border-yellow-300";
        if (status === "out of order") return "bg-red-100 text-red-800 border-red-300";
        return "bg-gray-100 text-gray-800 border-gray-300";
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen text-lg">Loading cameras...</div>;
    }

    return (

    <div className="relative  overscroll-none">
       

      <div className="flex  overscroll-none sm:grid-cols-[260px_1fr] md:grid-rows-[80px_1fr] grid-cols-[80px_1fr] grid-rows-[60px_1fr]  md:transition-normal duration-200">
        <Navbarr/>
        <main className="grid overflow-y-auto bg-bgblue min-h-full w-full p-5 ">
          
          <div className="flexbox lg:grid-cols-3 overscroll-contain items-center justify-center min-h-full gap-4 border-gray-500 text-gray-300 ">
            <div className="p-6 -max-w-8xl mx-auto min-h-screen bg-bgblue/30">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-white px-5">NETWORK CAMERA</h1>
                
                
                <button 
                    onClick={() => navigate('/add-cctv')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md shadow-sm transition-colors"
                >
                    + Add CCTV
                </button>
            </div>
            
            {cctvs.length === 0 ? (
                <div className="text-center p-10 border-2 border-dashed border-gray-300 rounded-xl text-gray-500">
                    No cameras found in the database.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cctvs.map((cctv) => (
                        <div key={cctv._id} className="bg-white/10 bg-blend-overlay  rounded-xl shadow-sm border border-gray-200 p-5 transition-discrete hover:bg-white/30 hover:bg-blend-overlay hover:shadow-lg">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-accentblue text-white font-bold text-xs px-2.5 py-1 rounded uppercase tracking-wider">
                                    {cctv.cctvType}
                                </span>
                                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getStatusStyles(cctv.Status)}`}>
                                    {cctv.Status}
                                </span>
                            </div>

                            <h3 className="font-bold text-lg text-white/70">ID: {cctv.CctvId}</h3>

                            <p className="text-green-500 mb-4 font-medium">{cctv.Location}</p>

                            <div className="space-y-1 text-sm text-white/70 border-t pt-3 border-gray-100 mt-2">
                                <p><strong>Installed:</strong> {new Date(cctv.InstallationDate).toLocaleDateString()}</p>
                                <p><strong>Last Maint:</strong> {new Date(cctv.LastMaintenanceDate).toLocaleDateString()}</p>
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

export default CctvCard;