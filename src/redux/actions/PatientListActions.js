import { GET_PATIENTS, SET_DOCTOR, SET_CLINICAL, CLEAR_CLINICAL } from '../constants'

export const setPatientList = (payload) => ({
  type: GET_PATIENTS,
  payload,
})

export const setDoctor = (payload) => ({
  type: SET_DOCTOR,
  payload,
})

export const setClinicalHistory = (payload) => ({
  type: SET_CLINICAL,
  payload,
})

export const cleanClinicalHistory = (payload) => ({
  type: CLEAR_CLINICAL,
})



