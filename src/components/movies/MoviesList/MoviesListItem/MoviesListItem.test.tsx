import React from 'react'
import renderer from 'react-test-renderer'

import { generateMovie } from '~/@tests/generators'
import { MoviesListItem, MoviesListItemProps } from './MoviesListItem'

const mockedMovie = generateMovie(2)

const renderComponent = ({
  movie = mockedMovie
}: Partial<MoviesListItemProps> = {}) => (
  <MoviesListItem movie={movie} />
)

describe('MoviesListItem', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(renderComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})