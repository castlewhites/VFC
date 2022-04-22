import  NavBar  from "../../NavBar";
import styles from "./PlayerList.module.css"
import { Link } from "react-router-dom"




export function PlayerList(){
    return(
        <>
            <header>
                <NavBar/>   
            </header>
            <main className={styles.container}>        
                <table className={styles.table}>
                <tr>
                   <th>NOMBRE</th> <th>APELLIDO</th> <th>EDAD</th> <th>C.C</th> <th>CORREO</th> <th>CELULAR</th> <th>PESO</th>
                </tr>
                <tr>
                    <td> <Link className={styles.link} to="/PlayerView">Daniel </Link></td><td><Link className={styles.link} to="/PlayerView">Moreno</Link></td>
                    <td> <Link className={styles.link} to="/PlayerView">23 Años</Link></td><td><Link className={styles.link} to="/PlayerView">1036683868</Link></td>
                    <td> <Link className={styles.link} to="/PlayerView">danimoredia@gmail.com </Link></td><td><Link className={styles.link} to="/PlayerView">3004350491</Link></td>
                    <td><Link className={styles.link} to="/PlayerView">75Kg</Link> </td>
                </tr>
                <tr> 
                <td> <Link className={styles.link} to="/PlayerView">Daniel </Link></td><td><Link className={styles.link} to="/PlayerView">Moreno</Link></td>
                    <td> <Link className={styles.link} to="/PlayerView">23 Años</Link></td><td><Link className={styles.link} to="/PlayerView">1036683868</Link></td>
                    <td> <Link className={styles.link} to="/PlayerView">danimoredia@gmail.com </Link></td><td><Link className={styles.link} to="/PlayerView">3004350491</Link></td>
                    <td><Link className={styles.link} to="/PlayerView">75Kg</Link> </td> 
                </tr>
                <tr>
                <td> <Link className={styles.link} to="/PlayerView">Daniel </Link></td><td><Link className={styles.link} to="/PlayerView">Moreno</Link></td>
                    <td> <Link className={styles.link} to="/PlayerView">23 Años</Link></td><td><Link className={styles.link} to="/PlayerView">1036683868</Link></td>
                    <td> <Link className={styles.link} to="/PlayerView">danimoredia@gmail.com </Link></td><td><Link className={styles.link} to="/PlayerView">3004350491</Link></td>
                    <td><Link className={styles.link} to="/PlayerView">75Kg</Link> </td>
                </tr>
                <tr>
                <td> <Link className={styles.link} to="/PlayerView">Daniel </Link></td><td><Link className={styles.link} to="/PlayerView">Moreno</Link></td>
                    <td> <Link className={styles.link} to="/PlayerView">23 Años</Link></td><td><Link className={styles.link} to="/PlayerView">1036683868</Link></td>
                    <td> <Link className={styles.link} to="/PlayerView">danimoredia@gmail.com </Link></td><td><Link className={styles.link} to="/PlayerView">3004350491</Link></td>
                    <td><Link className={styles.link} to="/PlayerView">75Kg</Link> </td>
                </tr>
                </table>
            </main>
        </>

    
    );
}