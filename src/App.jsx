import { useState, Suspense } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MasterStyles.css'
import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Home from './Home';
import WeatherDisplay from './Weather/weather.jsx';
import CustomMix from './Mixes/CustomMix.jsx';
import PreLoginNav from './Navigation/PreLoginNav.jsx';
import Login from '../src/Login.jsx'
import SignUp from './Account/SignUp.jsx';
import DailyReports from './DailyReports/DailyReports.jsx';

function App() { 
  
    return (    
      <>           
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dailyreports" element={<DailyReports />} />
          </Routes>          
        </Router>
        </>
        );
}

        function HomeScreen() {
          return (
            <><div>
              <PreLoginNav />
            </div>
            <div>
                <h1>Welcome to Simplifry!</h1>
              </div>
              <div>
              <h3>Check the weather before you go!</h3>              
                <WeatherDisplay />
              </div>
            </>); 
}

        

export default App
