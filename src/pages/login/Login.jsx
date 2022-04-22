import styles from "./Login.module.css"
import { Link } from "react-router-dom";

export function Login(){
    return (
    <div>
        <form className={styles.containerLogin}>
            <h2 className={styles.titleLogin}>Bienvenido</h2>
            <div>
                <label for="uname"></label>
                <input type="text" className={styles.inputText} id="name" placeholder="Nombre de Usuario" name="uname"/>
            </div>
            <div>
                <label for="psw"></label>
                <input type="password" className={styles.inputPassword} id="password" placeholder="Contraseña" name="psw"/>      
            </div>
                <span className={styles.fpsw}><Link className={styles.link} to="/NewPassword">Nueva Contraseña</Link></span>
            <div>
               <Link className={styles.linkButton} to="/PlayerList"><button type="submit" className={styles.buttonLogin} >Ingresar</button></Link> 
            </div>
            <span className={styles.cna}><Link className={styles.link} to="/Register">Crear Nueva Cuenta</Link></span>
        </form>
    </div>
    )
}