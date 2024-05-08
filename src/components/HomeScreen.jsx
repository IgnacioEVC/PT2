import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function HomeScreen () {

    const nombre = "Ignacio Villegas"

    const navigate = useNavigate();

    const history = useNavigate();

    const handleClick = () =>{
      signOut(auth).then(val=>{
        console.log("Sesion Cerrada")
        history("/")
      })
  }

    return(
        <div className="bg-secondary">
            <button type="submit" className="btn btn-success" onClick={handleClick}>Logout</button>
            <div className="d-flex flex-column justify-content-center align-items-center bg-secondary vh-100">
                <div className="d-flex justify-content-center align-items-center">
                    <h1>Bienvenido {nombre}</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <p>Porfavor seleccione una de las siguientes opciones:</p>
                </div>
                <div className="d-flex flex-column bg-white p-2 rounded w-25 justify-content-center align-items-center">
                    <button type="submit" className="btn btn-success fw-bold w-100 rounded 0" onClick={()=>{navigate("/unidades")}}>Aprender</button><hr/>
                    <button type="submit" className="btn btn-success fw-bold w-100 rounded 0" onClick={()=>{navigate("/unidades")}}>Ejercitar</button><hr/>
                    <button type="submit" className="btn btn-success fw-bold w-100 rounded 0" onClick={()=>{navigate("/unidades")}}>Obtener Plan de Estudio</button>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;