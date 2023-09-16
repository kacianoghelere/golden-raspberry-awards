import React from 'react'
import renderer from 'react-test-renderer'

import MoviesScreen from './MoviesScreen'

describe('MoviesScreen', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(<MoviesScreen />).toJSON()

    expect(instance).toBeTruthy()
  })
})