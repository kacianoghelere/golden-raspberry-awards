import React from 'react'

import { render } from '~/@tests'
import { generateMovies } from '~/@tests/generators'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import MoviesList, { Props } from './MoviesList'

jest.mock('~/utils/hooks', () => mockHooksConfig())

const mockedMovies = generateMovies(3)

const renderComponent = ({
  movies = mockedMovies
}: Partial<Props> = {}) => render(
  <MoviesList movies={movies} />
)

describe('MoviesList component', () => {
  it('renders correctly', () => {
    const component = renderComponent().toJSON()

    expect(component).toBeTruthy()
  })
})