import styles from "./PlayerView.module.css"
import { Link } from "react-router-dom";
import  jugador  from "../../img/jugador.png"
import NavBar from "../../NavBar";

export function PlayerView(){
    return(
        <>
        <header>
            <NavBar/>   
        </header>
        <main>
            <div className={styles.container}>
                    <div className={styles.imgContainer}>
                    <h3 className={styles.playerName}>Andres Felipe Padilla Loaiza</h3>
                    <img src={jugador} alt="jugador"
                    className={styles.player}/>
                    <div className={styles.buttonContainer}>
                        <Link to="/ClinicHistory"><button type="submit" className={styles.button} >Actualizar Historia Clinica</button></Link>
                    </div>
                    </div>

                <ul className={styles.items}>
                    <li className={styles.item}>
                        <b>EDAD: </b> 26 Años
                    </li>
                    <li className={styles.item}>
                        <b>DOCUMENTO DE IDENTIFICACIÓN: </b> CC 1.065.812.488
                    </li>
                    <li className={styles.item}>
                        <b>BARRIO: </b> San Joaquín
                    </li>
                    <li className={styles.item}>
                        <b>CELULAR: </b> 3225132950
                    </li>
                    <li className={styles.item}>
                        <b>CORREO: </b> anfe9898@gmail.com
                    </li>
                    <li className={styles.item}>
                        <b>PESO: </b> 76KG
                    </li>
                    <li className={styles.item}>
                        <b>ESTATURA: </b> 1.79CM
                    </li>
                </ul>
                <h2 className={styles.titleHc}>HISTORIA CLINICA</h2>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <b>DOCTOR: </b> Andrés Felipe Padilla Loaiza
                    </li>
                    <li className={styles.item}>
                        <b>MOTIVO DE CONSULTA U ORIGEN DE LA LESIÓN: </b> <br /> Lorem ipsum dolor sit ameias
                    </li>
                    <li className={styles.item}>
                        <b>DESCRIPCIÓN DE LA LESIÓN: </b> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia esse recusandae amet debitis provident 
                    </li>
                    <li className={styles.item}>
                        <b>ENFERMEDAD ACTUAL: </b> <br /> No aplica
                    </li>
                    <li className={styles.item}>
                        <b>MEDICAMENTOS EN USO ACTUALMENTE: </b> No aplica
                    </li>
                    <li className={styles.item}>
                        <b>ALERGIAS A MEDICAMENTOS: </b> No aplica
                    </li>
                    <li className={styles.item}>
                        <b>GRUPO SANGUINEO: </b> O-
                    </li>
                    <li className={styles.item}>
                        <b>REACCIÓN A TRANSFUSIONES: </b> Ninguna
                    </li>
                    <li className={styles.item}>
                        <b>CIRUGIAS: </b> Ninguna
                    </li>
                </ul>
                <div className={styles.containerFt}>
                        <h2 className={styles.titleFt}>FISIOTERAPIA</h2>
                        <h3 className={styles.titleFe}>FORMATO DE EVALUACIÓN DE LESIONES VFC</h3>

                    <form className={styles.containerForm}>
                        <div className={styles.rows}>
                            <div className={styles.field}>
                                <label for="dateI">Fecha de ingreso: </label>
                                <input type="date"  name="dateI" required/>
                            </div>
                            <div className={styles.field}>
                                <label for="dateE">Fecha de egreso: </label>
                                <input type="date"  name="dateE" required/>
                            </div>
                            <div className={styles.field}>
                                <label for="name">Nombres y Apellidos: </label>
                                <input type="text"  name="name"/>
                            </div>
                            <div className={styles.field}>
                                <label for="cc">ID: </label>
                                <input type="number" name="cc" />
                            </div>
                        </div>
                        <div className={styles.rows}>
                            <div className={styles.radio}>
                                <label for="injury">Reporte de lesión: </label>
                                    <div>
                                        <input type="radio" name="injury" value="si" /> Si
                                    </div>
                                    <div>
                                        <input type="radio" name="injury" value="no" /> No
                                    </div>
                            </div>
                            <div className={styles.field}>
                                <label for="dateL">Fecha de lesión: </label>
                                <input type="date"  name="dateL" required/>
                            </div>
                            <div className={styles.radio}>
                                <label for="ortesis"> Uso de Ortesis: </label>
                                    <div>
                                        <input type="radio" name="ortesis" value="si" /> Si
                                    </div>
                                    <div>
                                        <input type="radio" name="ortesis" value="no" /> No
                                    </div>
                            </div>
                            <div className={styles.field}>
                                <label for="ortesis1">¿Cuál ortesis? </label>
                                <input type="text" name="ortesis1"/>
                            </div>
                            
                            
                        </div> 
                        <div className={styles.rows}>
                            
                            <div className={styles.textBox}>
                                <label for="dignostic"> Diagnostico medico: </label>
                                <textarea name="diagnostic" cols="30" rows="3"></textarea>
                            </div>
                            <div className={styles.textBox}>
                                <label for="historyInjuries"> Antecedentes: </label>
                                <textarea name="historyInjuries" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                    </form>
                    <h2 className={styles.titleFt}>EXPLORACIÓN FISÍCA</h2>
                    <form  className={styles.containerForm}>
                    <div className={styles.rows}>
                            <div className={styles.field}>
                                <label for="fc">Signos vitales: </label>
                                <input type="text" placeholder="FC:" name="fc"/>
                                <label for="fr"></label>
                                <input type="text" placeholder="FR:" name="fr" />
                                <label for="ta"></label>
                                <input type="text" placeholder="TA:" name="ta" />
                            </div>
                            <div className={styles.field}>
                                <label for="talla">Antropometría: </label>
                                <input type="text" placeholder="Talla:" name="talla"/>
                                <label for="peso"></label>
                                <input type="text" placeholder="Peso:" name="pesa" />
                                <label for="imc"></label>
                                <input type="text" placeholder="IMC:" name="ta" />
                            </div>
                            <div className={styles.field}>
                                <label for="prueba">Flexibilidad (MMSS): </label>
                                <input type="text" placeholder="Prueba" name="prueba"/>
                                <label for="derecha"></label>
                                <input type="text" placeholder="Derecha:" name="derecha" />
                                <label for="izquierda"></label>
                                <input type="text" placeholder="Izquierda:" name="izquierda" />
                            </div>
                            <div className={styles.field}>
                                <label for="prueba">Flexibilidad (MMII): </label>
                                <input type="text" placeholder="Prueba" name="prueba"/>
                                <label for="derecha"></label>
                                <input type="text" placeholder="Derecha:" name="derecha" />
                                <label for="izquierda"></label>
                                <input type="text" placeholder="Izquierda:" name="izquierda" />
                            </div>
                        </div>
                        <div className={styles.rows}>
                            <div className={styles.radio}>
                                <label for="pain"> Dolor: </label>
                                <div>
                                    <input type="radio" name="pain" value="si" /> Si
                                </div>
                                <div>
                                    <input type="radio" name="pain" value="no" /> No
                                </div>
                            </div>
                            <div className={styles.field}>
                                <label for="painScale">Escala de dolor (1 - 10)</label>
                                <input type="number" name="painScale" min="1" max="10"/>
                            </div>  
                            <div className={styles.radio}>
                                <label for="edema"> Edema: </label>
                                <div>
                                    <input type="radio" name="edema" value="si" /> Si
                                </div>
                                <div>
                                   <input type="radio" name="edema" value="no" /> No
                                </div>                                     
                            </div>
                            <div className={styles.field}>
                                    <label for="place">Lugar</label>
                                    <input type="text" name="place" />
                            </div>
                            
                            <div className={styles.radio}>
                                <label for="fovea"> Fóvea </label>
                                <div>
                                    <input type="radio" name="fovea" value="si" /> Si
                                </div>
                                <div>
                                    <input type="radio" name="edema" value="no" /> No
                            </div>                                     
                            </div>
                            <div className={styles.field}>
                            <label for="sexo">Perímetro: </label>
                                <select>
                                    <option selected disabled value="X" name="sexo">Seleccione una Opción</option>
                                    <option value="izquierdo" name="fovea">Izquierdo</option>
                                    <option value="derecho" name="fovea">Derecho</option>
                                </select>  
                            </div> 
                                     
                        </div>
                        <div className={styles.rowsT}>     
                            <div className={styles.textBox}>
                                <label for="goniometria"> Goniometría: </label>
                                <textarea name="goniometria" cols="30" rows="3"></textarea>
                            </div>       
                            <div className={styles.textBox}>
                                <label for="marcha"> Marcha: </label>
                                <textarea name="marcha" cols="30" rows="3"></textarea>
                            </div>  

                            
                        </div>
                        

            
                        
                    </form>

                </div>
            </div>
            
        </main>
        </>

        
    )
}