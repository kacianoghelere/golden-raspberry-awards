import React from 'react'
import renderer from 'react-test-renderer'

import YearsWithMultipleWinners from './YearsWithMultipleWinners'

describe('YearsWithMultipleWinners', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(<YearsWithMultipleWinners />).toJSON()

    expect(instance).toBeTruthy()
  })
})