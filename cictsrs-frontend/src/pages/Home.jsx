import "../App.css";
import Navbarr from "../components/NavBar";
import { Outlet } from "react-router";
import RequestForm from "../components/RequestForm.jsx";

const Home = () => {
  return (

    
    <div className="relative h-screen max-w-full">
      

      
       
        
         <RequestForm/>
          
       
    
    </div>
  );
};

export default Home;
