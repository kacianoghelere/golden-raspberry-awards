import * as ReactRedux from 'react-redux'
import { renderHook } from '@testing-library/react'

import { RootState } from '~/store'
import { generateMovies } from '~/@tests/generators'
import useSelector from './use-selector'

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

const mockedUseSelector =
  ReactRedux.useSelector as jest.MockedFunction<typeof ReactRedux.useSelector>

const mockedMoviesState = {
  data: generateMovies(2)
}

const mockedWinnerMoviesByYearState = {
  data: generateMovies(2)
}

const mockedStudiosWithWinCountState = {
  data: {
    studios: [
      {
        name: 'Studio 1',
        winCount: 5
      },
      {
        name: 'Studio 2',
        winCount: 3
      },
      {
        name: 'Studio 3',
        winCount: 2
      }
    ]
  }
}

describe('useSelector hook', () => {
  beforeAll(() => {
    mockedUseSelector.mockImplementation((selector) => selector({
      dashboard: {
        studiosWithWinCount: mockedStudiosWithWinCountState,
        winnerMoviesByYear: mockedWinnerMoviesByYearState
      },
      movies: mockedMoviesState
    } as any as RootState))
  })

  it('returns selected state from Redux store', () => {
    const { result } = renderHook(() => useSelector(({ movies }) => movies.data))

    expect(result.current).toBe(mockedMoviesState.data)
  })

  it('handles different selected states correctly', () => {
    const { result: result1 } = renderHook(() => useSelector(({ dashboard }) => (
      dashboard.studiosWithWinCount.data
    )))

    expect(result1.current!.studios).toBe(mockedStudiosWithWinCountState.data.studios)

    const { result: result2 } = renderHook(() => useSelector(({ dashboard }) => (
      dashboard.winnerMoviesByYear.data
    )))

    expect(result2.current!).toBe(mockedWinnerMoviesByYearState.data)
  })
})
