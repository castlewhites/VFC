import React, { useState } from "react"
import  NavBar  from "../../NavBar"
import styles from "./NewPatient.module.css"
import { Link, useNavigate } from "react-router-dom"
import draxo from "../../img/draxo.png"
import { addPatient } from "../../connection/firebase"



export function NewPatient(){
    const [newPatient, setNewPatient] = useState({
        nameP: '',
        age: '',
        bdate: '',
        idDoc: '',
        address: '',
        email: '',
        tel: '',
        weight: '',
        height: '',
    })
    const navigate = useNavigate ();

    const handleAddPatient = () => {
        addPatient(newPatient,navigate)
    }

    return(
        <>
        <header>
            <NavBar/>   
        </header>
        <div className={styles.container}>
            <form className={styles.containerForm}>
                <img src={draxo} alt="logo"
                    className={styles.logo}/>
                <h2 className={styles.titleRegister}>Nuevo Paciente</h2>
                <div>
                    <input 
                        type="text" 
                        className={styles.inputName} 
                        placeholder="Nombre del paciente" 
                        name="nameP"
                        onChange={({target})=>setNewPatient({...newPatient, [target.name]: target.value})}
                    />
                </div>
                <div>
                    <input 
                        type="number"  
                        className={styles.input} 
                        placeholder="Edad" 
                        name="age"
                        onChange={({target})=>setNewPatient({...newPatient, [target.name]: target.value})}
                    />
                    <input 
                        type="date"  
                        className={styles.input} 
                        placeholder="" 
                        name="bdate" 
                        required
                        onChange={({target})=>setNewPatient({...newPatient, [target.name]: target.value})}
                    />
                    
                </div>
                <div>
                    <input 
                        type="number"  
                        className={styles.input} 
                        placeholder="cc" 
                        name="idDoc" 
                        onChange={({target})=>setNewPatient({...newPatient, [target.name]: target.value})}
                    />
                    <input 
                        type="text"  
                        className={styles.input} 
                        placeholder="Direccion" 
                        name="address" 
                        onChange={({target})=>setNewPatient({...newPatient, [target.name]: target.value})}
                    />
                </div>
                <div>
                    <input 
                        type="email"  
                        className={styles.input} 
                        placeholder="Correo" 
                        name="email"
                        onChange={({target})=>setNewPatient({...newPatient, [target.name]: target.value})} 
                    />
                    <input 
                        type="number"  
                        className={styles.input} 
                        placeholder="Telefono" 
                        name="tel" 
                        onChange={({target})=>setNewPatient({...newPatient, [target.name]: target.value})}
                    /> 
                </div>
                <div>
                    <input 
                        type="number"  
                        className={styles.input} 
                        placeholder="peso (Kg)" 
                        name="weight" 
                        onChange={({target})=>setNewPatient({...newPatient, [target.name]: `${target.value} kg`})}
                    />
                    <input 
                        type="number"  
                        className={styles.input} 
                        placeholder="Estatura (Cm)" 
                        name="height" 
                        onChange={({target})=>setNewPatient({...newPatient, [target.name]: `${target.value} cm`})}
                    />
                </div>
                <div>
                    <button type="button" className={styles.button} onClick={()=>handleAddPatient()}>
                        Envíar
                    </button>
                </div>
                <span >
                    <Link className={styles.link} to="/PlayerList">Regresar</Link>
                </span>
            </form>
        </div>        
        </>
    )
}