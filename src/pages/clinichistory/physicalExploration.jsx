import React, { useState } from "react";
import NavBar from "../../NavBar"
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {  useParams } from 'react-router-dom'
import { addPrepare } from "../../connection/firebase"
import styles from "./ClinicHistory.module.css"

function PhysicalExploration({ userName }){
    const [localPrepare, setLocalPrepare] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const { id } = params

    const sendPrepare = () => {
        addPrepare({...localPrepare, prepare: userName.name, idDoc: id},navigate)
    }
    return(
        <>
        <header>
            <NavBar/>
        </header>
        <main className={styles.container}>
        <h1 className={styles.title}>Exploración Física</h1>

            <form className={styles.containerForm}>
                <div className={styles.rows}>
                    <div className={styles.field}>
                        <label for="fc">Signos vitales: </label>
                        <input type="text" placeholder="Frecuencia Cardiaca" name="fc" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                        <label for="fr"></label>
                        <input type="text" placeholder="Frecuancia Respiratoria" name="fr" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                        <label for="ta"></label>
                        <input type="text" placeholder="Tension Arterial" name="ta" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                        <label for="bt"></label>
                        <input type="text" placeholder="Temperatura Corporal" name="bt" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                    </div>
                    <div className={styles.field}>
                        <label for="size">Antropometría: </label>
                        <input type="text" placeholder="Talla:" name="size"
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                        <label for="weight"></label>
                        <input type="text" placeholder="Peso:" name="weight" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                        <label for="mci"></label>
                        <input type="text" placeholder="IMC:" name="mci" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                    </div>
                    <div className={styles.field}>
                        <label for="testMmss">Flexibilidad (MMSS): </label>
                        <input type="text" placeholder="Prueba" name="testMmss" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                        <label for="rhandMmss"></label>
                        <input type="text" placeholder="Derecha:" name="rhandMmss" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                        <label for="lhandMmss"></label>
                        <input type="text" placeholder="Izquierda:" name="lhandMmss" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                    </div>
                    <div className={styles.field}>
                        <label for="testMmii">Flexibilidad (MMII): </label>
                        <input type="text" placeholder="Prueba" name="testMmii" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                        <label for="rhandMmii"></label>
                        <input type="text" placeholder="Derecha:" name="rhandMmii" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                        <label for="lhandMmii"></label>
                        <input type="text" placeholder="Izquierda:" name="lhandMmii" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                    </div>
                </div>
                <div className={styles.rows}>
                    <div className={styles.radio}>
                        <label for="painBool"> Dolor: </label>
                        <div>
                            <input type="radio" name="painBool" value="si" 
                                onChange={({target})=>setLocalPrepare(
                                    {...localPrepare, [target.name]: target.value}
                                )}
                            /> Si
                        </div>
                        <div>
                            <input type="radio" name="painBool" value="no" 
                                onChange={({target})=>setLocalPrepare(
                                    {...localPrepare, [target.name]: target.value}
                                )}
                            /> No
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label for="painScale">Escala de dolor (1 - 10)</label>
                        <input type="number" name="painScale" min="1" max="10" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                    </div>
                    <div className={styles.radio}>
                        <label for="edema"> Edema: </label>
                        <div>
                            <input type="radio" name="edema" value="Si" 
                                onChange={({target})=>setLocalPrepare(
                                    {...localPrepare, [target.name]: target.value}
                                )}
                            /> Si
                        </div>
                        <div>
                            <input type="radio" name="edema" value="No" 
                                onChange={({target})=>setLocalPrepare(
                                    {...localPrepare, [target.name]: target.value}
                                )}
                            /> No
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label for="place">Lugar</label>
                        <input type="text" name="place" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        />
                    </div>

                    <div className={styles.radio}>
                        <label for="fovea"> Fóvea </label>
                        <div>
                            <input type="radio" name="fovea" value="Si" 
                                onChange={({target})=>setLocalPrepare(
                                    {...localPrepare, [target.name]: target.value}
                                )}
                            /> Si
                        </div>
                        <div>
                            <input type="radio" name="fovea" value="No" 
                                onChange={({target})=>setLocalPrepare(
                                    {...localPrepare, [target.name]: target.value}
                                )}
                            /> No
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label for="perometer">Perímetro: </label>
                        <select 
                            name="perometer"
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        >
                            <option selected disabled value="X" >Seleccione una Opción</option>
                            <option value="izquierdo" name="fovea">Izquierdo</option>
                            <option value="derecho" name="fovea">Derecho</option>
                        </select>
                    </div>

                </div>
                <div className={styles.rows}>
                    <div className={styles.textBox}>
                        <label for="goniometry"> Goniometría: </label>
                        <textarea name="goniometry" cols="30" rows="3" 
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        ></textarea>
                    </div>
                    <div className={styles.textBox}>
                        <label for="march"> Marcha: </label>
                        <textarea name="march" cols="30" rows="3"
                            onChange={({target})=>setLocalPrepare(
                                {...localPrepare, [target.name]: target.value}
                            )}
                        ></textarea>
                    </div>
                </div>
            </form>
            <button type="button" className={styles.send_history} onClick={()=>sendPrepare()}>
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

export default connect(mapStateToProps)(PhysicalExploration)