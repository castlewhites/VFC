import { LoginFailed, LoginStarted, LoginSuccess } from '../LoginActions'
import { LOGIN_FAILED, LOGIN_STARTED, LOGIN_SUCCESS } from '../../constants'

describe('Login actions', () => {
  it('has a type of LOGIN_STARTED', () => {
    const expected = {
      type: LOGIN_STARTED,
    }
    expect(LoginStarted()).toEqual(expected)
  })

  it('has a type of LOGIN_SUCCESS', () => {
    const expected = {
      type: LOGIN_SUCCESS,
    }
    expect(LoginSuccess()).toEqual(expected)
  })

  it('has a type of LOGIN_FAILED', () => {
    const expected = {
      type: LOGIN_FAILED,
    }
    expect(LoginFailed()).toEqual(expected)
  })
})
