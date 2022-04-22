import styles from "./Register.module.css"
import { Link } from "react-router-dom";

export function Register(){
    return(
        <form className={styles.containerRegister}>
            <div>
                <h2 className={styles.titleRegister}>Crear Una Nueva Cuenta</h2>
                <label for="uname"></label>
                <input type="text" className={styles.inputText} id="name" placeholder="Nombre de Usuario" name="uname"/>
                <label for="email"></label>
                <input type="email"  className={styles.inputEmail} placeholder="Email" name="email" required/>
                <label for="upassword"></label>
                <input type="password"  className={styles.inputPassword} placeholder="Contraseña" name="upassword" required/>
                <button type="submit" className={styles.buttonRegister}>Envíar</button>
                <span className={styles.back}><Link className={styles.link} to="/">Regresar</Link></span>            
            </div>
        </form>
    )
}