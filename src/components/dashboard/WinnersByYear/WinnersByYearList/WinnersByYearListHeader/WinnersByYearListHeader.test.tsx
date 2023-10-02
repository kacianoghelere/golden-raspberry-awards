import React from 'react'

import { render } from '~/@tests'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import WinnersByYearListHeader, { Props } from './WinnersByYearListHeader'
import { act } from 'react-test-renderer'

jest.mock('~/utils/hooks', () => mockHooksConfig())

const renderComponent = ({
  onSearch = jest.fn()
}: Partial<Props> = {}) => render(
  <WinnersByYearListHeader {...{ onSearch }} />
)

describe('WinnersByYearListHeader', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })

  it('renders WinnersByYearListHeader component correctly', () => {
    const mockedOnSearch = jest.fn()

    const instance = renderComponent({ onSearch: mockedOnSearch }).root

    const year = '2001'

    const searchField = instance.findByProps({ testID: 'search-field' })

    act(() => {
      searchField.props.onChangeText(year)
    })

    const searchButton = instance.findByProps({ testID: 'search-button' })

    act(() => {
      searchButton.props.onPress()
    })

    expect(mockedOnSearch).toHaveBeenCalledWith(year)
  })
})