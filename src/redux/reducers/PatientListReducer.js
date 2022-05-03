/* eslint default-param-last: off */
import { 
  GET_PATIENTS, 
  SET_USER, 
  SET_CLINICAL, 
  SET_THERAPY, 
  CLEAR_CLINICAL,
  CLEAR_THERAPY,
  SET_PREPARE,
  CLEAR_PREPARE,
 } from '../constants'

const clinicalHistoryInitialState = {
  allergy: "NA",
  bloodType: "NA",
  consultation: "NA",
  doctor: "NA",
  idDoc: "NA",
  illness: "NA",
  injury: "NA",
  medicine: "NA",
  sex: "NA",
  surgery: "NA",
  surgeryBool: "NA",
  tranfusion: "NA",
  tranfusionReaction: "NA",
}

const initialStateTherapy = {
  inDate: "",
  outDate: "",
  injuryBool: "",
  injuryDate:"",
  orthesisBool: "",
  orthesis: "",
  diagnosis:"",
  record: "",
  idDoc: "",
}

const initialStatePrepare = {
  fc: "",
  fr: "",
  ta: "",
  bt: "",
  size: "",
  weight: "",
  mci: "",
  testMmss: "",
  rhandMmss: "",
  lhandMmss: "",
  testMmii: "",
  rhandMmii: "",
  lhandMmii: "",
  painBool: "",
  painScale: "",
  edema: "",
  fovea: "",
  perometer: "",
  goniometry: "",
  march: "",
}

export const initialState = {
  patientList: [],
  userName: {},
  therapy: initialStateTherapy,
  clinicalHistoryFireBase: clinicalHistoryInitialState,
  prepare: initialStatePrepare,
}

const savedListReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PATIENTS: {
      return {
        ...state,
        patientList: payload,
      }
    }
    case SET_USER: {
      return {
        ...state,
        userName: payload,
      }
    }
    case SET_CLINICAL: {
      return {
        ...state,
        clinicalHistoryFireBase: payload,
      }
    }
    case CLEAR_CLINICAL: {
      return {
        ...state,
        clinicalHistoryFireBase: clinicalHistoryInitialState
      }
    }
    case SET_THERAPY: {
      return {
        ...state,
        therapy: payload,
      }
    }
    case CLEAR_THERAPY: {
      return {
        ...state,
        therapy: initialStateTherapy
      }
    }
    case SET_PREPARE: {
      return {
        ...state,
        prepare: payload,
      }
    }
    case CLEAR_PREPARE: {
      return {
        ...state,
        prepare: initialStatePrepare
      }
    }
    
    default:
      return state
  }
}

export default savedListReducer
