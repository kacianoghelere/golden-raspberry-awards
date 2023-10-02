import { StudiosWithWinCount } from '~/@types/dashboard'
import { store } from '~/store'
import { getStudiosWithWinCount } from '~/utils/services/dashboard-service'
import { AsyncActions } from './studios-with-win-count'

jest.mock('~/utils/services/dashboard-service')

const mockedGetStudiosWithWinCount =
  getStudiosWithWinCount as jest.MockedFunction<typeof getStudiosWithWinCount>

const mockedResponse: StudiosWithWinCount = {
  studios: [
    {
      name: 'Columbia Pictures',
      winCount: 7
    },
    {
      name: 'Paramount Pictures',
      winCount: 6
    }
  ]
}

describe('"Studios with win count" State Module', () => {
  beforeEach(() => {
    mockedGetStudiosWithWinCount.mockResolvedValue({
      data: mockedResponse
    } as any)
  })

  afterEach(() => {
    mockedGetStudiosWithWinCount.mockClear()
  })

  it('fetches data correctly', async () => {
    await store.dispatch(AsyncActions.fetchData())

    const { dashboard: { studiosWithWinCount } } = store.getState()

    expect(studiosWithWinCount.data).toBe(mockedResponse)

    expect(studiosWithWinCount.isLoading).toBe(false)

    expect(mockedGetStudiosWithWinCount).toBeCalled()
  })

  it('handles error on fail', async () => {
    const error = new Error('Unknown Error')

    mockedGetStudiosWithWinCount.mockRejectedValue(error)

    await store.dispatch(AsyncActions.fetchData())

    const { dashboard: { studiosWithWinCount } } = store.getState()

    expect(studiosWithWinCount.error!.message).toBe(error.message)

    expect(studiosWithWinCount.isLoading).toBe(false)

    expect(mockedGetStudiosWithWinCount).toBeCalled()
  })
})