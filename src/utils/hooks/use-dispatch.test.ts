import * as ReactRedux from 'react-redux'
import { act, renderHook } from '@testing-library/react'

import useDispatch from './use-dispatch'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}))

const mockedDispatch = jest.fn()

describe('useDispatch hook', () => {
  beforeAll(() => {
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockedDispatch)
  })

  afterEach(() => {
    mockedDispatch.mockClear()
  })

  it('returns dispatch function from Redux store', () => {
    const { result } = renderHook(() => useDispatch())

    expect(result.current).toBe(mockedDispatch)
  })

  it('dispatches actions correctly', () => {
    const action = { type: 'TEST_ACTION', payload: 'test payload' }

    const { result } = renderHook(() => useDispatch())

    act(() => {
      result.current(action)
    })

    expect(mockedDispatch).toHaveBeenCalledWith(action)
  })
})