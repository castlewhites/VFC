import React, { useEffect, useState } from "react";
import  NavBar  from "../../NavBar";
import styles from "./PlayerList.module.css"
import { auth, getPatients } from "../../connection/firebase"
import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { connect, useDispatch } from 'react-redux'


function PlayerList({ patientList }){
    const dispatch = useDispatch()
    const [user, loading, error] = useAuthState(auth)
    useEffect(()=>{
        getPatients(dispatch)
    },[])
    return(
        <>
            <header>
                <NavBar/>   
            </header>
            <main className={styles.container}>        
                <table className={styles.table}>
                    <tr>
                        <th>NOMBRE COMPLETO</th> <th>EDAD</th> <th>C.C</th> <th>CORREO</th> <th>CELULAR</th> <th>PESO</th>
                    </tr>
                    {
                        patientList.map((patient, index) => {
                            return (
                                <tr>
                                    <td> <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.nameP}</Link></td>
                                    <td> 
                                        <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.age}</Link>
                                    </td>
                                    <td>
                                        <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.idDoc}</Link>
                                    </td>
                                    <td> 
                                        <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.email}</Link>
                                    </td>
                                    <td>
                                        <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.tel}</Link>
                                    </td>
                                    <td>
                                        <Link className={styles.link} to={`/${patient.idDoc}/PlayerView`}>{patient.weight}</Link> 
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </main>
        </>

    
    );
}
function mapStateToProps({ patients }) {
    return {
        patientList: patients.patientList,
    }
}

export default connect(mapStateToProps)(PlayerList)