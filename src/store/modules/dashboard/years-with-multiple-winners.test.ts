import { store } from '~/store'
import { getYearsWithMultipleWinners } from '~/utils/services/dashboard-service'
import { AsyncActions } from './years-with-multiple-winners'

jest.mock('~/utils/services/dashboard-service')

const mockedGetYearsWithMultipleWinners =
  getYearsWithMultipleWinners as jest.MockedFunction<typeof getYearsWithMultipleWinners>

const mockedResponse = {
  years: [
    {
      year: 1986,
      winnerCount: 2
    },
    {
      year: 1990,
      winnerCount: 2
    },
    {
      year: 2015,
      winnerCount: 2
    }
  ]
}

describe('"Years with multiple winners" State Module', () => {
  beforeEach(() => {
    mockedGetYearsWithMultipleWinners.mockResolvedValue({
      data: mockedResponse
    } as any)
  })

  afterEach(() => {
    mockedGetYearsWithMultipleWinners.mockClear()
  })

  it('fetches data correctly', async () => {
    await store.dispatch(AsyncActions.fetchData())

    const { dashboard: { yearsWithMultipleWinners } } = store.getState()

    expect(yearsWithMultipleWinners.data).toBe(mockedResponse)

    expect(yearsWithMultipleWinners.isLoading).toBe(false)

    expect(mockedGetYearsWithMultipleWinners).toBeCalled()
  })

  it('handles error on fail', async () => {
    const error = new Error('Unknown Error')

    mockedGetYearsWithMultipleWinners.mockRejectedValue(error)

    await store.dispatch(AsyncActions.fetchData())

    const { dashboard: { yearsWithMultipleWinners } } = store.getState()

    expect(yearsWithMultipleWinners.error!.message).toBe(error.message)

    expect(yearsWithMultipleWinners.isLoading).toBe(false)

    expect(mockedGetYearsWithMultipleWinners).toBeCalled()
  })
})