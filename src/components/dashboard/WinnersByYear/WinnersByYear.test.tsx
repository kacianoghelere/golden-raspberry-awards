import React from 'react'

import { render } from '~/@tests'
import { generateMovies } from '~/@tests/generators'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import { AsyncActions } from '~/store/modules/dashboard/winner-movies-by-year'
import { useSelector } from '~/utils/hooks'
import { ErrorIndicator, LoadingIndicator } from '~/components/commons'
import WinnersByYear from './WinnersByYear'
import WinnersByYearList from './WinnersByYearList/WinnersByYearList'

jest.mock('~/store/modules/dashboard/winner-movies-by-year', () => ({
  AsyncActions: {
    fetchData: jest.fn()
  }
}))

const mockedFetchData =
  AsyncActions.fetchData as jest.MockedFunction<typeof AsyncActions.fetchData>

jest.mock('~/utils/hooks', () => mockHooksConfig())

const mockedUseSelector = useSelector as jest.Mock

const renderComponent = () => render(<WinnersByYear />)

const mockedMovies = generateMovies(5)

describe('WinnersByYear', () => {
  beforeEach(() => {
    mockedUseSelector.mockReturnValue({
      data: mockedMovies,
      error: undefined,
      isLoading: false
    })
  })

  afterEach(() => {
    mockedFetchData.mockClear()

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

  it('renders WinnersByYearList', () => {
    const instance = renderComponent().root

    const year = '2001'

    const winnersByYearList = instance.findByType(WinnersByYearList)
    winnersByYearList.props.onSearch('2001')

    expect(mockedFetchData).toBeCalledWith({ year: Number(year) })

    expect(winnersByYearList.props).toMatchObject({
      movies: mockedMovies
    })
  })
})
