import { GET_PATIENTS } from '../constants'

export const setPatientList = (payload) => ({
  type: GET_PATIENTS,
  payload,
})

