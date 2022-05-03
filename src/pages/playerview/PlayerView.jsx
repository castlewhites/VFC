import React, { useEffect } from "react";
import styles from "./PlayerView.module.css"
import { Link } from "react-router-dom";
import jugador from "../../img/jugador.png"
import NavBar from "../../NavBar";
import { connect, useDispatch } from 'react-redux'
import {
    getclinicalHistory,
    getTherapy,
    getPrepare
} from "../../connection/firebase"

import { useParams } from 'react-router-dom'

function PlayerView({ patientList, clinicalHistoryFireBase, therapy, prepare, userName }) {
    const params = useParams()
    
    const { id } = params
    const currentPatient = patientList?.filter((patient => patient.idDoc === id))
    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            getclinicalHistory(id, dispatch)
            getTherapy(id,dispatch)
            getPrepare(id,dispatch)
        }
    }, [])
    console.log(prepare);
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className={styles.container}>
                    <div className={styles.imgContainer}>
                        <h3 className={styles.playerName}>{currentPatient[0].nameP}</h3>
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
                                <Link to={`/${id}/Physiotherapy`}><button type="submit" className={styles.button} >Actualizar Datos</button></Link>
                            </div>
                        }  
                        </div> 
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>FECHA DE INGRESO: </b> {therapy.inDate}
                            </li>
                            <li className={styles.item}>
                                <b>FECHA DE ENGRESO: </b> {therapy.outDate}
                            </li>
                            <li className={styles.item}>
                                <b>REPORTE DE LESIÓN: </b> {therapy.injuryBool}
                            </li>
                           
                        </ul>
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>FECHA DE LESIÓN: </b> {therapy.injuryDate}
                            </li>
                            <li className={styles.item}>
                                <b>USO DE ORTESIS: </b> {therapy.orthesisBool}
                            </li>
                            <li className={styles.item}>
                                <b>QUÉ ORTESIS:</b> {therapy.orthesis}
                            </li>       
                        </ul>    
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>DIAGNOSTICO FISIOTERAPEUTICO: </b> <br/> {therapy.diagnosis}
                            </li>
                            <li className={styles.item}>
                                <b>ANTECEDENTES: </b> <br/> {therapy.record}
                            </li>
                        </ul>    
                        <div className={styles.buttonCenter}>              
                            <h2 className={styles.titleFt}>EXPLORACIÓN FISÍCA</h2>
                            {userName.profesion === "therapist" && 
                                <div className={styles.buttonContainer}>
                                    <Link to={`/${id}/PhysicalExploration`}><button type="submit" className={styles.button} >Actualizar Datos</button></Link>
                                </div>
                            }
                        </div>
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>SIGNOS VITALES: </b> 
                                <br />  
                                <b>FC:</b> {prepare.fc} 
                                <br />
                                <b>FR:</b> {prepare.fr} 
                                <b> <br /> TA:</b> {prepare.ta}
                                <b> <br /> TC:</b> {prepare.bt}
                            </li>
                            <li className={styles.item}>
                                <b>ANTROPOMETRÍA: </b> 
                                <br />  
                                <b>TALLA:</b> {prepare.size} 
                                <br />
                                <b>PESO:</b> {prepare.weight}
                                <b> <br /> IMC:</b> {prepare.mci}
                            </li>
                            <li className={styles.item}>
                                <b>FLEXIBILIDAD </b>(MMSS) :  <br />
                                <b>PRUEBA:</b> {prepare.testMmss} <br />
                                <b>DERECHA:</b> {prepare.rhandMmss}
                                <b> <br /> IZQUIERDA:</b> {prepare.lhandMmss}
                            </li>
                            <li className={styles.item}>
                                <b>FLEXIBILIDAD </b>(MMII) :  <br />  
                                <b>PRUEBA:</b> {prepare.testMmii} <br />
                                <b>DERECHA:</b> {prepare.rhandMmii}
                                <b> <br /> IZQUIERDA:</b> {prepare.lhandMmii}
                            </li>
                        </ul> 
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>DOLOR:</b> {prepare.painBool}
                            </li>
                            <li className={styles.item}>
                                <b>ESCALA DE DOLOR:</b> {prepare.painScale}
                            </li>
                            <li className={styles.item}>
                                <b>EDEMA:</b> {prepare.edema}
                            </li>
                            <li className={styles.item}>
                                <b>LUGAR:</b> {prepare.place}
                            </li>
                            <li className={styles.item}>
                                <b>FÓVEA:</b> {prepare.fovea}
                            </li>
                            <li className={styles.item}>
                                <b>PERIMETRO:</b> {prepare.perometer}
                            </li>
                        </ul>   
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <b>GONIOMETRÍA:</b> {prepare.goniometry}
                            </li>
                            <li className={styles.item}>
                                <b>MARCHA:</b> {prepare.march}
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
        prepare: patients.prepare,
        userName: patients.userName,
    }
}

export default connect(mapStateToProps)(PlayerView)