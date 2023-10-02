import React from 'react'

import { render } from '~/@tests'
import { generateMovie } from '~/@tests/generators'
import { MoviesListItem, Props } from './MoviesListItem'

const mockedMovie = generateMovie(2, { winner: true })

const renderComponent = ({
  movie = mockedMovie
}: Partial<Props> = {}) => render(
  <MoviesListItem movie={movie} />
)

describe('MoviesListItem', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })

  it('renders data correctly', () => {
    const instance = renderComponent().root

    const movieTitle = instance.findByProps({ testID: 'movie-title' })

    expect(movieTitle.props.children).toBe(mockedMovie.title)

    const movieStudios = instance.findByProps({ testID: 'movie-studios' })

    expect(movieStudios.props.children).toBe(mockedMovie.studios.join(', '))

    const movieYear = instance.findByProps({ testID: 'movie-year' })

    expect(movieYear.props.children).toBe(mockedMovie.year)

    const winnerBadge = instance.findByProps({ testID: 'movie-winner-badge' })

    expect(winnerBadge).toBeTruthy()
  })
})