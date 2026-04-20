import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Login from './pages/Login.jsx';
import Contactus from './pages/ContactUs.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


function App() {
  

  return (

      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact-us" element={<Contactus/>} />
        </Routes>
      </Router>
  )
}

export default App
