import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Login from './pages/Login.jsx';
import Manage from './pages/Manage.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Reports from './pages/Reports.jsx';
import ProtectedRoutes from './utils/protectedRoutes.jsx';
import requests from './pages/Reqs.jsx';
//import inventory from './pages/inv.jsx';
import CctvCard from './components/CctvCard.jsx';
import InventoryCard from './components/InventoryCard.jsx';
import RequestForm from './components/RequestForm.jsx';
import EditRequestForm from './components/EditRequestForm.jsx'; 



function App() {
  

  return (

      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
        {/*  <Route path="/login" element={<Login/>} />*/}
          <Route path="/superadmin/dashboard" element={<ProtectedRoutes requireRole={["superadmin"]}><Home/></ProtectedRoutes>
          }
        > 

        </Route>
          <Route path="/client/dashboard" element={ <h1>    UNAVAILABLE    </h1>}/>
          <Route path="/superadmin/manage" element={<ProtectedRoutes requireRole={["superadmin"]}><Manage/></ProtectedRoutes>}></Route> 
          <Route path="/superadmin/reports" element={<Reports/>}></Route>  
          <Route path="/EditRequestForm/:id" element={<EditRequestForm />} />
         


          
          <Route path="/register" element={<Register/>} />
          <Route path="/unauthorized" element={<div className="flex flex-col items-center justify-center h-screen bg-[url(../src/assets/unauthorized401.svg)] bg-cover bg-center bg-no-repeat bg-bgblue-500 bg-blend-overlay md:bg-contain"></div>} />
          
        </Routes>
      </Router>
  )
}

export default App
