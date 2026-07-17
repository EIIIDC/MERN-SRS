import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Login from './pages/Login.jsx';
import Manage from './pages/Manage.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import ProtectedRoutes from './utils/protectedRoutes.jsx';


function App() {
  

  return (

      <Router>
        <Routes>
          <Route path='/' element={<root/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/superadmin/dashboard" element={<ProtectedRoutes requireRole={["superadmin"]}><Home/></ProtectedRoutes>
          }
        > 
            <Route 
              index
              element={<h1>Dashboard Summary</h1>}
            
            
            /> 
        

        </Route>
          <Route path="/client/dashboard" element={<h1>Client Dashboard</h1>}/>
          <Route path="/manage" element={<Manage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/unauthorized" element={<div className="flex flex-col items-center justify-center h-screen bg-[url(../src/assets/unauthorized401.svg)] bg-cover bg-center bg-no-repeat bg-bgblue/30 bg-blend-overlay md:bg-contain"></div>} />
        </Routes>
      </Router>
  )
}

export default App
