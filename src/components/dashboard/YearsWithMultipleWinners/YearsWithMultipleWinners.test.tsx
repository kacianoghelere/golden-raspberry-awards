import React from 'react'

import { render } from '~/@tests'
import { generateYearsWithMultipleWinners } from '~/@tests/generators'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import { useSelector } from '~/utils/hooks'
import { ErrorIndicator, LoadingIndicator } from '~/components/commons'
import YearsWithMultipleWinners from './YearsWithMultipleWinners'
import YearsWithMultipleWinnersList from './YearsWithMultipleWinnersList/YearsWithMultipleWinnersList'

jest.mock('~/store/modules/dashboard/winner-movies-by-year', () => ({
  AsyncActions: {
    fetchData: jest.fn()
  }
}))

jest.mock('~/utils/hooks', () => mockHooksConfig())

const mockedUseSelector = useSelector as jest.Mock

const renderComponent = () => render(<YearsWithMultipleWinners />)

const mockedYearsWithMultipleWinners = generateYearsWithMultipleWinners(5)

describe('YearsWithMultipleWinners', () => {
  beforeEach(() => {
    mockedUseSelector.mockReturnValue({
      data: {
        years: mockedYearsWithMultipleWinners
      },
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

  it('renders YearsWithMultipleWinnersList', () => {
    const instance = renderComponent().root

    const yearsList = instance.findByType(YearsWithMultipleWinnersList)

    expect(yearsList.props).toMatchObject({
      yearsWithMultipleWinners: mockedYearsWithMultipleWinners.slice(0, 3)
    })
  })
})
