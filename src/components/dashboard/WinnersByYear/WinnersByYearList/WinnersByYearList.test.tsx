import React from 'react'
import renderer from 'react-test-renderer'

import { generateMovies } from '~/@tests/generators'
import WinnersByYearList from './WinnersByYearList'

const mockedMovies = generateMovies(2)

const mockComponent = () => (
  <WinnersByYearList movies={mockedMovies} />
)

describe('WinnersByYearList', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})