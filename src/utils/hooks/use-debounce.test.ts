import { renderHook, act } from '@testing-library/react'
import useDebounce from './use-debounce'

describe('useDebounce hook', () => {
  it('debounces the callback function', () => {
    jest.useFakeTimers()

    const callback = jest.fn()

    const { result } = renderHook(() => useDebounce())

    act(() => {
      result.current(callback)
    })

    jest.advanceTimersByTime(499)

    expect(callback).not.toBeCalled()

    jest.advanceTimersByTime(1)

    expect(callback).toBeCalled()
  })

  it('debounces with custom delay', () => {
    jest.useFakeTimers()

    const callback = jest.fn()

    const customDelay = 1000

    const { result } = renderHook(() => useDebounce())

    act(() => {
      result.current(callback, customDelay)
    })

    jest.advanceTimersByTime(999)

    expect(callback).not.toBeCalled()

    jest.advanceTimersByTime(1)

    expect(callback).toBeCalled()
  })
})
