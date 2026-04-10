import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Login from './pages/Login.jsx';


function App() {
  

  return (

      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/" element={<h1> About</h1>} />
          <Route path="/" element={<h1> Contact Us</h1>} />


        </Routes>
      </Router>
  )
}

export default App
