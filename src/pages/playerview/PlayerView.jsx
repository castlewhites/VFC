import React, { useEffect } from "react";
import styles from "./PlayerView.module.css"
import { Link } from "react-router-dom";
import jugador from "../../img/jugador.png"
import NavBar from "../../NavBar";
import { connect, useDispatch } from 'react-redux'
import {
    getclinicalHistory,
} from "../../connection/firebase"

import { useParams } from 'react-router-dom'

function PlayerView({ patientList, clinicalHistoryFireBase, userName }) {
    const params = useParams()
    
    const { id } = params
    const currentPatient = patientList?.filter((patient => patient.idDoc === id))
    const dispatch = useDispatch()
    useEffect(() => {
        if (id) getclinicalHistory(id, dispatch)
    }, [])
    console.log('clinicalHistoryFireBase?.', userName, currentPatient);
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className={styles.container}>
                    <div className={styles.imgContainer}>
                        <h3 className={styles.playerName}>{currentPatient[0].nameP}</h3>
                        <img src={jugador} alt="jugador"
                            className={styles.player} />
                       {userName.profesion === "doctor" && 
                            <div className={styles.buttonContainer}>
                                <Link to={`/${id}/ClinicHistory`}><button type="submit" className={styles.button} >Actualizar Historia Clinica</button></Link>
                            </div>
                        }
                    </div>

                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <b>EDAD: </b>  <br/> {currentPatient[0].age} Años
                        </li>
                        <li className={styles.item}>
                            <b>No. DOCUMENTO: </b>  <br/> {id}
                        </li>
                        <li className={styles.item}>
                            <b>DIRECCION: </b>  <br/> {currentPatient[0].address}
                        </li>
                        <li className={styles.item}>
                            <b>CELULAR: </b>  <br/> {currentPatient[0].tel}
                        </li>
                    </ul>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <b>CORREO: </b> {currentPatient[0].email}
                        </li>
                        <li className={styles.item}>
                            <b>PESO: </b> {currentPatient[0].weight}
                        </li>
                        <li className={styles.item}>
                            <b>ESTATURA: </b>{currentPatient[0].height}
                        </li>
                    </ul>
                    <h2 className={styles.titleHc}>HISTORIA CLINICA</h2>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <b>DOCTOR: </b> <br/> {currentPatient[0]?.inCharge}
                        </li>
                        <li className={styles.item}>
                            <b>MOTIVO DE CONSULTA</b> <br /> {clinicalHistoryFireBase?.consultation}
                        </li>
                        <li className={styles.item}>
                            <b>DESCRIPCIÓN DE LA LESIÓN: </b> <br /> {clinicalHistoryFireBase?.injury}
                        </li>



                    </ul>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <b>ENFERMEDAD ACTUAL: </b> <br /> {clinicalHistoryFireBase?.illness}
                        </li>
                        <li className={styles.item}>
                            <b>MEDICAMENTOS EN USO ACTUALMENTE: </b> {clinicalHistoryFireBase?.medicine}
                        </li>
                        <li className={styles.item}>
                            <b>ALERGIAS A MEDICAMENTOS: </b> {clinicalHistoryFireBase?.allergy}
                        </li>

                    </ul>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <b>GRUPO SANGUINEO: </b> {clinicalHistoryFireBase?.bloodType}
                        </li>
                        <li className={styles.item}>
                            <b>REACCIÓN A TRANSFUSIONES: </b> {clinicalHistoryFireBase?.tranfusion}
                        </li>
                        <li className={styles.item}>
                            <b>CIRUGIAS: </b> {clinicalHistoryFireBase?.surgeryBool}
                        </li>
                    </ul>
                    <div className={styles.containerFt}>
                        <div className={styles.buttonCenter}>
                        <h2 className={styles.titleFt}>FISIOTERAPIA</h2>
                        <h3 className={styles.titleFe}>FORMATO DE EVALUACIÓN DE LESIONES VFC</h3>
                        {userName.profesion === "therapist" && 
                            <div className={styles.buttonContainer}>
                                <Link to={`/Physiotherapy`}><button type="submit" className={styles.button} >Actualizar Datos</button></Link>
                            </div>
                        }  
                        </div> 
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>FECHA DE INGRESO: </b> 2/05/2022
                            </li>
                            <li className={styles.item}>
                                <b>FECHA DE INGRESO: </b> 10/05/2022
                            </li>
                            <li className={styles.item}>
                                <b>REPORTE DE LESIÓN: </b> Si
                            </li>
                           
                        </ul>
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>FECHA DE LESIÓN: </b> 2/05/2022
                            </li>
                            <li className={styles.item}>
                                <b>USO DE ORTESIS: </b> Si
                            </li>
                            <li className={styles.item}>
                                <b>QUÉ ORTESIS: Rodillera </b> 
                            </li>       
                        </ul>    
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                    <b>DIAGNOSTICO MEDICO: </b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est totam repellat exercitationem ipsam nisi iste, 
                            </li>
                            <li className={styles.item}>
                                <b>ANTECEDENTES: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, accusantium.
                            </li>
                        </ul>    
                        <div className={styles.buttonCenter}>              
                            <h2 className={styles.titleFt}>EXPLORACIÓN FISÍCA</h2>
                            <div className={styles.buttonContainer}>
                                    <Link to={`/PhysicalExploration`}><button type="submit" className={styles.button} >Actualizar Datos</button></Link>
                            </div>
                        </div>
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>SIGNOS VITALES: </b> <br />  <b>FC:</b> 32 <br /><b>FR:</b> 20 <b> <br /> TA:</b> 15
                            </li>
                            <li className={styles.item}>
                                <b>ANTROPOMETRÍA: </b> <br />  <b>FC:</b> 32 <br /><b>FR:</b> 20 <b> <br /> TA:</b> 15
                            </li>
                            <li className={styles.item}>
                                <b>FLEXIBILIDAD </b>(MMSS) :  <br />  <b>FC:</b> 32 <br /><b>FR:</b> 20 <b> <br /> TA:</b> 15
                            </li>
                            <li className={styles.item}>
                                <b>FLEXIBILIDAD </b>(MMII) :  <br />  <b>FC:</b> 32 <br /><b>FR:</b> 20 <b> <br /> TA:</b> 15
                            </li>
                        </ul> 
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>DOLOR:</b> Si
                            </li>
                            <li className={styles.item}>
                                <b>ESCALA DE DOLOR:</b> 7
                            </li>
                            <li className={styles.item}>
                                <b>EDEMA:</b> Si
                            </li>
                            <li className={styles.item}>
                                <b>LUGAR:</b> Tobillo
                            </li>
                            <li className={styles.item}>
                                <b>FÓVEA:</b> Si
                            </li>
                            <li className={styles.item}>
                                <b>PERIMETRO:</b> Izquierdo
                            </li>
                        </ul>   
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>GONIOMETRÍA:</b> Lorem ipsum, dolor sit amet consectetur adipisicing.
                            </li>
                            <li className={styles.item}>
                                <b>MARCHA:</b> Lorem ipsum, dolor sit amet consectetur adipisicing.
                            </li>
                        </ul>                 
                    </div>
                </div>

            </main>
        </>


    )
}

function mapStateToProps({ patients }) {
    return {
        patientList: patients.patientList,
        clinicalHistoryFireBase: patients.clinicalHistoryFireBase,
        therapy: patients.therapy,
        userName: patients.userName,
    }
}

export default connect(mapStateToProps)(PlayerView)