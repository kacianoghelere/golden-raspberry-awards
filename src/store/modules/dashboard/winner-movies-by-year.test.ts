import { generateMovies } from '~/@tests/generators'
import { store } from '~/store'
import { getWinnerMoviesByYear } from '~/utils/services/dashboard-service'
import { AsyncActions } from './winner-movies-by-year'

jest.mock('~/utils/services/dashboard-service')

const mockedGetWinnerMoviesByYear =
  getWinnerMoviesByYear as jest.MockedFunction<typeof getWinnerMoviesByYear>

const mockedMovies = generateMovies(5)

describe('"Winner movies by year" State Module', () => {
  beforeEach(() => {
    mockedGetWinnerMoviesByYear.mockResolvedValue({
      data: mockedMovies
    } as any)
  })

  afterEach(() => {
    mockedGetWinnerMoviesByYear.mockClear()
  })

  it('fetches data correctly', async () => {
    const params = { year: 2000 }

    await store.dispatch(AsyncActions.fetchData(params))

    const { dashboard: { winnerMoviesByYear } } = store.getState()

    expect(winnerMoviesByYear.data).toBe(mockedMovies)

    expect(winnerMoviesByYear.isLoading).toBe(false)

    expect(mockedGetWinnerMoviesByYear).toBeCalledWith(params)
  })

  it('handles error on fail', async () => {
    const error = new Error('Unknown Error')

    mockedGetWinnerMoviesByYear.mockRejectedValue(error)

    const params = { year: 2000 }

    await store.dispatch(AsyncActions.fetchData(params))

    const { dashboard: { winnerMoviesByYear } } = store.getState()

    expect(winnerMoviesByYear.error!.message).toBe(error.message)

    expect(winnerMoviesByYear.isLoading).toBe(false)

    expect(mockedGetWinnerMoviesByYear).toBeCalledWith(params)
  })
})