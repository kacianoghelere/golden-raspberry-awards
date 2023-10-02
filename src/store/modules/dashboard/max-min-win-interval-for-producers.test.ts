import { MaxMinWinIntervalForProducers } from '~/@types/dashboard'
import { store } from '~/store'
import { getMaxMinWinIntervalForProducers } from '~/utils/services/dashboard-service'
import { AsyncActions } from './max-min-win-interval-for-producers'

jest.mock('~/utils/services/dashboard-service')

const mockedGetMaxMinWinIntervalForProducers =
  getMaxMinWinIntervalForProducers as jest.MockedFunction<typeof getMaxMinWinIntervalForProducers>

const mockedResponse: MaxMinWinIntervalForProducers = {
  max: [{
    followingWin: 2015,
    interval: 13,
    previousWin: 2002,
    producer: 'Matthew Vaughn'
  }],
  min: [{
    followingWin: 1991,
    interval: 1,
    previousWin: 1990,
    producer: 'Joel Silver'
  }]
}

describe('"Max and min win interval for producers" State Module', () => {
  beforeEach(() => {
    mockedGetMaxMinWinIntervalForProducers.mockResolvedValue({
      data: mockedResponse
    } as any)
  })

  afterEach(() => {
    mockedGetMaxMinWinIntervalForProducers.mockClear()
  })

  it('fetches data correctly', async () => {
    await store.dispatch(AsyncActions.fetchData())

    const { dashboard: { maxMinWinIntervalForProducers } } = store.getState()

    expect(maxMinWinIntervalForProducers.data).toBe(mockedResponse)

    expect(maxMinWinIntervalForProducers.isLoading).toBe(false)

    expect(mockedGetMaxMinWinIntervalForProducers).toBeCalled()
  })

  it('handles error on fail', async () => {
    const error = new Error('Unknown Error')

    mockedGetMaxMinWinIntervalForProducers.mockRejectedValue(error)

    await store.dispatch(AsyncActions.fetchData())

    const { dashboard: { maxMinWinIntervalForProducers } } = store.getState()

    expect(maxMinWinIntervalForProducers.error!.message).toBe(error.message)

    expect(maxMinWinIntervalForProducers.isLoading).toBe(false)

    expect(mockedGetMaxMinWinIntervalForProducers).toBeCalled()
  })
})