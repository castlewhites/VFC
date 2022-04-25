import loginReducer, { initialState } from '../LoginReducers'
import { LOGIN_FAILED, LOGIN_STARTED, LOGIN_SUCCESS } from '../../constants'

describe('LoginReducers', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('returns the initial state', () => {
    const expectedResult = initialState
    expect(loginReducer(state, {})).toEqual(expectedResult)
  })

  it('Should handle the LOGIN_STARTED action', () => {
    const action = {
      type: LOGIN_STARTED,
    }
    const expectedResult = {
      ...initialState,
      loginStarted: true,
      loginIsLoading: true,
    }
    expect(loginReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the LOGIN_SUCCESS action', () => {
    const action = {
      type: LOGIN_SUCCESS,
      payload: 'success test',
    }
    const expectedResult = {
      ...initialState,
      login: 'success test',
      loginSuccess: true,
    }
    expect(loginReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the LOGIN_FAILED action', () => {
    const action = {
      type: LOGIN_FAILED,
      payload: 'error test',
    }
    const expectedResult = {
      ...initialState,
      login: {},
      loginError: 'error test',
      loginFailed: true,
    }
    expect(loginReducer(state, action)).toEqual(expectedResult)
  })
})
