import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
        console.log(data,"authData")
        history("/home")
    }).catch(err=>{
      alert(err.code)
      setLogin(true)
  })
  }
  else{
    signInWithEmailAndPassword(auth, email, password).then(data=>{
      console.log(data,"authData")
      history("/home")
    }).catch(err=>{
        alert(err.code)
    })
  }
  }
  return (
    <div>
      <div>
        <h2 onClick={()=>setLogin(false)}>Register</h2>
        <h2 onClick={()=>setLogin(true)}>LogIn</h2>
      </div>
      <h1>{login?"LogIn":"Register"}</h1><br/>
      <form onSubmit={(e)=>handleSubmit(e, login?"LogIn":"Register")}>
        <input name="email" type="email" placeholder="Email"/><br/>
        <input name="password" type="password" placeholder="Password"/><br/><br/>
        <button>{login?"LogIn":"Register"}</button>
      </form>
    </div>
  )
}

export default LogInAndRegister;