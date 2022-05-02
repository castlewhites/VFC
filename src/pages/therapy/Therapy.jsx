import React, { useEffect, useState } from "react";
import styles from "./Therapy.module.css"
import NavBar from "../../NavBar"
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { addTherapy } from "../../connection/firebase"


function Therapy({ patientList, userName }) {
  const [therapyLocal, setTherapyLocal] = useState({})
  const navigate = useNavigate()
  const params = useParams()
  const { id } = params
  const currentPatient = patientList?.filter((patient => patient.idDoc === id))
  const therapyPatient = currentPatient[0]
  const sendTherapy = () => {
    addTherapy({ ...therapyLocal, doctor: userName.name, idDoc: id }, navigate)
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className={styles.container}>
        <h1 className={styles.titleFt}>Fisio-Terapia</h1>
        <h2 style={{ marginLeft: "20px" }}>
          <b>Paciente: </b> {therapyPatient.nameP}
        </h2>
        <form className={styles.containerForm}>
          <div className={styles.cols}>
            <div className={styles.field}>
              <label for="dateI">Fecha de ingreso: </label>
              <input type="date" name="dateI" required />
            </div>
            <div className={styles.radio}>
              <label for="injury">Reporte de lesión: </label>
              <div>
                <input type="radio" name="injury" value="si" /> Si
              </div>
              <div>
                <input type="radio" name="injury" value="no" /> No
              </div>
            </div>
            <div className={styles.field}>
              <label for="dateL">Fecha de lesión: </label>
              <input type="date" name="dateL" required />
            </div>
            <div className={styles.textBox}>
              <label for="dignostic"> Diagnostico medico: </label>
              <textarea name="diagnostic" cols="30" rows="3"></textarea>
            </div>
          </div>
          <div className={styles.cols}>
            <div className={styles.field}>
              <label for="dateE">Fecha de egreso: </label>
              <input type="date" name="dateE" required />
            </div>
          </div>
          <div className={styles.rows}>
            
            
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
              <label for="historyInjuries"> Antecedentes: </label>
              <textarea name="historyInjuries" cols="30" rows="3"></textarea>
            </div>
          </div>
        </form>
        <button type="button" className={styles.send_history} onClick={() => sendTherapy()}>
          Enviar
        </button>
      </main>
    </>

  )
}

function mapStateToProps({ patients }) {
  return {
    patientList: patients.patientList,
    userName: patients.userName
  }
}

export default connect(mapStateToProps)(Therapy)