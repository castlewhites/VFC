/* eslint default-param-last: off */
import { GET_PATIENTS } from '../constants'

export const initialState = {
  patientList: [],
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
    
    default:
      return state
  }
}

export default savedListReducer
