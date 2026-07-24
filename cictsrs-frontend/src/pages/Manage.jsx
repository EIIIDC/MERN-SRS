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
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const selectedData= () =>
{



}


const Manage = () => {
 //<InventoryCard/>
 //<CctvCard/>
          //
 return (
//button repairLog(CLIENT REQUESTS) - inventory(CICT INVENTORY) - cctv(NETWORK CAMERA) - users(MANAGE CLIENTS AND USERS - reports(ANALYTICS) 

// button if else conditionals

//switch 
      <div >
           
                    <div className="grid bg-gray-800 bg-bgblue/30 justify-center w-screen z-0">
                      <ButtonGroup  variant="text" textColor="inherit" aria-label="Basic button group  ">
                        <Button>CICT INVENTORY</Button>
                        <Button>ACCOUNTS</Button>
                        <Button>NETWORK CAMERA</Button>
                        
                      </ButtonGroup>
                  </div>
        
        

          

            



      </div>
  );






  
  // <ReqCard/>
  // <InventoryCard/>
  //  <CctvCard />
  // <UserCard/>
};

export default Manage;

