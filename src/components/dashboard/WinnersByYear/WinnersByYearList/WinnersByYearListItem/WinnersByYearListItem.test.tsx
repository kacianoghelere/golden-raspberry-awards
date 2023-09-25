import React from 'react'
import renderer from 'react-test-renderer'

import { generateMovie } from '~/@tests/generators'
import WinnersByYearListItem from './WinnersByYearListItem'

const mockedMovie = generateMovie(1)

const mockComponent = () => (
  <WinnersByYearListItem movie={mockedMovie} />
)

describe('WinnersByYearListItem', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})