import React, { useState, useEffect } from "react";
import styles from "./Register.module.css"
import { Link, useNavigate  } from "react-router-dom";
import { auth, signUpWithEmailAndPassword } from "../../connection/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { toastMessage } from '../../utils/toast';

export function Register(){
    const navigate = useNavigate ();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, loading, error] = useAuthState(auth)
    console.log(user);
    useEffect(() => {
        if (loading) {
          return
        }
        if (user) navigate("/PlayerList")
      }, [user, loading])

    function handleSignUp() {
        const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
        if (name.length < 1) {
          toastMessage('error', 'Please insert a full name!', 'error_name');
        } else if (!email.match(regexp)) {
          toastMessage('error', 'Please insert a valid email!', 'error_pwd');
        } else if (password.length < 8)  {
          toastMessage('error', 'La contraseña debe tener al menos 8 caracteres!', 'error_pwd')
        } else{
          signUpWithEmailAndPassword(name, email, password)
        }
      }
    return(
        <form className={styles.containerRegister}>
            <h2 className={styles.titleRegister}>Crear Una Nueva Cuenta</h2>
            <input 
                type="text" 
                className={styles.inputText} 
                placeholder="Nombre de Usuario" 
                name="uname" 
                onChange={({target})=>setName(target.value)}
            />
            <input type="email"  
                className={styles.inputEmail} 
                placeholder="Correo" name="email" 
                onChange={({target})=>setEmail(target.value)} 
                required 
            />
            <input 
                type="password"  
                className={styles.inputPassword} 
                placeholder="Contraseña" name="upassword" 
                onChange={({target})=>setPassword(target.value)} 
                required
            />
            <button type="button" className={styles.buttonRegister} onClick={()=> handleSignUp()}>Envíar</button>
            <span className={styles.back}><Link className={styles.link} to="/">Regresar</Link></span>   
        </form>
    )
}