import React from 'react'
import renderer from 'react-test-renderer'

import MoviesList from './MoviesList'

describe('MoviesList', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(<MoviesList />).toJSON()

    expect(instance).toBeTruthy()
  })
})