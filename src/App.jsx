import './App.css'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from "./Registration.jsx";
import DonorProfile from "./DonorProfile.jsx";
import DonorHistory from "./DonorHistory.jsx";

function App() {

  return (
      <>
          <div>
              <nav>
                  <Link to="/">Home</Link> |
                  <Link to="/profile"> Profile</Link> |
                  <Link to="/history"> History</Link> |
                  <Link to="/registration"> Registration</Link> |
                  <Link to="/login"> Login</Link>
              </nav>
              <Routes>
                  <Route path="/" element={<h1>Welcome to the Blood Bank</h1>}/>
                  <Route path="/profile" element={<DonorProfile/>}/>
                  <Route path="/history" element={<DonorHistory/>}/>
                  <Route path="/registration" element={<Registration/>}/>
                  <Route path="/login" element={<Login/>}/>
              </Routes>
          </div>
      </>
  )
}


export default App
