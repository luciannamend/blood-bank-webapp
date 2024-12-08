import './App.css'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from "./Registration.jsx";

function App() {

  return (
      <>
          <div>
              <nav>
                  <Link to="/">Home</Link> | <Link to="/registration">Registration</Link> | <Link to="/login">Login</Link>
              </nav>
              <Routes>
                  <Route path="/" element={<h1>Welcome to the Blood Bank</h1>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/registration" element={<Registration/>}/>
              </Routes>
          </div>
      </>
  )
}


export default App
