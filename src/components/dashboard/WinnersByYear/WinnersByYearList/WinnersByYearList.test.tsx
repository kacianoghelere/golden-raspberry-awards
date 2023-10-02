import React from 'react'

import { render } from '~/@tests'
import { generateMovies } from '~/@tests/generators'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import WinnersByYearList, { Props } from './WinnersByYearList'
import WinnersByYearListHeader from './WinnersByYearListHeader/WinnersByYearListHeader'
import { WinnersByYearListItem } from './WinnersByYearListItem/WinnersByYearListItem'

jest.mock('~/utils/hooks', () => mockHooksConfig())

const mockedMovies = generateMovies(2)

const renderComponent = ({
  movies = mockedMovies,
  onSearch = jest.fn()
}: Partial<Props> = {}) => render(
  <WinnersByYearList {...{
    movies,
    onSearch
  }} />
)

describe('WinnersByYearList', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })

  it('renders data correctly', () => {
    const mockedOnSearch = jest.fn()

    const instance = renderComponent({
      onSearch: mockedOnSearch
    }).root

    const year = '2001'

    const headerComponent = instance.findByType(WinnersByYearListHeader)
    headerComponent.props.onSearch(year)

    expect(mockedOnSearch).toHaveBeenCalledWith(year)

    const listItemComponents = instance.findAllByType(WinnersByYearListItem)

    expect(listItemComponents).toHaveLength(mockedMovies.length)
  })
})