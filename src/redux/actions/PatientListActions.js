import { 
  GET_PATIENTS, 
  SET_USER, 
  SET_CLINICAL, 
  SET_THERAPY, 
  CLEAR_CLINICAL, 
  CLEAR_THERAPY ,
  SET_PREPARE,
  CLEAR_PREPARE
} from '../constants'

export const setPatientList = (payload) => ({
  type: GET_PATIENTS,
  payload,
})

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
})

export const setClinicalHistory = (payload) => ({
  type: SET_CLINICAL,
  payload,
})

export const clearClinicalHistory = (payload) => ({
  type: CLEAR_CLINICAL,
})

export const setTherapy = (payload) => ({
  type: SET_THERAPY,
  payload,
})

export const clearTherapy = (payload) => ({
  type: CLEAR_THERAPY,
})

export const setPrepare = (payload) => ({
  type: SET_PREPARE,
  payload,
})

export const clearPrepare = (payload) => ({
  type: CLEAR_PREPARE,
})



