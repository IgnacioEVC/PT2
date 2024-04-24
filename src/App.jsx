import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import LogInAndRegister from './components/LogInAndRegister';

function App() {

  return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<LogInAndRegister/>}/>
                    <Route path="/home" element={<HomeScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
  )
}

export default App
