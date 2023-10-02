import React from 'react'

import { render } from '~/@tests'
import { StudiosWithWinCount } from '~/@types/dashboard'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import { useSelector } from '~/utils/hooks'
import { ErrorIndicator, LoadingIndicator } from '~/components/commons'
import TopStudiosWithWinners from './TopStudiosWithWinners'
import TopStudiosWithWinnersList from './TopStudiosWithWinnersList/TopStudiosWithWinnersList'

jest.mock('~/store/modules/dashboard/winner-movies-by-year', () => ({
  AsyncActions: {
    fetchData: jest.fn()
  }
}))

jest.mock('~/utils/hooks', () => mockHooksConfig())

const mockedUseSelector = useSelector as jest.Mock

const renderComponent = () => render(<TopStudiosWithWinners />)

const mockedTopStudiosWithWinners: StudiosWithWinCount = {
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

describe('TopStudiosWithWinners', () => {
  beforeEach(() => {
    mockedUseSelector.mockReturnValue({
      data: mockedTopStudiosWithWinners,
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

  it('renders TopStudiosWithWinnersList', () => {
    const instance = renderComponent().root

    const studiosList = instance.findByType(TopStudiosWithWinnersList)

    expect(studiosList.props).toMatchObject({
      studiosWithWinCount: mockedTopStudiosWithWinners.studios.slice(0, 3)
    })
  })
})
