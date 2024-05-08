import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import LogInAndRegister from './components/LogInAndRegister';
import Aprender from './components/Aprender';
import Ejercitar from './components/Ejercitar';
import Plan from './components/Plandeestudio';
import Unidades from './components/Unidad';

function App() {

  return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<LogInAndRegister/>}/>
                    <Route path="/home" element={<HomeScreen/>}/>
                    <Route path="/aprender" element={<Aprender/>}/>
                    <Route path="/ejercitar" element={<Ejercitar/>}/>
                    <Route path="/plan" element={<Plan/>}/>
                    <Route path="/unidades" element={<Unidades/>}/>
                </Routes>
            </div>
        </BrowserRouter>
  )
}

export default App;