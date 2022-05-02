import NavBar from "../../NavBar"
import styles from "./ClinicHistory.module.css"

export default function Physiotherapy(){
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
                    <label for="dateI">Fecha de ingreso: </label>
                    <input type="date" name="dateI" required />
                </div>
                <div className={styles.field}>
                    <label for="dateE">Fecha de egreso: </label>
                    <input type="date" name="dateE" required />
                </div>
                <div className={styles.field}>
                    <label for="dateL">Fecha de lesión: </label>
                    <input type="date" name="dateL" required />
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
                    <input type="text" name="ortesis1" />
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
        <button type="button" className={styles.send_history}>
                    Enviar
                </button>
    </main>
    </>
    )
   
}