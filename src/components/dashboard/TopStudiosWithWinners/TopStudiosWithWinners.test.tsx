import React from 'react'
import renderer from 'react-test-renderer'

import TopStudiosWithWinners from './TopStudiosWithWinners'

describe('TopStudiosWithWinners', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(<TopStudiosWithWinners />).toJSON()

    expect(instance).toBeTruthy()
  })
})