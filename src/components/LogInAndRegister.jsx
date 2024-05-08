import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function LogInAndRegister() {
  const [login,setLogin] = useState(false)

  //Esta constante nos permite navegar a distintas paginas, la invocamos despues de haber creado el usuario
  const history = useNavigate()

  //Esta constante nos permite registrar email y password cuando ingresemos email y contraseña
  const handleSubmit=(e, type)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password= e.target.password.value
    if (type == "Register"){
    createUserWithEmailAndPassword(auth, email, password).then(data=>{
        data.updateProfile({
          displayName: {nombre}
        })
        console.log(data,"authData", "Cuenta Creada")
        history("/home")
    }).catch(err=>{
      alert(err.code)
      setLogin(true)
  })
  }
  else{
    signInWithEmailAndPassword(auth, email, password).then(data=>{
      console.log(data,"authData", "Sesion Iniciada")
      history("/home")
    }).catch(err=>{
        alert(err.code)
    })
  }
  }
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center bg-secondary vh-100">
        <h1 className="d-flex fw-bold">Bienvenido a tu plataforma de estudio para FISICA</h1>
        <div className="bg-white p-2 rounded w-25">
          <h1 className='d-flex justify-content-center align-items-center'>{login?"LogIn":"Registro"}</h1>
          <form onSubmit={(e)=>handleSubmit(e, login?"LogIn":"Register")}>
            <div className="mb-3">
            <label htmlFor="email">
              <strong>Ingresa Email</strong>
            </label>
            <input 
              name="email" 
              type="email" 
              placeholder="Email"
              className="form-control rounded"/>
            </div>
            <div className="mb-3">
            <label htmlFor="email">
              <strong>Ingresa Contraseña</strong>
            </label>
            <input 
              name="password" 
              type="password" 
              placeholder="Password"
              className="form-control rounded"/><br/>
            <button type="submit" className="btn btn-success fw-bold w-100 rounded 0">{login?"LogIn":"Registro"}</button>
            </div>
          </form>
          <div className="d-flex justify-content-between">
            <button onClick={()=>setLogin(false)} className="btn shadow-none fw-light d-flex justify-content-center p-1 shadow-none">¡Crea tu cuenta!</button>
            <button onClick={()=>setLogin(true)} className="btn shadow-none d-flex fw-light justify-content-center p-1 shadow-none">¿Ya tienes una cuenta? ¡Ingresa aqui!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogInAndRegister;