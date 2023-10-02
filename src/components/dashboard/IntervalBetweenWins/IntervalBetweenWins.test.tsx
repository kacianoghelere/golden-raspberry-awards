import React from 'react'

import { render } from '~/@tests'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import { useSelector } from '~/utils/hooks'
import { ErrorIndicator, LoadingIndicator } from '~/components/commons'
import IntervalBetweenWins from './IntervalBetweenWins'

jest.mock('~/store/modules/dashboard/max-min-win-interval-for-producers', () => ({
  AsyncActions: {
    fetchData: jest.fn()
  }
}))

jest.mock('~/utils/hooks', () => mockHooksConfig())

const mockedUseSelector = useSelector as jest.Mock

const renderComponent = () => render(<IntervalBetweenWins />)

const mockedIntervalsInfo = {
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

describe('IntervalBetweenWins', () => {
  beforeEach(() => {
    mockedUseSelector.mockReturnValue({
      data: mockedIntervalsInfo,
      error: undefined,
      isLoading: false
    })
  })

  afterEach(() => {
    mockedUseSelector.mockClear()
  })

  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })

  it('renders LoadingIndicator while loading data', () => {
    mockedUseSelector.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true
    })

    const instance = renderComponent().root

    const loadingIndicator = instance.findByType(LoadingIndicator)

    expect(loadingIndicator).toBeTruthy()
  })

  it('renders ErrorIndicator when data fetch fails', () => {
    mockedUseSelector.mockReturnValue({
      data: undefined,
      error: new Error('Unknown Error'),
      isLoading: false
    })

    const instance = renderComponent().root

    const errorIndicator = instance.findByType(ErrorIndicator)

    expect(errorIndicator).toBeTruthy()
  })

  it('renders WinIntervalInfo with max interval data', () => {
    const instance = renderComponent().root

    const testID = 'max-win-interval-info'

    const maxWinIntervalInfo = instance.findByProps({ testID })

    expect(maxWinIntervalInfo.props).toMatchObject({
      intervalInfo: mockedIntervalsInfo.max[0],
      testID,
      title: 'Maximum'
    })
  })

  it('renders WinIntervalInfo with min interval data', () => {
    const instance = renderComponent().root

    const testID = 'min-win-interval-info'

    const minWinIntervalInfo = instance.findByProps({ testID })

    expect(minWinIntervalInfo.props).toMatchObject({
      intervalInfo: mockedIntervalsInfo.min[0],
      testID,
      title: 'Minimum'
    })
  })
})
