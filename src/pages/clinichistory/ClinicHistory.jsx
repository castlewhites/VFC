import styles from "./ClinicHistory.module.css"
import NavBar from "../../NavBar"

export function ClinicHistory(){
    return(
        <>
        <header>
            <NavBar/>  
        </header>
        <main className={styles.container}>
            <h1 className={styles.title}>Historia Clínica</h1>
            <form className={styles.containerForm}>
                
                {/* Datos personales */}
                <div className={styles.rows}>
                    <div className={styles.field}>
                        {/* <label for="uname"><h3>Datos Personales</h3> <br /> Nombre: </label> */}
                        <label for="uname"> Nombre: </label>
                        <input type="text"  name="uname"/>
                    
                    </div>-
                    <div className={styles.field}>
                        <label for="lastname">Apellidos: </label>
                        <input type="text"  name="lastname"/>
                    </div>
                    <div className={styles.field}>
                        <label for="year">Edad: </label>
                        <input type="number"  name="year"/>
                    </div>
                    <div className={styles.field}>
                        <label for="date">Fecha de nacimiento:</label>
                        <input type="date"  name="date" required/>
                    </div>
                </div>
                <div className={styles.rows}>
                    <div className={styles.field}>
                        <label for="cc">N° Identificación: </label>
                        <input type="number" name="cc" />
                    </div>
                    <div className={styles.field}>
                        <label for="sexo">Sexo: </label>
                        <select>
                            <option selected disabled value="X" name="sexo">Seleccione una Opción</option>
                            <option value="M" name="sexo">Maculino</option>
                            <option value="F" name="sexo">Fememino</option>

                        </select>
                        
                    </div>
                    <div className={styles.field}>
                        <label for="number">Numero: </label>
                        <input type="number"  name="number" /> 
                    </div>
                    <div className={styles.field}>
                        <label for="direccion">Dirección: </label>
                        <input type="text" name="direccion"/>
                    </div>
                </div>
                <div className={styles.rowTextbox}>
                    <div className={styles.textBox}>
                        <label for="consulta"> <h4>Motivo de consulta: </h4> </label>
                        <textarea name="consulta" cols="30" rows="5"></textarea>
                    </div>
                    <div className={styles.textBox}>
                        <label for="lesion"> <h4>Descripción de la lesión: </h4> </label>
                        <textarea name="lesion" cols="30" rows="5"></textarea>
                    </div>
                    <div className={styles.textBox}>
                        <label for="enfermedad"> <h4>Enfermedad actual (Descripción): </h4> </label>
                        <textarea name="enfermedad" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div className={styles.rows}>
                    <div className={styles.field}>
                        <label for="medicamento">Está tomando algún medicamento: </label>
                        <input type="text" placeholder="¿Cuál?"  name="medicamento"/>
                    </div>
                    <div className={styles.field}>
                        <label for="alergia">Alergias a medicamentos: </label>
                        <input type="text" placeholder="¿Cuales?" name="alergia"/>
                    </div>
                    <div className={styles.field}>
                        <label for="tipoSangre">Grupo sanguíneo: </label>
                        <select>
                            <option selected disabled value="X" name="tipoSangre">Seleccione una Opción</option>
                            <option value="o-" name="tipoSangre">O-</option>
                            <option value="o+" name="tipoSangre">O+</option>
                            <option value="a-" name="tipoSangre">A-</option>
                            <option value="a+" name="tipoSangre">A+</option>
                            <option value="b-" name="tipoSangre">B-</option>
                            <option value="b+" name="tipoSangre">B+</option>
                            <option value="ab-" name="tipoSangre">AB-</option>
                            <option value="ab+" name="tipoSangre">AB+</option>
                        </select>   
                    </div>
                    <div className={styles.radio}>
                    <label for="tranfusion">¿Has hecho alguna transfusión?</label>
                        <div>
                            <input type="radio" name="tranfusion" value="si" /> Si
                        </div>
                        <div>
                            <input type="radio" name="tranfusion" value="no" /> No
                        </div>
                    </div>
                </div>
                <div className={styles.rows}>
                    <div className={styles.field}>
                        <label for="inconveniente">¿Has tenido alguna reacción la transfusión?</label>
                        <input type="text" placeholder="¿Cuál?" name="inconveniente"/>
                    </div>                    
                    <div className={styles.radio}>
                    <label for="cirugia">¿Has tenido alguna cirugía? </label>
                    <div>
                        <input type="radio" name="cirugia"  value="si"/> Si
                    </div>
                    <div>
                        <input type="radio" name="cirugia" /> No
                    </div>
                    </div>
                    <div className={styles.textBox}>
                        <textarea name="lesion" cols="30" rows="5" placeholder="¿Cuál? ¿Cuándo?"></textarea>          
                    </div>
                    
                    <div className={styles.field}>
                        <label for="doctor">Doctor responsable: </label>
                        <input type="text" name="doctor"/>
                    </div>      
                </div>
                    
             
            </form>
        </main>
        </>
        
    )
}