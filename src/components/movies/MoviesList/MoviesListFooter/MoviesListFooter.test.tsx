import React from 'react'
import { act } from 'react-test-renderer'

import { render } from '~/@tests'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import * as MoviesListModule from '~/store/modules/movies/list'
import { useSelector } from '~/utils/hooks'
import MoviesListFooter from './MoviesListFooter'

jest.mock('~/store/modules/movies/list', () => ({
  AsyncActions: {
    fetchNextPage: jest.fn(),
    fetchPreviousPage: jest.fn()
  }
}))

jest.mock('~/utils/hooks', () => mockHooksConfig())

const mockedUseSelector = useSelector as jest.Mock

const renderComponent = () => render(<MoviesListFooter />)

describe('MoviesListFooter component', () => {
  beforeAll(() => {
    mockedUseSelector.mockImplementation((callback) => callback({
      movies: {
        data: {
          number: 1,
          totalPages: 10
        }
      }
    }))
  })

  it('renders correctly', () => {
    const component = renderComponent().toJSON()

    expect(component).toBeTruthy()
  })

  describe('next-page-button', () => {
    it('dispatches fetchNextPage action when next page button is clicked', () => {
      const instance = renderComponent().root

      const nextPageButton = instance.findByProps({ testID: 'next-page-button' })

      act(() => {
        nextPageButton.props.onPress()
      })

      expect(MoviesListModule.AsyncActions.fetchNextPage).toHaveBeenCalled()
    })
  })

  describe('prev-page-button', () => {
    it('dispatches fetchPreviousPage action when previous page button is clicked', () => {
      const instance = renderComponent().root

      const prevPageButton = instance.findByProps({ testID: 'prev-page-button' })

      act(() => {
        prevPageButton.props.onPress()
      })

      expect(MoviesListModule.AsyncActions.fetchPreviousPage).toHaveBeenCalled()
    })
  })
})
