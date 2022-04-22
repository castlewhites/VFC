import  NavBar  from "../../NavBar"
import styles from "./NewPatient.module.css"
import { Link } from "react-router-dom"
import draxo from "../../img/draxo.png"


export function NewPatient(){
    return(
        <>
        <header>
            <NavBar/>   
        </header>
         <div className={styles.container}>
         <form className={styles.containerForm}>
             <img src={draxo} alt="logo"
                 className={styles.logo}/>
             <h2 className={styles.titleRegister}>Nuevo Paciente</h2>
             <div>
                 <label for="uname"></label>
                 <input type="text" className={styles.inputName} placeholder="Nombre de Usuario" name="uname"/>
             </div>
     
             <div>
                <label for="year"></label>
                 <input type="number"  className={styles.input} placeholder="Edad" name="year"/>
                 <label for="date"></label>
                 <input type="date"  className={styles.input} placeholder="" name="date" required/>
                 
             </div>
             <div>
                 <label for="cc"></label>
                 <input type="number"  className={styles.input} placeholder="C.C" name="cc" />
                 <label for="barrio"></label>
                 <input type="text"  className={styles.input} placeholder="Barrio" name="barrio" />
             </div>
             <div>
                 <label for="email"></label>
                 <input type="email"  className={styles.input} placeholder="Correo" name="email" />
                 <label for="number"></label>
                 <input type="number"  className={styles.input} placeholder="Telefono" name="number" /> 
             </div>
             <div>
                 <label for="peso"></label>
                 <input type="number"  className={styles.input} placeholder="peso (Kg)" name="peso" />
                 <label for="estatura"></label>
                 <input type="number"  className={styles.input} placeholder="Estatura (Cm)" name="estatura" />
             </div>
             <div>
                 <button type="submit" className={styles.button}>Envíar</button>
             </div>
             <span >
                 <Link className={styles.link} to="/PlayerList">Regresar</Link>
            </span>
         </form>
     </div>        
        </>
    )
}