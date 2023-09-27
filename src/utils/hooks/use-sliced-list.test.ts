import { renderHook } from '@testing-library/react-hooks'

import useSlicedList from './use-sliced-list'

describe('useSlicedList', () => {
  it('returns an empty array when list is undefined', () => {
    const { result } = renderHook(() => useSlicedList(undefined, 5))

    expect(result.current).toEqual([])
  })

  it('returns an empty array when limit is 0', () => {
    const { result } = renderHook(() => useSlicedList([1, 2, 3, 4, 5], 0))

    expect(result.current).toEqual([])
  })

  it('returns a sliced list when list and limit are provided', () => {
    const { result } = renderHook(() => useSlicedList([1, 2, 3, 4, 5], 3))

    expect(result.current).toEqual([1, 2, 3])
  })

  it('returns the full list when limit is greater than the list length', () => {
    const { result } = renderHook(() => useSlicedList([1, 2, 3, 4, 5], 10))

    expect(result.current).toEqual([1, 2, 3, 4, 5])
  })

  it('returns the same array reference when inputs have not changed', () => {
    const { result, rerender } = renderHook(
      ({ list, limit }: any) => useSlicedList(list, limit),
      {
        initialProps: { list: [1, 2, 3, 4, 5], limit: 3 }
      }
    )

    const initialResult = result.current

    rerender({ list: [1, 2, 3, 4, 5], limit: 3 })

    expect(result.current).toBe(initialResult)
  })
})
