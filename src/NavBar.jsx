import React, {useEffect} from 'react';
import styles from "./NavBar.module.css"
import vfc from "./img/vfc.png"
import { Link, useLocation  } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import {
    auth,
    getUserName,
} from "./connection/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { logOut } from "./connection/firebase";


// como componente funcional
function NavBar({ userName }){
    const [user] = useAuthState(auth)
    
    const dispatch = useDispatch()
    useEffect(() => {
        if (user) getUserName(user?.uid, dispatch)
    }, [])
    return(      
        <nav className={styles.nav}>
            <div className={styles.j}>
                <img 
                    src={vfc} alt="logo"
                    className={styles.logo}
                />
                <h2 class={styles.tooltip}>{userName.name}
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

function mapStateToProps({ patients }) {
    return {
        userName: patients.userName,
    }
}

export default connect(mapStateToProps)(NavBar)