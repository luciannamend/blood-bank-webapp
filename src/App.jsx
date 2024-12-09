import './css/App.css'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Home.jsx";
import Login from './Login';
import Registration from "./Registration.jsx";
import DonorProfile from "./DonorProfile.jsx";
import DonorHistory from "./DonorHistory.jsx";
import Logout from "./Logout.jsx";

function App() {

  return (
      <>
          <div>
              <nav>
                  <Link to="/home">Home</Link> |
                  <Link to="/profile"> Profile</Link> |
                  <Link to="/history"> History</Link> |
                  <Link to="/registration"> Registration</Link> |
                  <Link to="/login"> Login</Link>
                  <Link to="/logout">Logout</Link>
              </nav>
              <Routes>
                  <Route path="/home" element={<Home/> }/>
                  <Route path="/profile" element={<DonorProfile/>}/>
                  <Route path="/history" element={<DonorHistory/>}/>
                  <Route path="/registration" element={<Registration/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/logout" element={<Logout/>}/>
              </Routes>
          </div>
      </>
  )
}


export default App
