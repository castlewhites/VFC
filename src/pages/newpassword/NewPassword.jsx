import styles from "./NewPassword.module.css"
import { Link } from "react-router-dom";

export function NewPassword(){
    return(
        <form className={styles.containerNewPassword}>
            <div>
                <h2 class={styles.titleNewPassword}>¿Olvidaste tu Contraseña?</h2>
                <label for="email"></label>
                <input type="email"  className={styles.inputEmail} placeholder="Email" name="email" required/>
                <button type="submit" className={styles.buttonNewPassword}>Cambiar Contraseña</button>
                <span className={styles.back}><Link className={styles.link} to="/">Regresar</Link></span>
            </div>
        </form>
    )
}