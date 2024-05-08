import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Unidades(){

    const navigate = useNavigate();

    return(
        <div className="bg-secondary">
            <button type="submit" className="btn btn-success" onClick={()=>{navigate("/home")}}>Atrás</button>
            <div className="d-flex flex-column justify-content-center align-items-center bg-secondary vh-100">
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="fw-bold">Selecciona la unidad que desea revisar</h1>
                </div>
                <div className="d-flex flex-column bg-white p-2 rounded w-25 justify-content-center align-items-center">
                    <button type="submit" className="btn btn-primary fw-bold w-100 rounded 0">Unidad 1 <br/> ¿De qué manera se relacionan
las ondas con el sonido?</button><hr/>
                    <button type="submit" className="btn btn-success fw-bold w-100 rounded 0">Unidad 2 <br/> ¿Cómo se relacionan las
ondas con la luz?</button><hr/>
                    <button type="submit" className="btn btn-danger fw-bold w-100 rounded 0">Unidad 3 <br/> ¿De qué forma se relacionan
las ondas con los sismos?</button><hr/>
                    <button type="submit" className="btn btn-info fw-bold w-100 rounded 0">Unidad 4 <br/> ¿Qué estructuras componen
nuestro universo?</button><hr/>
                    <button type="submit" className="btn btn-primary fw-bold w-100 rounded 0">Unidad 5 <br/> ¿Cómo han evolucionado los
modelos del universo?</button><hr/>
                    <button type="submit" className="btn btn-success fw-bold w-100 rounded 0">Unidad 6 <br/> ¿De qué manera se describen
los movimientos?</button><hr/>
                    <button type="submit" className="btn btn-danger fw-bold w-100 rounded 0">Unidad 7 <br/> ¿Cómo las fuerzas están
presentes en nuestro entorno?</button><hr/>
                    <button type="submit" className="btn btn-info fw-bold w-100 rounded 0">Unidad 8 <br/> ¿Cómo el trabajo y la energía se
manifiestan en nuestro mundo?</button>
                </div>
            </div>
        </div>
    )
}

export default Unidades;