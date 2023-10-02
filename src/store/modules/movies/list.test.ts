import { generateMovies } from '~/@tests/generators'
import { store } from '~/store'
import { getMoviesList } from '~/utils/services/movies-service'
import { AsyncActions } from './list'

jest.mock('~/utils/services/movies-service')

const mockedGetMoviesList =
  getMoviesList as jest.MockedFunction<typeof getMoviesList>

const mockedMoviesList = generateMovies(2)

describe('Movies State Module', () => {
  beforeEach(() => {
    mockedGetMoviesList.mockResolvedValue({
      data: {
        content: mockedMoviesList,
        number: 1,
        size: 2,
        totalPages: 1
      }
    } as any)
  })

  afterEach(() => {
    mockedGetMoviesList.mockClear()
  })

  it('fetches movies list data', async () => {
    await store.dispatch(AsyncActions.fetchMovies())

    const { movies } = store.getState()

    expect(movies.data?.content).toBe(mockedMoviesList)

    expect(movies.data?.size).toBe(2)

    expect(movies.data?.totalPages).toBe(1)

    expect(mockedGetMoviesList).toBeCalled()
  })
})