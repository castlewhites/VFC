/* eslint default-param-last: off */
import { GET_PATIENTS, SET_DOCTOR, SET_CLINICAL, CLEAR_CLINICAL } from '../constants'

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

export const initialState = {
  patientList: [],
  doctor: {},
  clinicalHistoryFireBase: clinicalHistoryInitialState
}

// eslint-disable-next-line arrow-body-style

const removeItem = (state, payload) => {
  const updateGuestCart = state.savedProductList.filter(
    (product) => product.id !== payload
  )
  return updateGuestCart
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
    case SET_DOCTOR: {
      return {
        ...state,
        doctor: payload,
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
    
    default:
      return state
  }
}

export default savedListReducer
