import React from 'react'

import { render } from '~/@tests'
import { generateMovie } from '~/@tests/generators'
import WinnersByYearListItem, { Props } from './WinnersByYearListItem'

const mockedMovie = generateMovie(1)

const renderComponent = ({
  movie = mockedMovie
}: Partial<Props> = {}) => render(
  <WinnersByYearListItem {...{ movie }} />
)

describe('WinnersByYearListItem', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })

  it('renders data correctly', () => {
    const instance = renderComponent().root

    const winnerMovieId = instance.findByProps({ testID: 'winner-movie-id' })

    expect(winnerMovieId.props.children).toBe(mockedMovie.id)

    const winnerMovieYear = instance.findByProps({ testID: 'winner-movie-year' })

    expect(winnerMovieYear.props.children).toBe(mockedMovie.year)

    const winnerMovieTitle = instance.findByProps({ testID: 'winner-movie-title' })

    expect(winnerMovieTitle.props.children).toBe(mockedMovie.title)
  })
})
