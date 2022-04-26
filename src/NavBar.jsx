import React from 'react';
import styles from "./NavBar.module.css"
import draxo from ".//img/draxo.png"
import { Link, useLocation  } from "react-router-dom";
import { logOut } from "./connection/firebase";


// como componente funcional
export default function NavBar(){
    return(      
        <nav className={styles.nav}>
            <div className={styles.j}>
                <img src={draxo} alt="logo"
                className={styles.logo}/>
                <h2 class={styles.tooltip}>VFC
                    <span class={styles.tooltiptext}>VALLEDUPAR FUTBOL CLUB</span>
                </h2>
            </div>

            <ul className={styles.navMenu}>
                <li className={styles.navMenuItem}>
                    <Link className={styles.link} to="/PlayerList">Jugadores</Link>
                </li>
                <li className={styles.navMenuItem}>
                    <Link className={styles.link} to="/NewPatient">Nuevo Paciente</Link>
                </li>  
                <li className={styles.navMenuItem}>
                    <Link className={styles.link} to="/" onClick={()=> logOut()}>Cerrar Sesión</Link>
                </li>  
            </ul>
        </nav>
    )       
}