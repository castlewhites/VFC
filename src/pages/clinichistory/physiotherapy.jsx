import React, { useState } from "react";
import NavBar from "../../NavBar"
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {  useParams } from 'react-router-dom'
import { addTherapy } from "../../connection/firebase"
import styles from "./ClinicHistory.module.css"

function Physiotherapy({ userName }){
    const [localTherapy, setLocalTherapy] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const { id } = params

    const sendTherapy = () => {
        addTherapy({...localTherapy, therapist: userName.name, idDoc: id},navigate)
    }
    return(
        <>
        <header>
            <NavBar/>
        </header>
        <main className={styles.container}>  
        <h1 className={styles.title}>FISIOTERAPIA</h1>
        <h2 className={styles.title2}>FORMATO DE EVALUACIÓN DE LESIONES VFC</h2>
        <form className={styles.containerForm}>
            <div className={styles.rows}>
                <div className={styles.field}>
                    <label for="inDate">Fecha de ingreso: </label>
                    <input 
                        type="date" 
                        name="inDate" 
                        required 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
                <div className={styles.field}>
                    <label for="outDate">Fecha de egreso: </label>
                    <input 
                        type="date" 
                        name="outDate" required 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
                <div className={styles.field}>
                    <label for="injuryDate">Fecha de lesión: </label>
                    <input 
                        type="date" 
                        name="injuryDate" 
                        required 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
            </div>
            <div className={styles.rows}>
                <div className={styles.radio}>
                    <label for="injuryBool">Reporte de lesión: </label>
                    <div>
                        <input 
                            type="radio" 
                            name="injuryBool" 
                            value="Si" 
                            onChange={({target})=>setLocalTherapy(
                                {...localTherapy, [target.name]: target.value}
                            )}
                        />
                         Si
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="injuryBool" 
                            value="No" 
                            onChange={({target})=>setLocalTherapy(
                                {...localTherapy, [target.name]: target.value}
                            )}
                        /> 
                        No
                    </div>
                </div>
               
                <div className={styles.radio}>
                    <label for="orthesisBool"> Uso de Ortesis: </label>
                    <div>
                        <input 
                            type="radio" 
                            name="orthesisBool" 
                            value="Si" 
                            onChange={({target})=>setLocalTherapy(
                                {...localTherapy, [target.name]: target.value}
                            )}
                        /> 
                        Si
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="orthesisBool" 
                            value="No" 
                            onChange={({target})=>setLocalTherapy(
                                {...localTherapy, [target.name]: target.value}
                            )}
                        /> 
                        No
                    </div>
                </div>
                <div className={styles.field}>
                    <label for="orthesis">¿Cuál ortesis? </label>
                    <input 
                        type="text"
                        name="orthesis" 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>


            </div>
            <div className={styles.rows}>

                <div className={styles.textBox}>
                    <label for="diagnosis"> Diagnostico medico: </label>
                    <textarea 
                        name="diagnosis" 
                        cols="30" rows="3"
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
                <div className={styles.textBox}>
                    <label for="record"> Antecedentes: </label>
                    <textarea 
                        name="record" 
                        cols="30" rows="3" 
                        onChange={({target})=>setLocalTherapy(
                            {...localTherapy, [target.name]: target.value}
                        )}
                    />
                </div>
            </div>
        </form>
        <button type="button" 
            className={styles.send_history}
            onClick={()=>sendTherapy()}
        >
            Enviar
        </button>
    </main>
    </>
    )
   
}
function mapStateToProps({ patients }) {
    return {
        userName: patients.userName
    }
}

export default connect(mapStateToProps)(Physiotherapy)