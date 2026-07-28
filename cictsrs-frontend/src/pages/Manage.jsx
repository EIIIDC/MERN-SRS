import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCctv } from "../db/cctv/cctv";
import { useinv } from "../db/inventory/inv";
import axios from "axios";
import "../App.css";
import { Outlet } from "react-router";
import CctvCard from "../components/CctvCard";
import InventoryCard from "../components/InventoryCard";
import Navbarr from "../components/NavBar";
import RepairLogCard from "../components/RepairLogCard";
import RequestForm from "../components/RequestForm";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';




const Manage = () => {

  const [activeTab, setActiveTab] = useState('inventory');


  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'requests':
        return <RepairLogCard />;
      case 'inventory':
        return <InventoryCard />;
      
      case 'cctv':
        return <CctvCard />;
      default:
        return <InventoryCard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
    
      <div className="grid  justify-center w-screen z-1 bg-gray-800 py-2">
        <ButtonGroup variant="text"  sx={{ color: 'white' }} >
          <Button 
          className="z-0 transition-discrete hover:bg-bgblue/10"
            onClick={() => setActiveTab('requests')}
            variant={activeTab === 'requests' ? 'contained' : 'text'}
          >
            REQUESTS
          </Button>

          <Button 
          className="z-0 transition-discrete hover:bg-white/50"
            onClick={() => setActiveTab('cctv')}
            variant={activeTab === 'cctv' ? 'contained' : 'text'}
          >
            NETWORK CAMERA
          </Button>



          <Button 
          className="z-0 transition-discrete hover:bg-bgblue/10"
            onClick={() => setActiveTab('inventory')}
            variant={activeTab === 'inventory' ? 'contained' : 'text'}
          >
            INVENTORY
          </Button>
      
          
        </ButtonGroup>
      </div>


      <div className="">
        {renderActiveComponent()}
      </div>
    </div>
    
  );
};

export default Manage;

