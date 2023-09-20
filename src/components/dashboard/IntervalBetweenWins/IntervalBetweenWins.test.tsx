import React from 'react'
import renderer from 'react-test-renderer'

import IntervalBetweenWins from './IntervalBetweenWins'

describe('IntervalBetweenWins', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(<IntervalBetweenWins />).toJSON()

    expect(instance).toBeTruthy()
  })
})