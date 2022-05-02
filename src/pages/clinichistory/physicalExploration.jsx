import NavBar from "../../NavBar"
import styles from "./ClinicHistory.module.css"

export default function PhysicalExploration(){
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
                        <input type="text" placeholder="FC:" name="fc" />
                        <label for="fr"></label>
                        <input type="text" placeholder="FR:" name="fr" />
                        <label for="ta"></label>
                        <input type="text" placeholder="TA:" name="ta" />
                    </div>
                    <div className={styles.field}>
                        <label for="talla">Antropometría: </label>
                        <input type="text" placeholder="Talla:" name="talla" />
                        <label for="peso"></label>
                        <input type="text" placeholder="Peso:" name="pesa" />
                        <label for="imc"></label>
                        <input type="text" placeholder="IMC:" name="ta" />
                    </div>
                    <div className={styles.field}>
                        <label for="prueba">Flexibilidad (MMSS): </label>
                        <input type="text" placeholder="Prueba" name="prueba" />
                        <label for="derecha"></label>
                        <input type="text" placeholder="Derecha:" name="derecha" />
                        <label for="izquierda"></label>
                        <input type="text" placeholder="Izquierda:" name="izquierda" />
                    </div>
                    <div className={styles.field}>
                        <label for="prueba">Flexibilidad (MMII): </label>
                        <input type="text" placeholder="Prueba" name="prueba" />
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
                        <input type="number" name="painScale" min="1" max="10" />
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
                <div className={styles.rows}>
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
            <button type="button" className={styles.send_history}>
                    Enviar
                </button>
        </main>
        </>
    )   
}