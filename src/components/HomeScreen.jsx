import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

function HomeScreen () {

  const history = useNavigate()

  const handleClick = () =>{
    signOut(auth).then(val=>{
      console.log(val,"val")
      history("/")
    })
}

const [pregunta, setPregunta] = useState("");
const preguntaCollection = collection(db, "Preguntas");

const enviarPregunta = async () => {
  await addDoc(preguntaCollection, {pregunta: pregunta});
  alert("Pregunta Enviada")
}

  return (
    <div>

      <h1>HomeScreen</h1>

      <input style={{padding: 20, flex: 'auto'}}placeholder="Ingresa la Pregunta" onChange={(e) => {setPregunta(e.target.value)}}/><br/><br/>

      <button onClick={enviarPregunta}>Enviar Pregunta</button><br/><br/>

      <button onClick={handleClick}>Log Out</button><br/>

    </div>
  )
}

export default HomeScreen;