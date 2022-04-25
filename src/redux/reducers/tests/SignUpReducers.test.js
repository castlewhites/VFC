import signUpReducer, { initialState } from '../SignUpReducers'
import {
  SIGN_UP_FAILED,
  SIGN_UP_STARTED,
  SIGN_UP_SUCCESS,
} from '../../constants'

describe('SignUpReducer', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('returns the initial state', () => {
    const expectedResult = initialState
    expect(signUpReducer(state, {})).toEqual(expectedResult)
  })

  it('Should handle the SIGN_UP_STARTED action', () => {
    const action = {
      type: SIGN_UP_STARTED,
    }
    const expectedResult = {
      ...initialState,
      signUpStarted: true,
      signUpIsLoading: true,
    }
    expect(signUpReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the SIGN_UP_SUCCESS action', () => {
    const action = {
      type: SIGN_UP_SUCCESS,
    }
    const expectedResult = {
      ...initialState,
      signUp: undefined,
      signUpSuccess: true,
    }
    expect(signUpReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the SIGN_UP_FAILED action', () => {
    const action = {
      type: SIGN_UP_FAILED,
      payload: 'error test',
    }
    const expectedResult = {
      ...initialState,
      signUpFailed: {},
      signUpError: 'error test',
    }
    expect(signUpReducer(state, action)).toEqual(expectedResult)
  })
})
