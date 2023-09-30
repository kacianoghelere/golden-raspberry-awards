import React from 'react'
import renderer from 'react-test-renderer'

import MoviesListFooter, { MoviesListFooterProps } from './MoviesListFooter'

const mockComponent = ({
  currentPage = 1,
  onNextPage = jest.fn(),
  onPreviousPage = jest.fn(),
  totalPages = 10
}: Partial<MoviesListFooterProps> = {}) => (
  <MoviesListFooter {...{
    currentPage,
    onNextPage,
    onPreviousPage,
    totalPages
  }} />
)

describe('MoviesListFooter', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})