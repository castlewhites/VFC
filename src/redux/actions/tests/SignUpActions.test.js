import { SignUpFailed, SignUpStarted, SignUpSuccess } from '../SignUpActions'
import {
  SIGN_UP_FAILED,
  SIGN_UP_STARTED,
  SIGN_UP_SUCCESS,
} from '../../constants'

describe('SignUp actions', () => {
  it('has a type of SIGN_UP_STARTED', () => {
    const expected = {
      type: SIGN_UP_STARTED,
    }
    expect(SignUpStarted()).toEqual(expected)
  })

  it('has a type of SIGN_UP_SUCCESS', () => {
    const expected = {
      type: SIGN_UP_SUCCESS,
    }
    expect(SignUpSuccess()).toEqual(expected)
  })

  it('has a type of SIGN_UP_FAILED', () => {
    const expected = {
      type: SIGN_UP_FAILED,
    }
    expect(SignUpFailed()).toEqual(expected)
  })
})
