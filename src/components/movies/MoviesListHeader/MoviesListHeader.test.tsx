import React from 'react'
import renderer from 'react-test-renderer'

import MoviesListHeader, { MoviesListHeaderProps } from './MoviesListHeader'

const mockComponent = ({
  onSearch = jest.fn()
}: Partial<MoviesListHeaderProps> = {}) => (
  <MoviesListHeader {...{
    onSearch
  }} />
)

describe('MoviesListHeader', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})