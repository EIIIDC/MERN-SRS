import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Login from './pages/Login.jsx';
import Manage from './pages/Manage.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';


function App() {
  

  return (

      <Router>
        <Routes>
          <Route path='/' element={<root/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin/dashboard" element={<Home/>} />
          <Route path="/client/dashboard" element={<h1>Client Dashboard</h1>} />
          <Route path="/manage" element={<Manage/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
  )
}

export default App
